'use client';

import { useState } from 'react';
import { projectsData } from '@/data/projectsData';

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Sectors' },
    { id: 'water', label: 'Water & Environmental' },
    { id: 'mechanical', label: 'Mechanical & Structure' },
    { id: 'electrical', label: 'Electrical & Instrumentation' }
  ];

  return (
    <section className="projects-page-section">
      <div className="container">
        {/* Category Filtering */}
        <div className="portfolio-filter fade-in-up delay-2 is-visible">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid" id="portfolio-grid">
          {projectsData.map((project) => {
            const isHidden = activeFilter !== 'all' && activeFilter !== project.category;
            return (
              <div
                key={project.id}
                className={`portfolio-card fade-in-up ${isHidden ? 'hide' : ''}`}
                data-category={project.category}
              >
                <div className="portfolio-img-wrapper">
                  <div
                    className="portfolio-img"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  ></div>
                </div>
                <div className="portfolio-content">
                  <div className="client-name">
                    {project.id}. {project.client}
                  </div>
                  <div className="spec-grid">
                    <div className="spec-row">
                      <span className="spec-label">📍 Location:</span>
                      <span className="spec-value">{project.location}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">🏢 Company/EPC:</span>
                      <span className="spec-value">{project.epc}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Work Description:</span>
                      <span className="spec-value">{project.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
