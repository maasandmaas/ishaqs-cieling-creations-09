import { useState, useEffect } from "react";
import { getProjects, getProject, getCategories, getFeaturedProjects, getRelatedProjects } from "@/services/api";
import type { Project, ProjectsApiResponse } from "@/services/api";

// Hook for getting all projects with filtering
export const useProjects = (params: {
  category?: string;
  featured?: boolean;
  page?: number;
  per_page?: number;
  search?: string;
} = {}) => {
  const [data, setData] = useState<ProjectsApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getProjects(params);
        setData(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [params.category, params.featured, params.page, params.per_page, params.search]);

  return { data, loading, error, refetch: () => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getProjects(params);
        setData(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }};
};

// Hook for getting single project
export const useProject = (id: string | undefined) => {
  const [data, setData] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        const project = await getProject(id);
        setData(project);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch project');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  return { data, loading, error };
};

// Hook for getting categories
export const useCategories = () => {
  const [data, setData] = useState<Array<{id: string, name: string, count: number}>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const categories = await getCategories();
        setData(categories);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { data, loading, error };
};

// Hook for getting featured projects
export const useFeaturedProjects = (limit?: number) => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const projects = await getFeaturedProjects(limit);
        setData(projects);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch featured projects');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, [limit]);

  return { data, loading, error };
};

// Hook for getting related projects
export const useRelatedProjects = (projectId: string | undefined, category: string, limit: number = 3) => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectId) {
      setLoading(false);
      return;
    }

    const fetchRelatedProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const projects = await getRelatedProjects(projectId, category, limit);
        setData(projects);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch related projects');
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProjects();
  }, [projectId, category, limit]);

  return { data, loading, error };
};