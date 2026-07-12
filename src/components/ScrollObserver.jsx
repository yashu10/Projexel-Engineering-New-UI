'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll Animation (Intersection Observer)
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Let AnimatedCounter component handle counting if needed, 
          // or we can dispatch a custom event if we want.
          // In React, we'll implement counting logic inside the component state
          // of the stat card itself for robustness!
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    const elementsToObserve = document.querySelectorAll(
      '.fade-in-up, .slide-in-left, .slide-in-right, .stat-card, .client-logo-card'
    );
    elementsToObserve.forEach(el => observer.observe(el));

    // Cleanup on unmount or path change
    return () => {
      elementsToObserve.forEach(el => {
        try {
          observer.unobserve(el);
        } catch (e) {
          // ignore
        }
      });
      observer.disconnect();
    };
  }, [pathname]); // Re-run when page path changes

  return null; // This component doesn't render any visible UI
}
