import { useEffect } from 'react';

export const useRevealAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((element) => observer.observe(element));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
};