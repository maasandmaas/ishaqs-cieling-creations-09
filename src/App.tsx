
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {

    // Add progress bar based on scroll
    const updateProgressBar = () => {
      const progressBar = document.querySelector('.progress-bar') as HTMLElement;
      if (progressBar) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = `${(scrollTop / scrollHeight) * 100}%`;
        progressBar.style.width = progress;
      }
    };

    window.addEventListener('scroll', updateProgressBar);

    // Custom cursor
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    const updateCursor = (e: MouseEvent) => {
      customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener('mousemove', updateCursor);

    // Detect hover on links and buttons
    const handleHoverElements = () => {
      const interactiveElements = document.querySelectorAll('a, button');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          customCursor.style.width = '60px';
          customCursor.style.height = '60px';
          customCursor.style.transform = `translate(${parseInt(customCursor.style.transform.split('(')[1]) - 10}px, ${parseInt(customCursor.style.transform.split(',')[1]) - 10}px)`;
        });
        
        el.addEventListener('mouseleave', () => {
          customCursor.style.width = '32px';
          customCursor.style.height = '32px';
        });
      });
    };

    // Call once for initial elements
    handleHoverElements();

    // Setup MutationObserver to handle dynamically added elements
    const bodyObserver = new MutationObserver(handleHoverElements);
    bodyObserver.observe(document.body, { childList: true, subtree: true });

    // Parallax effect on scroll
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    const handleParallax = () => {
      parallaxElements.forEach(el => {
        const scrolled = window.scrollY;
        const element = el as HTMLElement;
        element.style.transform = `translateY(${scrolled * 0.3}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('scroll', handleParallax);
      if (customCursor) customCursor.remove();
      bodyObserver.disconnect();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="progress-bar"></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
