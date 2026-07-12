import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

export const metadata = {
  title: "About Us | Projexel Engineering - Leading EPC Contractor in Gujarat",
  description: "Learn about Projexel Engineering, our mission, vision, and how we deliver world-class Engineering, Procurement, and Construction (EPC) services across India.",
  keywords: "about Projexel Engineering, EPC company Gujarat, engineering firm, EPC contractor India, turnkey projects",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      
    {/*  Navbar Placeholder  */}
    

    {/*  Page Header  */}
    <header className="page-header pattern-bg">
        <div className="container">
            <h1 className="page-title fade-in-up">ABOUT <span className="text-gradient">PROJEXEL</span></h1>
            <p className="page-subtitle fade-in-up delay-1">Delivering End-to-End EPC Solutions with Innovation, Reliability
                & Engineering Excellence.</p>
        </div>
    </header>

    {/*  Who We Are Section  */}
    <section className="about-section section-padding" style={{"backgroundColor":"var(--clr-surface-light)"}}>
        <div className="container">
            <div className="about-grid">
                <div className="about-text slide-in-left">
                    <span className="section-tag">Who We Are</span>
                    <h2 className="section-title">End-to-End Mechanical & Electrical Turnkey Solutions</h2>
                    <p className="section-desc" style={{"marginBottom":"2rem"}}>Projexel Engineering is at the forefront of
                        engineering excellence, providing comprehensive Engineering Solutions and Steel Fabrication
                        services. With over 10+ years of experience and a team of skilled professionals, we specialize
                        in delivering end-to-end Mechanical & Electrical Turnkey Project services. <br /><br />We are
                        committed to delivering solutions that meet the unique needs of our clients while ensuring
                        quality, safety, and efficiency in every project.</p>
                    <div className="about-btns">
                        <a href="/contact" className="btn btn-primary"
                            style={{"display":"inline-flex","alignItems":"center","gap":"0.5rem"}}>Request Consultation</a>
                        <a href="/assets/images/company-profile.pdf" target="_blank" className="btn btn-outline"
                            style={{"display":"inline-flex","alignItems":"center","gap":"0.5rem"}}><i className="ri-file-pdf-line"
                                style={{"fontSize":"1.1rem","color":"#ef4444"}}></i> Download Company Brochure</a>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-card glass-panel slide-in-right delay-1"
                        style={{"height":"100%","display":"flex","flexDirection":"column","justifyContent":"center"}}>
                        <div className="stat-icon">⏱️</div>
                        <AnimatedCounter target={10} suffix="+" />
                        <p className="stat-label">Years of Experience</p>
                    </div>
                    <div className="stat-card glass-panel slide-in-right delay-2"
                        style={{"height":"100%","display":"flex","flexDirection":"column","justifyContent":"center"}}>
                        <div className="stat-icon">🏗️</div>
                        <AnimatedCounter target={40} suffix="+" />
                        <p className="stat-label">Turnkey Projects Delivered</p>
                    </div>
                    <div className="stat-card stat-card-span-2 glass-panel slide-in-right delay-3"
                        style={{"height":"100%","display":"flex","flexDirection":"column","justifyContent":"center"}}>
                        <div className="stat-icon">⚙️</div>
                        <AnimatedCounter target={15} suffix="+" />
                        <p className="stat-label">Fabrication Projects Completed</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/*  Turnkey Project Solutions Section  */}
    <section className="about-section section-padding" style={{"backgroundColor":"var(--clr-surface)"}}>
        <div className="container">
            <div className="section-header fade-in-up" style={{"textAlign":"center","marginBottom":"4rem"}}>
                <span className="section-tag">Execution Excellence</span>
                <h2 className="section-title">Turnkey Project Management</h2>
                <p className="section-desc">From initial design to final commissioning, we provide comprehensive turnkey
                    project management ensuring seamless execution, quality control, and timely delivery.</p>
            </div>

            {/*  Infographic: Project Phases  */}
            <style dangerouslySetInnerHTML={{__html: `
                .timeline-wrapper {
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .timeline-step {
                    flex: 1;
                    text-align: center;
                    position: relative;
                    z-index: 1;
                    padding: 0 10px;
                }

                .timeline-circle {
                    width: 70px;
                    height: 70px;
                    background: white;
                    color: var(--clr-primary);
                    border: 3px solid var(--clr-primary);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin: 0 auto 1.5rem;
                    box-shadow: 0 10px 20px rgba(8, 65, 108, 0.15);
                    transition: var(--transition);
                }

                .timeline-step:hover .timeline-circle {
                    background: var(--clr-primary);
                    color: white;
                    transform: scale(1.1);
                }

                .timeline-connector {
                    position: absolute;
                    top: 35px;
                    left: 10%;
                    right: 10%;
                    height: 3px;
                    background: linear-gradient(90deg, var(--clr-primary), var(--clr-secondary));
                    z-index: 0;
                }

                @media (max-width: 900px) {
                    .timeline-wrapper {
                        flex-direction: column;
                        align-items: center;
                        gap: 2rem;
                    }

                    .timeline-connector {
                        display: none;
                    }

                    .timeline-step {
                        width: 100%;
                        max-width: 300px;
                    }
                }
            `}} />

            <div className="glass-panel timeline-container fade-in-up delay-1">
                <h3 className="portfolio-title" style={{"textAlign":"center","marginBottom":"3rem","fontSize":"1.8rem"}}>Project
                    Lifecycle Phases</h3>

                <div className="timeline-wrapper">
                    {/*  Connector Line  */}
                    <div className="timeline-connector"></div>

                    <div className="timeline-step">
                        <div className="timeline-circle">01</div>
                        <h4 style={{"fontSize":"1.2rem","color":"var(--clr-text)","marginBottom":"0.5rem"}}>Design</h4>
                        <p style={{"color":"var(--clr-text-muted)","fontSize":"0.9rem"}}>Conceptual & Detailed</p>
                    </div>

                    <div className="timeline-step">
                        <div className="timeline-circle">02</div>
                        <h4 style={{"fontSize":"1.2rem","color":"var(--clr-text)","marginBottom":"0.5rem"}}>Engineering</h4>
                        <p style={{"color":"var(--clr-text-muted)","fontSize":"0.9rem"}}>Technical & Structural</p>
                    </div>

                    <div className="timeline-step">
                        <div className="timeline-circle">03</div>
                        <h4 style={{"fontSize":"1.2rem","color":"var(--clr-text)","marginBottom":"0.5rem"}}>Procurement</h4>
                        <p style={{"color":"var(--clr-text-muted)","fontSize":"0.9rem"}}>Materials & Equipment</p>
                    </div>

                    <div className="timeline-step">
                        <div className="timeline-circle">04</div>
                        <h4 style={{"fontSize":"1.2rem","color":"var(--clr-text)","marginBottom":"0.5rem"}}>Construction</h4>
                        <p style={{"color":"var(--clr-text-muted)","fontSize":"0.9rem"}}>Execution & Installation</p>
                    </div>

                    <div className="timeline-step">
                        <div className="timeline-circle">05</div>
                        <h4 style={{"fontSize":"1.2rem","color":"var(--clr-text)","marginBottom":"0.5rem"}}>Commissioning</h4>
                        <p style={{"color":"var(--clr-text-muted)","fontSize":"0.9rem"}}>Testing & Handover</p>
                    </div>
                </div>
            </div>

            {/*  Strengths section as cards below  */}
            <div className="portfolio-grid fade-in-up delay-2">
                {/*  Strength 1  */}
                <div className="glass-panel"
                    style={{"padding":"2.5rem","borderRadius":"var(--radius-md)","textAlign":"center","borderBottom":"4px solid var(--clr-primary)"}}>
                    <div style={{"fontSize":"2.5rem","marginBottom":"1rem"}}>🔄</div>
                    <h4 style={{"fontSize":"1.2rem","marginBottom":"1rem"}}>Integrated Controls</h4>
                    <p style={{"color":"var(--clr-text-muted)","fontSize":"0.95rem"}}>Flawless coordination across all
                        engineering and execution verticals.</p>
                </div>
                {/*  Strength 2  */}
                <div className="glass-panel"
                    style={{"padding":"2.5rem","borderRadius":"var(--radius-md)","textAlign":"center","borderBottom":"4px solid var(--clr-primary)"}}>
                    <div style={{"fontSize":"2.5rem","marginBottom":"1rem"}}>🛡️</div>
                    <h4 style={{"fontSize":"1.2rem","marginBottom":"1rem"}}>Safety-First</h4>
                    <p style={{"color":"var(--clr-text-muted)","fontSize":"0.95rem"}}>Non-negotiable commitment to 100%
                        occupational health & safety records.</p>
                </div>
                {/*  Strength 3  */}
                <div className="glass-panel"
                    style={{"padding":"2.5rem","borderRadius":"var(--radius-md)","textAlign":"center","borderBottom":"4px solid var(--clr-primary)"}}>
                    <div style={{"fontSize":"2.5rem","marginBottom":"1rem"}}>⏱️</div>
                    <h4 style={{"fontSize":"1.2rem","marginBottom":"1rem"}}>Timely Delivery</h4>
                    <p style={{"color":"var(--clr-text-muted)","fontSize":"0.95rem"}}>Successfully maintaining a 99% delivery
                        rate on all project timelines.</p>
                </div>
            </div>

        </div>
    </section>

    {/*  Group Companies Section  */}
    <section className="group-companies-section section-padding" style={{"backgroundColor":"var(--clr-surface-light)"}}>
        <div className="container">
            <div className="section-header fade-in-up" style={{"textAlign":"center","marginBottom":"4rem"}}>
                <span className="section-tag">Our Network</span>
                <h2 className="section-title">Our Group of Companies</h2>
                <p className="section-desc">A synergistic collective of specialized engineering and infrastructure firms
                    delivering excellence across diverse industrial sectors.</p>
            </div>

            <div className="companies-grid">
                {/*  Company 1: Parasmani Engineering  */}
                <div className="glass-panel fade-in-up delay-1"
                    style={{"padding":"3rem 2rem","borderRadius":"var(--radius-lg)","borderTop":"5px solid var(--clr-primary)","transition":"var(--transition)","height":"100%"}}>
                    <div style={{"fontSize":"2.5rem","marginBottom":"1.5rem"}}>🏭</div>
                    <h3
                        style={{"fontFamily":"var(--font-heading)","fontSize":"1.4rem","marginBottom":"1.5rem","color":"var(--clr-primary)"}}>
                        Parasmani Engineering Pvt. Ltd.</h3>
                    <ul style={{"listStyle":"none","padding":"0"}}>
                        <li
                            style={{"display":"flex","alignItems":"center","gap":"0.8rem","marginBottom":"1rem","color":"var(--clr-text-muted)"}}>
                            <span style={{"color":"var(--clr-primary)"}}>●</span> Heavy & PEB Fabrication
                        </li>
                        <li style={{"display":"flex","alignItems":"center","gap":"0.8rem","color":"var(--clr-text-muted)"}}>
                            <span style={{"color":"var(--clr-primary)"}}>●</span> Welding & Cutting
                        </li>
                    </ul>
                </div>

                {/*  Company 2: PreFabrix Infratech  */}
                <div className="glass-panel fade-in-up delay-2"
                    style={{"padding":"3rem 2rem","borderRadius":"var(--radius-lg)","borderTop":"5px solid var(--clr-primary)","transition":"var(--transition)","height":"100%"}}>
                    <div style={{"fontSize":"2.5rem","marginBottom":"1.5rem"}}>🏗️</div>
                    <h3
                        style={{"fontFamily":"var(--font-heading)","fontSize":"1.4rem","marginBottom":"1.5rem","color":"var(--clr-primary)"}}>
                        PreFabrix Infratech Pvt. Ltd.</h3>
                    <ul style={{"listStyle":"none","padding":"0"}}>
                        <li
                            style={{"display":"flex","alignItems":"center","gap":"0.8rem","marginBottom":"1rem","color":"var(--clr-text-muted)"}}>
                            <span style={{"color":"var(--clr-primary)"}}>●</span> PEB & Turnkey Infrastructure
                        </li>
                        <li style={{"display":"flex","alignItems":"center","gap":"0.8rem","color":"var(--clr-text-muted)"}}>
                            <span style={{"color":"var(--clr-primary)"}}>●</span> Structural Steel Fabrication
                        </li>
                    </ul>
                </div>

                {/*  Company 3: EcoTherm Cooling  */}
                <div className="glass-panel fade-in-up delay-3"
                    style={{"padding":"3rem 2rem","borderRadius":"var(--radius-lg)","borderTop":"5px solid var(--clr-primary)","transition":"var(--transition)","height":"100%"}}>
                    <div style={{"fontSize":"2.5rem","marginBottom":"1.5rem"}}>❄️</div>
                    <h3
                        style={{"fontFamily":"var(--font-heading)","fontSize":"1.4rem","marginBottom":"1.5rem","color":"var(--clr-primary)"}}>
                        EcoTherm Cooling Solutions</h3>
                    <ul style={{"listStyle":"none","padding":"0"}}>
                        <li
                            style={{"display":"flex","alignItems":"center","gap":"0.8rem","marginBottom":"1rem","color":"var(--clr-text-muted)"}}>
                            <span style={{"color":"var(--clr-primary)"}}>●</span> Cold Rooms & Storage
                        </li>
                        <li
                            style={{"display":"flex","alignItems":"center","gap":"0.8rem","marginBottom":"1rem","color":"var(--clr-text-muted)"}}>
                            <span style={{"color":"var(--clr-primary)"}}>●</span> Industrial Refrigeration
                        </li>
                        <li style={{"display":"flex","alignItems":"center","gap":"0.8rem","color":"var(--clr-text-muted)"}}>
                            <span style={{"color":"var(--clr-primary)"}}>●</span> Blast Freezers
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/*  Clients Grid Section  */}
    <section className="clients-grid-section section-padding" style={{"backgroundColor":"var(--clr-surface)"}}>
        <div className="container">
            <div className="section-header fade-in-up" style={{"textAlign":"center","marginBottom":"4rem"}}>
                <span className="section-tag">Partnerships</span>
                <h2 className="section-title">Our Valued Clients</h2>
                <p className="section-desc">We are proud to have collaborated with leading organizations across various
                    industries, delivering excellence and engineering precision.</p>
            </div>

            <div className="clients-grid"
                style={{"display":"grid","gridTemplateColumns":"repeat(auto-fill, minmax(180px, 1fr))","gap":"2rem"}}>
                <div className="client-logo-card glass-panel fade-in-up delay-1">
                    <img src="/assets/images/Client Logo/Group 2739.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-2">
                    <img src="/assets/images/Client Logo/Group 2741.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-3">
                    <img src="/assets/images/Client Logo/Group 2743.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-4">
                    <img src="/assets/images/Client Logo/Group 2744.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-1">
                    <img src="/assets/images/Client Logo/Group 2745.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-2">
                    <img src="/assets/images/Client Logo/Group 2746.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-3">
                    <img src="/assets/images/Client Logo/Group 2747.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-4">
                    <img src="/assets/images/Client Logo/Group 2748.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-1">
                    <img src="/assets/images/Client Logo/Group 2749.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-2">
                    <img src="/assets/images/Client Logo/Group 2750.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-3">
                    <img src="/assets/images/Client Logo/Group 2751.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-4">
                    <img src="/assets/images/Client Logo/Group 2752.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-1">
                    <img src="/assets/images/Client Logo/Group 2753.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-2">
                    <img src="/assets/images/Client Logo/Group 2754.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-3">
                    <img src="/assets/images/Client Logo/Group 2755.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-4">
                    <img src="/assets/images/Client Logo/Group 2756.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-1">
                    <img src="/assets/images/Client Logo/Group 2757.png" alt="Client Logo" loading="lazy" />
                </div>
                <div className="client-logo-card glass-panel fade-in-up delay-2">
                    <img src="/assets/images/Client Logo/Group 2758.png" alt="Client Logo" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    {/*  Mission & Vision Section  */}
    <section className="projects-page-section section-padding" style={{"backgroundColor":"var(--clr-bg)"}}>
        <div className="container">
            <div className="section-header fade-in-up" style={{"textAlign":"center","marginBottom":"4rem"}}>
                <span className="section-tag">Our Philosophy</span>
                <h2 className="section-title">Mission & Vision</h2>
            </div>

            <div className="grid-2-col">

                {/*  Mission Card  */}
                <div className="glass-panel fade-in-up delay-1"
                    style={{"padding":"4rem 3rem","borderRadius":"var(--radius-lg)","textAlign":"center","position":"relative","overflow":"hidden","borderTop":"4px solid var(--clr-primary)"}}>
                    <div style={{"fontSize":"3rem","marginBottom":"1.5rem"}}>🎯</div>
                    <h3
                        style={{"fontFamily":"var(--font-heading)","fontSize":"2rem","marginBottom":"1.5rem","color":"var(--clr-text)"}}>
                        Our Mission</h3>
                    <p style={{"color":"var(--clr-text-muted)","fontSize":"1.1rem","lineHeight":"1.8"}}>To become a globally
                        recognized engineering services provider, dedicated to delivering superior Mechanical &
                        Electrical turnkey solutions and fabrication services. <br /><br />We are committed to excellence in
                        every project with a strong focus on quality, safety, and customer satisfaction, fostering
                        long-term client relationships and continuous improvement.</p>
                </div>

                {/*  Vision Card  */}
                <div className="glass-panel fade-in-up delay-2"
                    style={{"padding":"4rem 3rem","borderRadius":"var(--radius-lg)","textAlign":"center","position":"relative","overflow":"hidden","borderTop":"4px solid var(--clr-secondary)"}}>
                    <div style={{"fontSize":"3rem","marginBottom":"1.5rem"}}>👁️</div>
                    <h3
                        style={{"fontFamily":"var(--font-heading)","fontSize":"2rem","marginBottom":"1.5rem","color":"var(--clr-text)"}}>
                        Our Vision</h3>
                    <p style={{"color":"var(--clr-text-muted)","fontSize":"1.1rem","lineHeight":"1.8"}}>To be the global
                        leader in delivering innovative, sustainable, and high-quality engineering solutions, setting
                        benchmarks for excellence and reliability in Mechanical & Electrical turnkey projects and
                        fabrication services.</p>
                </div>

            </div>
        </div>
    </section>

    {/*  Footer Placeholder  */}
    

    

      <Footer />
    </>
  );
}

