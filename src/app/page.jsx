import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

export const metadata = {
  title: "Projexel Engineering | Top EPC & Industrial Services in Ahmedabad",
  description: "Projexel Engineering offers premier Turnkey EPC, E&I, and mechanical fabrication solutions in Ahmedabad, Gujarat. Trusted by leading brands like JSW Steel and Coca-Cola.",
  keywords: "EPC contractor, turnkey projects, industrial engineering, E&I, mechanical fabrication, Ahmedabad, Gujarat, India",
};

export default function Home() {
  return (
    <>
      <Header />
      
    {/*  Navbar Placeholder  */}
    

    {/*  Hero Section  */}
    <header className="hero">
        {/*  Left Side Content  */}
        <div className="hero-left-content">
            <div className="hero-tagline-wrap fade-in-up">
                <span className="hero-tagline">Smart. Safe. Sustainable.</span>
            </div>

            <h1 className="hero-title-new fade-in-up delay-1">
                From Concept to Commissioning, <br />We Deliver <span className="highlight-orange">Excellence</span>
            </h1>

            <p className="hero-subtitle-new fade-in-up delay-2">
                End-to-end Mechanical & Electrical EPC solutions for industries that power our world.
            </p>

            <div className="hero-cta-new fade-in-up delay-3">
                <a href="/services" className="btn-explore">
                    Explore Our Services <i className="ri-arrow-right-line"></i>
                </a>
                <a href="/assets/images/company-profile.pdf" target="_blank" className="btn-download-pdf">
                    <i className="ri-download-line"></i> Download Brochure
                </a>
            </div>

            {/*  Value Proposition row  */}
            <div className="hero-values-row fade-in-up delay-4">
                <div className="hero-value-item">
                    <i className="ri-shield-check-line"></i>
                    <span>Safety First</span>
                </div>
                <div className="hero-value-item">
                    <i className="ri-time-line"></i>
                    <span>On-Time Delivery</span>
                </div>
                <div className="hero-value-item">
                    <i className="ri-award-line"></i>
                    <span>Quality Assured</span>
                </div>
                <div className="hero-value-item">
                    <i className="ri-user-heart-line"></i>
                    <span>Client Focused</span>
                </div>
            </div>
        </div>

        {/*  Right Side Refinery Image Column  */}
        <div className="hero-right-image-wrap">
            <div className="hero-right-image" style={{"backgroundImage":"url('/assets/images/hero_bg.png')"}}></div>

            {/*  Floating Watch Video Card  */}
            {/*  <div className="hero-video-card">
                <div className="video-play-btn">
                    <i className="ri-play-fill"></i>
                </div>
                <div className="video-card-text">
                    <h5>Watch Our Video</h5>
                    <p>See how we deliver excellence</p>
                </div>
            </div>  */}
        </div>
    </header>

    {/*  Stats / About Section  */}
    <section id="about" className="about-section">
        <div className="container">
            <div className="about-grid">
                <div className="about-text slide-in-left">
                    <span className="section-tag">Who We Are</span>
                    <h2 className="section-title">End-to-End Mechanical & Electrical Turnkey Solutions</h2>
                    <p className="section-desc">Projexel Engineering is at the forefront of engineering excellence,
                        providing comprehensive Engineering Solutions and Steel Fabrication services. With over 10+
                        years of experience and a team of skilled professionals, we specialize in delivering end-to-end
                        Mechanical & Electrical Turnkey Project services.</p>
                    <a href="/about" className="btn btn-outline" style={{"marginTop":"1.5rem"}}>Read Our Full Story</a>
                </div>
                <div className="stats-grid">
                    <div className="stat-card glass-panel slide-in-right delay-1">
                        <div className="stat-icon">⏱️</div>
                        <AnimatedCounter target={10} suffix="+" />
                        <p className="stat-label">Years of Experience</p>
                    </div>
                    <div className="stat-card glass-panel slide-in-right delay-2">
                        <div className="stat-icon">🏗️</div>
                        <AnimatedCounter target={40} suffix="+" />
                        <p className="stat-label">Turnkey Projects</p>
                    </div>
                    <div className="stat-card glass-panel slide-in-right delay-3">
                        <div className="stat-icon">⚙️</div>
                        <AnimatedCounter target={15} suffix="+" />
                        <p className="stat-label">Fabrication Projects</p>
                    </div>
                    <div className="stat-card glass-panel slide-in-right delay-4">
                        <div className="stat-icon">🛡️</div>
                        <AnimatedCounter target={100} suffix="%" />
                        <p className="stat-label">Safety Record</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/*  Clients Grid Section  */}
    <section className="clients-grid-section fade-in-up"
        style={{"padding":"100px 0","backgroundColor":"var(--clr-surface-light)"}}>
        <div className="container">
            <div className="section-header fade-in-up" style={{"textAlign":"center","marginBottom":"4rem"}}>
                <span className="section-tag">Trusted By</span>
                <h2 className="section-title">Our Prestigious Clients</h2>
                <p className="section-desc">We are proud to have collaborated with leading organizations across various
                    industries, delivering excellence and engineering precision.</p>
            </div>

            <div className="clients-grid"
                style={{"display":"grid","gridTemplateColumns":"repeat(auto-fill, minmax(180px, 1fr))","gap":"2rem"}}>
                <div className="client-logo-card glass-panel fade-in-up delay-1">
                    <img src="/assets/images/Client Logo/Group 2739.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-2">
                    <img src="/assets/images/Client Logo/Group 2741.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-3">
                    <img src="/assets/images/Client Logo/Group 2743.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-4">
                    <img src="/assets/images/Client Logo/Group 2744.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-1">
                    <img src="/assets/images/Client Logo/Group 2745.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-2">
                    <img src="/assets/images/Client Logo/Group 2746.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-3">
                    <img src="/assets/images/Client Logo/Group 2747.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-4">
                    <img src="/assets/images/Client Logo/Group 2748.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-1">
                    <img src="/assets/images/Client Logo/Group 2749.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-2">
                    <img src="/assets/images/Client Logo/Group 2750.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-3">
                    <img src="/assets/images/Client Logo/Group 2751.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-4">
                    <img src="/assets/images/Client Logo/Group 2752.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-1">
                    <img src="/assets/images/Client Logo/Group 2753.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-2">
                    <img src="/assets/images/Client Logo/Group 2754.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-3">
                    <img src="/assets/images/Client Logo/Group 2755.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-4">
                    <img src="/assets/images/Client Logo/Group 2756.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-1">
                    <img src="/assets/images/Client Logo/Group 2757.png" alt="Client Logo" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-2">
                    <img src="/assets/images/Client Logo/Group 2758.png" alt="Client Logo" />
                </div>
            </div>
        </div>
    </section>

    {/*  Services Section  */}
    <section id="services" className="services-section">
        <div className="container">
            <div className="section-header fade-in-up">
                <span className="section-tag">Our Expertise</span>
                <h2 className="section-title">Core Capabilities</h2>
                <p className="section-desc">Comprehensive engineering solutions tailored to industrial scale, complexity,
                    and rigorous standards.</p>
            </div>

            <div className="services-grid">
                {/*  Service 1  */}
                <div className="service-card fade-in-up delay-1">
                    <div className="service-image" style={{"backgroundImage":"url('/assets/images/service_turnkey.png')"}}>
                    </div>
                    <div className="service-content glass-panel">
                        <div className="service-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                                <line x1="4" y1="22" x2="4" y2="15"></line>
                            </svg>
                        </div>
                        <h3 className="service-title">Turnkey Construction</h3>
                        <p className="service-text">End-to-end Engineering, Procurement, and Construction (EPC) solutions
                            from conceptual design to commissioning for heavy industries.</p>

                    </div>
                </div>

                {/*  Service 2  */}
                <div className="service-card fade-in-up delay-2">
                    <div className="service-image" style={{"backgroundImage":"url('/assets/images/service_ei.png')"}}></div>
                    <div className="service-content glass-panel">
                        <div className="service-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                            </svg>
                        </div>
                        <h3 className="service-title">E&I Projects</h3>
                        <p className="service-text">Advanced Electrical and Instrumentation services ensuring optimal plant
                            performance, automation, and continuous operations.</p>

                    </div>
                </div>

                {/*  Service 3  */}
                <div className="service-card fade-in-up delay-3">
                    <div className="service-image" style={{"backgroundImage":"url('/assets/images/service_industrial.png')"}}>
                    </div>
                    <div className="service-content glass-panel">
                        <div className="service-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path
                                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                                </path>
                            </svg>
                        </div>
                        <h3 className="service-title">Industrial Fabrication</h3>
                        <p className="service-text">Cutting-edge engineering and design for robust, sustainable
                            manufacturing facilities and critical infrastructure.</p>

                    </div>
                </div>
                {/*  Service 4  */}
                <div className="service-card fade-in-up delay-1">
                    <div className="service-image" style={{"backgroundImage":"url('/assets/images/service_mechanical.png')"}}>
                    </div>
                    <div className="service-content glass-panel">
                        <div className="service-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path
                                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z">
                                </path>
                            </svg>
                        </div>
                        <h3 className="service-title">Mechanical & Piping Works</h3>
                        <p className="service-text">Robust heavy mechanical and complex piping installations tailored for
                            refineries and large-scale manufacturing plants.</p>

                    </div>
                </div>

                {/*  Service 5  */}
                <div className="service-card fade-in-up delay-2">
                    <div className="service-image" style={{"backgroundImage":"url('/assets/images/service_oilgas.png')"}}></div>
                    <div className="service-content glass-panel">
                        <div className="service-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v20"></path>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </div>
                        <h3 className="service-title">Oil, Gas & Water Infrastructure</h3>
                        <p className="service-text">Executing major cross-country pipelines, city gas distribution, and
                            advanced water treatment facilities safely.</p>

                    </div>
                </div>

                {/*  Service 6  */}
                <div className="service-card fade-in-up delay-3">
                    <div className="service-image" style={{"backgroundImage":"url('/assets/images/service_mep.png')"}}></div>
                    <div className="service-content glass-panel">
                        <div className="service-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="9" y1="3" x2="9" y2="21"></line>
                                <path d="M13 8h4"></path>
                                <path d="M13 12h4"></path>
                                <path d="M13 16h4"></path>
                            </svg>
                        </div>
                        <h3 className="service-title">MEP Contracting</h3>
                        <p className="service-text">Integrated Mechanical, Electrical, and Plumbing solutions designed for
                            absolute efficiency and low environmental footprint.</p>

                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Projects Preview Section  */}
    <section id="projects" className="projects-preview-section"
        style={{"padding":"var(--section-spacing) 0","backgroundColor":"var(--clr-bg)"}}>
        <div className="container">
            <div className="section-header fade-in-up">
                <span className="section-tag">Portfolio</span>
                <h2 className="section-title">Completed Projects</h2>
                <p className="section-desc">A glimpse into our recent successful executions.</p>
            </div>

            <div className="portfolio-grid">
                {/*  Project 1  */}
                <div className="portfolio-card fade-in-up delay-1">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('/assets/images/Project/Sr. 1 Gujrat gardian ma.jpeg')"}}></div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">1. Gujarat Guardian Limited</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Ankleshwer, Gujarat</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Ankleshwer, Gujarat</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Mechanical Equipment Erection, Piping & Fabrication</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 2  */}
                <div className="portfolio-card fade-in-up delay-2">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('/assets/images/Project/2. JSW Steel Limited.jpeg')"}}>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">2. JSW Steel Limited</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Bellary, Karnataka</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Thermax Ltd.</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Tank Fabrication, Painting, Shifting and Erection Work</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 3  */}
                <div className="portfolio-card fade-in-up delay-3">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('/assets/images/Project/Atul Valsad, Gujarat.png')"}}></div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">4. Atul Ltd. (Valsad)</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Valsad, Gujarat</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Praj Industries Ltd.</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Electrical Power Distribution, Instrumentation & Control
                                    System</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center" style={{"marginTop":"3rem","textAlign":"center"}}>
                <a href="/projects" className="btn btn-outline btn-lg fade-in-up">View All Projects</a>
            </div>
        </div>
    </section>

    {/*  Industries Served Section  */}
    <section id="industries" className="industries-section">
        <div className="container">
            <div className="section-header fade-in-up">
                <span className="section-tag">Domains</span>
                <h2 className="section-title">Industries We Serve</h2>
            </div>
            <div className="industries-grid">
                <div className="industry-card fade-in-up delay-1">
                    <h3>Oil & Gas</h3>
                    <p>Pipelines & Infrastructure</p>
                </div>
                <div className="industry-card fade-in-up delay-2">
                    <h3>Power & Energy</h3>
                    <p>Generation & Distribution</p>
                </div>
                <div className="industry-card fade-in-up delay-3">
                    <h3>Water Management</h3>
                    <p>Treatment & Supply Networks</p>
                </div>
                <div className="industry-card fade-in-up delay-4">
                    <h3>Heavy Manufacturing</h3>
                    <p>Steel, Cement & Chemicals</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Trust & Certifications Banner  */}
    {/*  <section className="trust-banner fade-in-up">
        <div className="container">
            <h3 className="trust-title">Global Standards of Quality & Safety</h3>
            <div className="cert-logos">
                <div className="cert text-gradient">ISO 9001:2015 <br /><span>Quality Management</span></div>
                <div className="cert text-gradient">ISO 14001:2015 <br /><span>Environmental Management</span></div>
                <div className="cert text-gradient">ISO 45001:2018 <br /><span>Occupational Health</span></div>
            </div>
        </div>
    </section>  */}

    {/*  CTA Section  */}
    {/*  Blog / Insights Section  */}
    <section id="blog" className="blog-section" style={{"padding":"100px 0","backgroundColor":"var(--clr-surface-light)"}}>
        <div className="container">
            <div className="section-header fade-in-up">
                <span className="section-tag">Insights</span>
                <h2 className="section-title">Latest From Projexel</h2>
                <p className="section-desc">Stay updated with the latest trends in industrial engineering, EPC developments,
                    and company news.</p>
            </div>

            <div className="portfolio-grid"
                style={{"gridTemplateColumns":"repeat(auto-fit, minmax(320px, 1fr))","gap":"2.5rem"}}>
                {/*  Blog Post 1  */}
                <div className="glass-panel fade-in-up delay-1"
                    style={{"padding":"0","overflow":"hidden","borderRadius":"var(--radius-lg)","transition":"var(--transition)"}}>
                    <div
                        style={{"height":"200px","backgroundImage":"url('/assets/images/proj_real_water.png')","backgroundSize":"cover","backgroundPosition":"center"}}>
                    </div>
                    <div style={{"padding":"2rem"}}>
                        <span
                            style={{"color":"var(--clr-primary)","fontSize":"0.85rem","fontWeight":"600","textTransform":"uppercase","letterSpacing":"1px"}}>Technology</span>
                        <h3 style={{"fontFamily":"var(--font-heading)","fontSize":"1.3rem","marginTop":"1rem","marginBottom":"1rem","lineHeight":"1.4","cursor":"pointer"}}
                            >Unlocking Zero Liquid
                            Discharge (ZLD): Sustainable Water Engineering</h3>
                        <p style={{"color":"var(--clr-text-muted)","fontSize":"0.95rem","marginBottom":"1.5rem"}}>Discover the
                            core engineering principles, thermal MEE/ATFD evaporation, and corporate ROI behind ZLD
                            setups...</p>
                        <a href="/blog/zero-liquid-discharge"
                            style={{"color":"var(--clr-primary)","fontWeight":"600","textDecoration":"none","borderBottom":"2px solid transparent","transition":"var(--transition)","display":"inline-flex","alignItems":"center","gap":"0.5rem"}}>Read
                            Article <span>&rarr;</span></a>
                    </div>
                </div>

                {/*  Blog Post 2  */}
                <div className="glass-panel fade-in-up delay-2"
                     style={{"padding":"0","overflow":"hidden","borderRadius":"var(--radius-lg)","transition":"var(--transition)"}}>
                    <div
                        style={{"height":"200px","backgroundImage":"url('/assets/images/proj_real_mechanical.png')","backgroundSize":"cover","backgroundPosition":"center"}}>
                    </div>
                    <div style={{"padding":"2rem"}}>
                        <span
                            style={{"color":"var(--clr-primary)","fontSize":"0.85rem","fontWeight":"600","textTransform":"uppercase","letterSpacing":"1px"}}>Industrial
                            Trends</span>
                        <h3 style={{"fontFamily":"var(--font-heading)","fontSize":"1.3rem","marginTop":"1rem","marginBottom":"1rem","lineHeight":"1.4","cursor":"pointer"}}
                            >The Future of EPC Projects: Trends
                            to Watch in 2026</h3>
                        <p style={{"color":"var(--clr-text-muted)","fontSize":"0.95rem","marginBottom":"1.5rem"}}>Exploring
                            how digital twins and modular construction are revolutionizing heavy industrial project
                            delivery...</p>
                        <a href="/blog/epc-trends"
                            style={{"color":"var(--clr-primary)","fontWeight":"600","textDecoration":"none","borderBottom":"2px solid transparent","transition":"var(--transition)","display":"inline-flex","alignItems":"center","gap":"0.5rem"}}>Read
                            Article <span>&rarr;</span></a>
                    </div>
                </div>

                {/*  Blog Post 3  */}
                <div className="glass-panel fade-in-up delay-3"
                     style={{"padding":"0","overflow":"hidden","borderRadius":"var(--radius-lg)","transition":"var(--transition)"}}>
                    <div
                        style={{"height":"200px","backgroundImage":"url('/assets/images/proj_real_ei.png')","backgroundSize":"cover","backgroundPosition":"center"}}>
                    </div>
                    <div style={{"padding":"2rem"}}>
                        <span
                            style={{"color":"var(--clr-primary)","fontSize":"0.85rem","fontWeight":"600","textTransform":"uppercase","letterSpacing":"1px"}}>Technology</span>
                        <h3 style={{"fontFamily":"var(--font-heading)","fontSize":"1.3rem","marginTop":"1rem","marginBottom":"1rem","lineHeight":"1.4","cursor":"pointer"}}
                            >Optimizing Water Treatment with IoT
                            & Automation</h3>
                        <p style={{"color":"var(--clr-text-muted)","fontSize":"0.95rem","marginBottom":"1.5rem"}}>How smart
                            instrumentation is providing real-time data to maximize plant efficiency and reduce waste...
                        </p>
                        <a href="/blog/water-iot"
                            style={{"color":"var(--clr-primary)","fontWeight":"600","textDecoration":"none","borderBottom":"2px solid transparent","transition":"var(--transition)","display":"inline-flex","alignItems":"center","gap":"0.5rem"}}>Read
                            Article <span>&rarr;</span></a>
                    </div>
                </div>
            </div>


            <div style={{"textAlign":"center","marginTop":"3.5rem"}}>
                <a href="/blog" className="btn btn-outline">Browse All News</a>
            </div>
        </div>
    </section>

    {/*  CTA Section  */}
    <section className="cta-section">
        <div className="container cta-wrapper fade-in-up">
            <div className="cta-banner">
                <div className="cta-left">
                    <div className="cta-icon-circle">
                        <i className="ri-pencil-ruler-2-line"></i>
                    </div>
                    <div className="cta-divider"></div>
                </div>
                <div className="cta-middle">
                    <h2 className="cta-title-new">Ready to Engineer the <span className="highlight-orange">Extraordinary</span>?
                    </h2>
                    <p className="cta-text-new">Partner with ProJexel Engineering for integrated, innovative EPC solutions
                        that turn your vision into reality.</p>
                </div>
                <div className="cta-right">
                    <a href="/contact" className="cta-btn-new">
                        Request a Consultation <i className="ri-arrow-right-line"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/*  Footer Placeholder  */}
    

    

      <Footer />
    </>
  );
}

