'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  useEffect(() => {
    // 1. Setup Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          intersectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const elementsToObserve = document.querySelectorAll(
        '.fade-in-up:not(.is-visible), .slide-in-left:not(.is-visible), .slide-in-right:not(.is-visible), .stat-card:not(.is-visible), .client-logo-card:not(.is-visible)'
      );
      elementsToObserve.forEach(el => intersectionObserver.observe(el));
    };

    // Initial observation
    observeElements();

    // 2. Setup Mutation Observer to catch newly rendered elements in Next.js SPA navigation
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
