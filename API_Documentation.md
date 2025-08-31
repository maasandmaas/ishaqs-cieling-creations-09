# IQFal's Ceiling API Documentation

This document outlines the API endpoints you need to create on your WordPress site at `https://iqfalseceilings.site/` to make your projects completely dynamic.

## Base URLs
- **WordPress REST API Base**: `https://iqfalseceilings.site/wp-json/wp/v2`
- **Custom API Base**: `https://iqfalseceilings.site/wp-json/custom/v1`

## 🔗 Required API Endpoints

### 1. GET `/wp-json/custom/v1/projects` - Get All Projects

**Purpose**: Fetch all projects with optional filtering, pagination, and search

**Query Parameters**:
```
- category (optional): string - Filter by category ('residential', 'commercial', 'gypsum', 'pop', 'wooden', 'acoustic')
- featured (optional): boolean - Filter featured projects (true/false)
- page (optional): number - Page number for pagination (default: 1)
- per_page (optional): number - Number of projects per page (default: 10)
- search (optional): string - Search term for title, description, or location
```

**Example Requests**:
```
GET /wp-json/custom/v1/projects
GET /wp-json/custom/v1/projects?category=residential
GET /wp-json/custom/v1/projects?featured=true&per_page=1
GET /wp-json/custom/v1/projects?search=luxury&category=residential
```

**Expected Response**:
```json
{
  "projects": [
    {
      "id": "luxury-villa-f7",
      "title": "Luxury Villa in F-7 Islamabad",
      "category": "residential",
      "location": "F-7, Islamabad",
      "year": "2024",
      "client": "Mr. Ahmed Khan",
      "area": "4,500 sq ft",
      "duration": "45 days",
      "budget": "PKR 2,500,000",
      "description": "This signature project showcases our mastery...",
      "challenge": "The homeowners wanted a ceiling that would...",
      "solution": "We implemented a multi-level ceiling design...",
      "features": [
        "Multi-level gypsum ceiling design",
        "Integrated LED strip lighting",
        "Custom POP moldings"
      ],
      "materials": [
        "Premium Gypsum Board",
        "LED Strip Lights",
        "POP (Plaster of Paris)"
      ],
      "images": [
        "https://iqfalseceilings.site/wp-content/uploads/project1-1.jpg",
        "https://iqfalseceilings.site/wp-content/uploads/project1-2.jpg"
      ],
      "thumbnail": "https://iqfalseceilings.site/wp-content/uploads/project1-thumb.jpg",
      "featured": true
    }
  ],
  "total": 25,
  "page": 1,
  "per_page": 10,
  "total_pages": 3
}
```

### 2. GET `/wp-json/custom/v1/projects/{id}` - Get Single Project

**Purpose**: Fetch detailed information for a specific project

**Path Parameters**:
```
- id (required): string - Unique project identifier
```

**Example Request**:
```
GET /wp-json/custom/v1/projects/luxury-villa-f7
```

**Expected Response**:
```json
{
  "id": "luxury-villa-f7",
  "title": "Luxury Villa in F-7 Islamabad",
  "category": "residential",
  "location": "F-7, Islamabad",
  "year": "2024",
  "client": "Mr. Ahmed Khan",
  "area": "4,500 sq ft",
  "duration": "45 days",
  "budget": "PKR 2,500,000",
  "description": "This signature project showcases our mastery...",
  "challenge": "The homeowners wanted a ceiling that would...",
  "solution": "We implemented a multi-level ceiling design...",
  "features": [
    "Multi-level gypsum ceiling design",
    "Integrated LED strip lighting",
    "Custom POP moldings",
    "Smart lighting control system"
  ],
  "materials": [
    "Premium Gypsum Board",
    "LED Strip Lights",
    "POP (Plaster of Paris)",
    "Wooden Beams"
  ],
  "images": [
    "https://iqfalseceilings.site/wp-content/uploads/project1-1.jpg",
    "https://iqfalseceilings.site/wp-content/uploads/project1-2.jpg",
    "https://iqfalseceilings.site/wp-content/uploads/project1-3.jpg"
  ],
  "thumbnail": "https://iqfalseceilings.site/wp-content/uploads/project1-thumb.jpg",
  "featured": true
}
```

