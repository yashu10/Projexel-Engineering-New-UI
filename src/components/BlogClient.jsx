'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Industrial Trends', label: 'Industrial Trends' },
    { id: 'Technology', label: 'Technology' },
    { id: 'Company News', label: 'Company News' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="blog-section" style={{ padding: '80px 0', backgroundColor: 'var(--clr-surface-light)' }}>
      <div className="container">
        
        {/* Controls (Search & Filters) */}
        <div className="glass-panel fade-in-up is-visible" style={{
          padding: '2rem',
          borderRadius: 'var(--radius-md)',
          marginBottom: '4rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          
          {/* Category Filters */}
          <div className="portfolio-filter" style={{ marginBottom: '0', paddingTop: '0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                borderRadius: '50px',
                border: '1px solid rgba(0,0,0,0.1)',
                outline: 'none',
                transition: 'var(--transition)',
                background: 'white',
                fontFamily: 'inherit',
                fontSize: '0.95rem'
              }}
            />
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--clr-text-muted)', fontSize: '1.1rem' }}>
              <i className="ri-search-line"></i>
            </span>
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🔍</div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>No Articles Found</h3>
            <p style={{ color: 'var(--clr-text-muted)' }}>Try adjusting your filters or search keywords.</p>
          </div>
        ) : (
          <div className="portfolio-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="glass-panel fade-in-up is-visible"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'var(--transition)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ overflow: 'hidden', height: '220px' }}>
                  <div
                    style={{
                      height: '100%',
                      backgroundImage: `url('${post.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    className="blog-card-image"
                  ></div>
                </div>
                <div style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: 'var(--clr-primary)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {post.category}
                    </span>
                    <span style={{ color: 'var(--clr-text-muted)', fontSize: '0.8rem' }}>{post.readTime}</span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    lineHeight: 1.4,
                    marginBottom: '1rem',
                    color: 'var(--clr-text)',
                    transition: 'var(--transition)'
                  }}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.95rem', marginBottom: '1.8rem', flexGrow: 1, lineHeight: 1.6 }}>
                    {post.summary}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    paddingTop: '1.2rem',
                    marginTop: 'auto'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        background: 'rgba(8,65,108,0.1)',
                        color: 'var(--clr-primary)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                      }}>
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--clr-text)' }}>{post.author}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--clr-text-muted)' }}>{post.date}</div>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`} style={{
                      color: 'var(--clr-primary)',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.9rem'
                    }}>
                      Read More <span style={{ transition: 'transform 0.3s' }} className="arrow">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
