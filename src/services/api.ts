import projectsData from "@/data/projects.json";

// API Configuration
const API_BASE_URL = "https://iqfalseceilings.site/wp-json/wp/v2";
const CUSTOM_API_BASE = "https://iqfalseceilings.site/wp-json/custom/v1";

// Types
export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  area: string;
  duration: string;
  budget: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  materials: string[];
  images: string[];
  thumbnail: string;
  featured: boolean;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ProjectsApiResponse {
  projects: Project[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}

// API Service Class
class ApiService {
  private async fetchWithFallback<T>(
    endpoint: string, 
    fallbackData: T,
    options?: RequestInit
  ): Promise<T> {
    try {
      const response = await fetch(endpoint, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.warn(`API call failed for ${endpoint}, using fallback data:`, error);
      return fallbackData;
    }
  }

  // Get all projects with optional filtering
  async getProjects(params: {
    category?: string;
    featured?: boolean;
    page?: number;
    per_page?: number;
    search?: string;
  } = {}): Promise<ProjectsApiResponse> {
    const searchParams = new URLSearchParams();
    
    if (params.category && params.category !== 'all') {
      searchParams.append('category', params.category);
    }
    if (params.featured !== undefined) {
      searchParams.append('featured', params.featured.toString());
    }
    if (params.page) {
      searchParams.append('page', params.page.toString());
    }
    if (params.per_page) {
      searchParams.append('per_page', params.per_page.toString());
    }
    if (params.search) {
      searchParams.append('search', params.search);
    }

    const endpoint = `${CUSTOM_API_BASE}/projects?${searchParams.toString()}`;
    
    // Fallback data preparation
    let filteredProjects = projectsData.projects as Project[];
    
    if (params.category && params.category !== 'all') {
      filteredProjects = filteredProjects.filter(p => p.category === params.category);
    }
    if (params.featured !== undefined) {
      filteredProjects = filteredProjects.filter(p => p.featured === params.featured);
    }
    if (params.search) {
      const searchLower = params.search.toLowerCase();
      filteredProjects = filteredProjects.filter(p => 
        p.title.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.location.toLowerCase().includes(searchLower)
      );
    }

    const fallbackResponse: ProjectsApiResponse = {
      projects: filteredProjects,
      total: filteredProjects.length,
      page: params.page || 1,
      per_page: params.per_page || filteredProjects.length,
      total_pages: 1
    };

    return this.fetchWithFallback(endpoint, fallbackResponse);
  }

  // Get single project by ID
  async getProject(id: string): Promise<Project | null> {
    const endpoint = `${CUSTOM_API_BASE}/projects/${id}`;
    
    // Fallback data
    const fallbackProject = projectsData.projects.find(p => p.id === id) as Project || null;
    
    return this.fetchWithFallback(endpoint, fallbackProject);
  }

  // Get all categories
  async getCategories(): Promise<Array<{id: string, name: string, count: number}>> {
    const endpoint = `${CUSTOM_API_BASE}/categories`;
    
    // Fallback data - calculate from projects
    const categoryCounts = projectsData.projects.reduce((acc: Record<string, number>, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1;
      return acc;
    }, {});

    const fallbackCategories = [
      { id: "all", name: "All Projects", count: projectsData.projects.length },
      { id: "residential", name: "Residential", count: categoryCounts.residential || 0 },
      { id: "commercial", name: "Commercial", count: categoryCounts.commercial || 0 },
      { id: "gypsum", name: "Gypsum Designs", count: categoryCounts.gypsum || 0 },
      { id: "pop", name: "POP Designs", count: categoryCounts.pop || 0 },
      { id: "wooden", name: "Wooden Ceilings", count: categoryCounts.wooden || 0 },
      { id: "acoustic", name: "Acoustic Solutions", count: categoryCounts.acoustic || 0 }
    ];

    return this.fetchWithFallback(endpoint, fallbackCategories);
  }

  // Get featured projects
  async getFeaturedProjects(limit?: number): Promise<Project[]> {
    const params = { featured: true, per_page: limit };
    const response = await this.getProjects(params);
    return response.projects;
  }

  // Get related projects
  async getRelatedProjects(projectId: string, category: string, limit: number = 3): Promise<Project[]> {
    const params = { category, per_page: limit + 1 }; // Get one extra to filter out current project
    const response = await this.getProjects(params);
    return response.projects.filter(p => p.id !== projectId).slice(0, limit);
  }

  // Search projects
  async searchProjects(query: string, category?: string): Promise<Project[]> {
    const params = { search: query, category };
    const response = await this.getProjects(params);
    return response.projects;
  }
}

// Export singleton instance
export const apiService = new ApiService();

// Convenience functions
export const getProjects = (params?: Parameters<typeof apiService.getProjects>[0]) => 
  apiService.getProjects(params);

export const getProject = (id: string) => 
  apiService.getProject(id);

export const getCategories = () => 
  apiService.getCategories();

export const getFeaturedProjects = (limit?: number) => 
  apiService.getFeaturedProjects(limit);

export const getRelatedProjects = (projectId: string, category: string, limit?: number) => 
  apiService.getRelatedProjects(projectId, category, limit);

export const searchProjects = (query: string, category?: string) => 
  apiService.searchProjects(query, category);