### 3. GET `/wp-json/custom/v1/categories` - Get All Categories

**Purpose**: Fetch all project categories with project counts

**Expected Response**:
```json
[
  {
    "id": "all",
    "name": "All Projects",
    "count": 25
  },
  {
    "id": "residential",
    "name": "Residential",
    "count": 12
  },
  {
    "id": "commercial",
    "name": "Commercial",
    "count": 8
  },
  {
    "id": "gypsum",
    "name": "Gypsum Designs",
    "count": 6
  },
  {
    "id": "pop",
    "name": "POP Designs",
    "count": 4
  },
  {
    "id": "wooden",
    "name": "Wooden Ceilings",
    "count": 3
  },
  {
    "id": "acoustic",
    "name": "Acoustic Solutions",
    "count": 2
  }
]
```

## 🏗️ WordPress Implementation Guide

### Step 1: Create Custom Post Type for Projects

Add this to your `functions.php` file:

```php
function create_projects_post_type() {
    register_post_type('project',
        array(
            'labels' => array(
                'name' => __('Projects'),
                'singular_name' => __('Project')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'menu_icon' => 'dashicons-building',
            'show_in_rest' => true,
        )
    );
}
add_action('init', 'create_projects_post_type');
```

### Step 2: Create Custom Taxonomy for Categories

```php
function create_project_category_taxonomy() {
    register_taxonomy(
        'project_category',
        'project',
        array(
            'label' => __('Project Categories'),
            'rewrite' => array('slug' => 'project-category'),
            'hierarchical' => true,
            'show_in_rest' => true,
        )
    );
}
add_action('init', 'create_project_category_taxonomy');
```

### Step 3: Add Custom API Endpoints

Add this to your `functions.php` file:

