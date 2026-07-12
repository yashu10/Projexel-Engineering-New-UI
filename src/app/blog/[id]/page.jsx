import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) {
    return {
      title: "Article Not Found | Projexel Engineering",
    };
  }
  return {
    title: `${post.title} | Projexel Engineering`,
    description: post.summary,
  };
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <>
        <Header />
        <section style={{ padding: '120px 0', textAlign: 'center', backgroundColor: 'var(--clr-surface-light)' }}>
          <div className="container" style={{ maxWidth: '600px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>⚠️</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', marginBottom: '1rem' }}>Article Not Found</h2>
            <p style={{ color: 'var(--clr-text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              The article you are trying to view does not exist or has been moved.
            </p>
            <Link href="/blog" className="btn btn-primary btn-lg">Back to Insights</Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const initials = post.author.split(' ').map((n) => n[0]).join('');
  const recentArticles = blogPosts.filter((p) => p.id !== id).slice(0, 3);

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <header className="page-header pattern-bg" style={{ padding: '160px 0 100px', textAlign: 'left' }}>
        <div className="container">
          <div id="articleHeader" className="fade-in-up is-visible">
            {/* Back Link */}
            <Link href="/blog" style={{
              color: 'var(--clr-primary)',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '2rem',
              fontSize: '0.95rem'
            }}>
              <i className="ri-arrow-left-line"></i> Back to Insights
            </Link>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span id="articleCategory" style={{
                padding: '0.35rem 1rem',
                backgroundColor: 'rgba(8, 65, 108, 0.1)',
                color: 'var(--clr-primary)',
                borderRadius: '50px',
                fontSize: '0.8rem',
                fontWeight: '600',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}>{post.category}</span>
              <span id="articleReadTime" style={{ color: 'var(--clr-text-muted)', fontSize: '0.85rem' }}>
                <i className="ri-time-line"></i> {post.readTime}
              </span>
            </div>
            <h1 id="articleTitle" className="page-title" style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              lineHeight: '1.3',
              marginBottom: '2rem',
              maxWidth: '900px',
              textAlign: 'left'
            }}>{post.title}</h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div id="articleAuthorInitial" style={{
                width: '48px',
                height: '48px',
                background: 'var(--clr-primary)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: '2px solid white',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                {initials}
              </div>
              <div>
                <div id="articleAuthor" style={{ fontWeight: '600', color: 'var(--clr-text)', fontSize: '1rem' }}>{post.author}</div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span id="articleAuthorRole" style={{ fontSize: '0.8rem', color: 'var(--clr-text-muted)' }}>{post.role}</span>
                  <span style={{ color: 'rgba(0,0,0,0.15)' }}>|</span>
                  <span id="articleDate" style={{ fontSize: '0.8rem', color: 'var(--clr-text-muted)' }}>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <section className="blog-detail-section" style={{ backgroundColor: 'var(--clr-bg)' }}>
        <div className="container">
          <div className="blog-detail-container">
            
            {/* Main Article Column */}
            <div className="article-column slide-in-left is-visible">
              {/* Featured Image */}
              <div style={{
                width: '100%',
                height: 'clamp(250px, 45vw, 450px)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                marginBottom: '3rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
              }}>
                <img id="articleImage" src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>

              {/* Article Body Content */}
              <article id="articleBody" className="article-content" dangerouslySetInnerHTML={{ __html: post.content }}>
              </article>
              
              {/* Share and Actions */}
              <div className="glass-panel" style={{
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                marginTop: '4rem',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1.5rem'
              }}>
                <div style={{ fontWeight: '600', color: 'var(--clr-text)' }}>Was this article helpful?</div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>
                    <i className="ri-thumb-up-line" style={{ marginRight: '0.5rem' }}></i> Helpful
                  </button>
                  <button className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>
                    <i className="ri-share-line" style={{ marginRight: '0.5rem' }}></i> Share Link
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="sidebar-column slide-in-right is-visible">
              
              {/* Search Widget */}
              <div className="glass-panel sidebar-widget">
                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  marginBottom: '1.5rem',
                  borderBottom: '2px solid rgba(8,65,108,0.1)',
                  paddingBottom: '0.5rem'
                }}>Search Insights</h4>
                <div style={{ position: 'relative' }}>
                  <input type="text" placeholder="Type and enter..." style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.2rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(0,0,0,0.1)',
                    outline: 'none',
                    transition: 'var(--transition)',
                    background: 'white',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem'
                  }} />
                  <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--clr-text-muted)', fontSize: '1rem' }}>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </div>

              {/* Recent Posts Widget */}
              <div className="glass-panel sidebar-widget">
                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  marginBottom: '1.5rem',
                  borderBottom: '2px solid rgba(8,65,108,0.1)',
                  paddingBottom: '0.5rem'
                }}>Recent Articles</h4>
                <div id="recentPostsList">
                  {recentArticles.map((p) => (
                    <Link href={`/blog/${p.id}`} key={p.id} className="recent-post-item" style={{ textDecoration: 'none', display: 'flex', gap: '1rem', marginBottom: '1.5rem', cursor: 'pointer' }}>
                      <div className="recent-post-img" style={{
                        width: '80px',
                        height: '60px',
                        borderRadius: '8px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url('${p.image}')`,
                        flexShrink: 0
                      }}></div>
                      <div>
                        <h5 className="recent-post-title" style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.95rem',
                          lineHeight: '1.3',
                          margin: '0 0 0.25rem',
                          color: 'var(--clr-text)',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>{p.title}</h5>
                        <div className="recent-post-date" style={{ fontSize: '0.75rem', color: 'var(--clr-text-muted)' }}>{p.date}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Contact / Brochure CTA Widget */}
              <div className="glass-panel sidebar-widget" style={{
                background: 'linear-gradient(135deg, var(--clr-primary), var(--clr-primary-hover))',
                color: 'white',
                border: 'none',
                textAlign: 'center',
                padding: '3rem 2rem'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏗️</div>
                <h3 style={{ color: 'white', fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1rem' }}>Need Turnkey Solutions?</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '2rem' }}>Get in touch with our engineering experts to discuss your ambitious industrial project.</p>
                <Link href="/contact" className="btn btn-outline" style={{ background: 'white', color: 'var(--clr-primary)', fontWeight: 'bold', border: 'none', width: '100%', display: 'block', textAlign: 'center' }}>
                  Get a Consultation
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
