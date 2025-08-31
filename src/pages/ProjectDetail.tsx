import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  User, 
  Ruler, 
  Clock, 
  DollarSign,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle
} from "lucide-react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import projectsData from "@/data/projects.json";

interface Project {
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

const ProjectDetail = () => {
  useRevealAnimation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundProject = projectsData.projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject as Project);
    }
  }, [id]);

  const handlePrevImage = () => {
    if (!project) return;
    const prevIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(project.images[prevIndex]);
  };

  const handleNextImage = () => {
    if (!project) return;
    const nextIndex = (currentImageIndex + 1) % project.images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(project.images[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "ArrowLeft") {
          handlePrevImage();
        } else if (e.key === "ArrowRight") {
          handleNextImage();
        } else if (e.key === "Escape") {
          setSelectedImage(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentImageIndex, project]);

  if (!project) {
    return (
      <div className="pt-24 min-h-screen bg-midnight flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair text-white mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-6">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/gallery")} variant="outline" className="border-gold text-gold">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-midnight min-h-screen">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed opacity-20" 
          style={{ 
            backgroundImage: `url(${project.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8 reveal">
            <Button
              onClick={() => navigate("/gallery")}
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-black"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Button>
          </div>
          
          <div className="max-w-4xl mx-auto text-center reveal">
            <Badge className="mb-4 bg-gold text-black capitalize text-sm">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {project.description}
            </p>
            
            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-midnight-light px-4 py-3 rounded-lg">
                <MapPin className="text-gold h-5 w-5 mx-auto mb-1" />
                <p className="text-sm text-gray-300">{project.location}</p>
              </div>
              <div className="bg-midnight-light px-4 py-3 rounded-lg">
                <Calendar className="text-gold h-5 w-5 mx-auto mb-1" />
                <p className="text-sm text-gray-300">{project.year}</p>
              </div>
              <div className="bg-midnight-light px-4 py-3 rounded-lg">
                <Ruler className="text-gold h-5 w-5 mx-auto mb-1" />
                <p className="text-sm text-gray-300">{project.area}</p>
              </div>
              <div className="bg-midnight-light px-4 py-3 rounded-lg">
                <Clock className="text-gold h-5 w-5 mx-auto mb-1" />
                <p className="text-sm text-gray-300">{project.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images Gallery */}
      <section className="py-16 bg-midnight-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 gold-gradient reveal">
            Project Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div 
                key={index}
                className="group overflow-hidden rounded-xl fancy-border reveal cursor-pointer hover-glow transition-all duration-300"
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentImageIndex(index);
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-midnight">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Info */}
            <div className="reveal">
              <h2 className="text-3xl font-playfair font-bold mb-6 gold-gradient">Project Overview</h2>
              
              <div className="space-y-6">
                <div className="bg-midnight-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gold mb-3">Challenge</h3>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>
                
                <div className="bg-midnight-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gold mb-3">Solution</h3>
                  <p className="text-gray-300">{project.solution}</p>
                </div>
              </div>
              
              {/* Project Specifications */}
              <div className="mt-8 bg-midnight-light p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gold mb-4">Project Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <User className="text-gold h-5 w-5" />
                    <div>
                      <p className="text-sm text-gray-400">Client</p>
                      <p className="text-white">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="text-gold h-5 w-5" />
                    <div>
                      <p className="text-sm text-gray-400">Budget</p>
                      <p className="text-white">{project.budget}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features and Materials */}
            <div className="reveal">
              <h2 className="text-3xl font-playfair font-bold mb-6 gold-gradient">Features & Materials</h2>
              
              <div className="space-y-6">
                <div className="bg-midnight-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="text-gold h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-midnight-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gold mb-4">Materials Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.materials.map((material, index) => (
                      <Badge key={index} variant="outline" className="border-gold/30 text-gray-300">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-midnight-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 gold-gradient reveal">
            Related Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.projects
              .filter(p => p.category === project.category && p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/project/${relatedProject.id}`}
                  className="group overflow-hidden rounded-xl fancy-border reveal hover-glow transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={relatedProject.thumbnail} 
                      alt={relatedProject.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-midnight">
                    <h3 className="text-white font-playfair font-medium group-hover:text-gold transition-colors duration-300">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-gray-400 capitalize">
                      {relatedProject.category} - {relatedProject.location}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-midnight-accent border-gold/30">
          <div className="relative">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            {/* Navigation Buttons */}
            {project && project.images.length > 1 && (
              <>
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
            
            {/* Image */}
            <div className="w-full aspect-[16/9] overflow-hidden">
              {selectedImage && (
                <img 
                  src={selectedImage} 
                  alt={`${project.title} - Detail view`}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            
            {/* Caption */}
            {selectedImage && (
              <div className="p-6 bg-midnight-accent">
                <h3 className="text-2xl font-playfair font-medium text-gold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300">
                  Image {currentImageIndex + 1} of {project.images.length}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;