```php
// Register custom REST API endpoints
add_action('rest_api_init', function () {
    
    // Get all projects endpoint
    register_rest_route('custom/v1', '/projects', array(
        'methods' => 'GET',
        'callback' => 'get_projects_api',
        'permission_callback' => '__return_true'
    ));
    
    // Get single project endpoint
    register_rest_route('custom/v1', '/projects/(?P<id>[a-zA-Z0-9-]+)', array(
        'methods' => 'GET',
        'callback' => 'get_single_project_api',
        'permission_callback' => '__return_true'
    ));
    
    // Get categories endpoint
    register_rest_route('custom/v1', '/categories', array(
        'methods' => 'GET',
        'callback' => 'get_project_categories_api',
        'permission_callback' => '__return_true'
    ));
});

// Get projects API function
function get_projects_api($request) {
    $params = $request->get_params();
    
    $args = array(
        'post_type' => 'project',
        'post_status' => 'publish',
        'posts_per_page' => isset($params['per_page']) ? intval($params['per_page']) : 10,
        'paged' => isset($params['page']) ? intval($params['page']) : 1,
        'meta_query' => array()
    );
    
    // Filter by category
    if (isset($params['category']) && $params['category'] !== 'all') {
        $args['tax_query'] = array(
            array(
                'taxonomy' => 'project_category',
                'field'    => 'slug',
                'terms'    => $params['category']
            )
        );
    }
    
    // Filter by featured
    if (isset($params['featured'])) {
        $args['meta_query'][] = array(
            'key' => 'featured',
            'value' => $params['featured'] === 'true' ? '1' : '0',
            'compare' => '='
        );
    }
    
    // Search functionality
    if (isset($params['search'])) {
        $args['s'] = $params['search'];
    }
    
    $query = new WP_Query($args);
    $projects = array();
    
    foreach ($query->posts as $post) {
        $projects[] = format_project_data($post);
    }
    
    return array(
        'projects' => $projects,
        'total' => $query->found_posts,
        'page' => intval($args['paged']),
        'per_page' => intval($args['posts_per_page']),
        'total_pages' => $query->max_num_pages
    );
}

// Get single project API function
function get_single_project_api($request) {
    $id = $request['id'];
    
    $posts = get_posts(array(
        'post_type' => 'project',
        'meta_query' => array(
            array(
                'key' => 'project_id',
                'value' => $id,
                'compare' => '='
            )
        ),
        'posts_per_page' => 1
    ));
    
    if (empty($posts)) {
        return new WP_Error('project_not_found', 'Project not found', array('status' => 404));
    }
    
    return format_project_data($posts[0]);
}

// Get categories API function
function get_project_categories_api($request) {
    $categories = get_terms(array(
        'taxonomy' => 'project_category',
        'hide_empty' => true
    ));
    
    $formatted_categories = array(
        array(
            'id' => 'all',
            'name' => 'All Projects',
            'count' => wp_count_posts('project')->publish
        )
    );
    
    foreach ($categories as $category) {
        $formatted_categories[] = array(
            'id' => $category->slug,
            'name' => $category->name,
            'count' => $category->count
        );
    }
    
    return $formatted_categories;
}

// Format project data helper function
function format_project_data($post) {
    $project_id = get_post_meta($post->ID, 'project_id', true);
    $gallery_images = get_post_meta($post->ID, 'gallery_images', true);
    $features = get_post_meta($post->ID, 'features', true);
    $materials = get_post_meta($post->ID, 'materials', true);
    
    // Get category
    $categories = wp_get_post_terms($post->ID, 'project_category');
    $category = !empty($categories) ? $categories[0]->slug : '';
    
    return array(
        'id' => $project_id ?: $post->post_name,
        'title' => $post->post_title,
        'category' => $category,
        'location' => get_post_meta($post->ID, 'location', true),
        'year' => get_post_meta($post->ID, 'year', true),
        'client' => get_post_meta($post->ID, 'client', true),
        'area' => get_post_meta($post->ID, 'area', true),
        'duration' => get_post_meta($post->ID, 'duration', true),
        'budget' => get_post_meta($post->ID, 'budget', true),
        'description' => $post->post_content,
        'challenge' => get_post_meta($post->ID, 'challenge', true),
        'solution' => get_post_meta($post->ID, 'solution', true),
        'features' => $features ? explode("\n", $features) : array(),
        'materials' => $materials ? explode("\n", $materials) : array(),
        'images' => $gallery_images ? explode("\n", $gallery_images) : array(),
        'thumbnail' => get_the_post_thumbnail_url($post->ID, 'large'),
        'featured' => get_post_meta($post->ID, 'featured', true) === '1'
    );
}
```

### Step 4: Add Custom Fields to Project Posts

You'll need to add these custom fields to each project post:
- `project_id` - Unique identifier (e.g., "luxury-villa-f7")
- `location` - Project location
- `year` - Project year
- `client` - Client name
- `area` - Project area
- `duration` - Project duration
- `budget` - Project budget
- `challenge` - Project challenge description
- `solution` - Project solution description
- `features` - Features (one per line)
- `materials` - Materials (one per line)
- `gallery_images` - Image URLs (one per line)
- `featured` - Featured project (1 for yes, 0 for no)

## 🔧 Testing Your API

Test your endpoints using these URLs:

```
1. Get all projects:
   https://iqfalseceilings.site/wp-json/custom/v1/projects

2. Get residential projects:
   https://iqfalseceilings.site/wp-json/custom/v1/projects?category=residential

3. Get featured projects:
   https://iqfalseceilings.site/wp-json/custom/v1/projects?featured=true

4. Get single project:
   https://iqfalseceilings.site/wp-json/custom/v1/projects/luxury-villa-f7

5. Get categories:
   https://iqfalseceilings.site/wp-json/custom/v1/categories
```

## ✅ Benefits of This Setup

1. **Automatic Fallback**: If API fails, it automatically uses your JSON data
2. **Loading States**: Beautiful loading animations while fetching data
3. **Error Handling**: Graceful error handling with user-friendly messages
4. **Performance**: Optimized API calls with proper caching
5. **SEO Friendly**: Dynamic content is still crawlable by search engines
6. **Easy Management**: Manage projects through WordPress admin
7. **Scalable**: Easy to add more fields and functionality

Your website will now be completely dynamic while maintaining reliability with the JSON fallback system!