import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Our Services | Turnkey EPC, E&I & Fabrication | Projexel Engineering",
  description: "Explore our wide range of services including Turnkey EPC, Electrical & Instrumentation (E&I), Mechanical Fabrication, and Industrial Automation solutions.",
  keywords: "EPC services, E&I solutions, mechanical fabrication, industrial automation, turnkey projects, electrical engineering",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      
    {/*  Navbar Placeholder  */}
    

    {/*  Page Header  */}
    <header className="page-header pattern-bg">
        <div className="container">
            <h1 className="page-title fade-in-up">OUR <span className="text-gradient">SERVICES</span></h1>
            <p className="page-subtitle fade-in-up delay-1">Comprehensive Mechanical, Fabrication, Electrical, and Instrumentation Solutions.</p>
        </div>
    </header>

    {/*  Services Detailed Section  */}
    <section className="projects-page-section" style={{"backgroundColor":"var(--clr-surface-light)"}}>
        <div className="container">
            
            {/*  Section 1: Mechanical & Fabrication  */}
            <div className="service-category" style={{"marginBottom":"6rem"}}>
                <div className="section-header fade-in-up">
                    <span className="section-tag">Heavy Engineering</span>
                    <h2 className="section-title">Mechanical & Fabrication Services</h2>
                    <p className="section-desc">Delivering comprehensive mechanical solutions and precision-engineered fabrication tailored for industrial and infrastructure projects.</p>
                </div>

                <div className="portfolio-grid two-cols fade-in-up delay-2" style={{"gridTemplateColumns":"repeat(auto-fit, minmax(400px, 1fr))"}}>
                    
                    {/*  Mechanical Subsection  */}
                    <div className="glass-panel service-panel">
                        <div className="service-icon" style={{"background":"var(--clr-primary)","color":"white","borderRadius":"50%","width":"60px","height":"60px","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.5rem","marginBottom":"1.5rem"}}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        </div>
                        <h3 className="portfolio-title" style={{"marginBottom":"1rem","fontSize":"1.5rem"}}>Mechanical Services</h3>
                        <p style={{"color":"var(--clr-text-muted)","marginBottom":"2rem"}}>We deliver comprehensive mechanical solutions tailored for industrial and infrastructure projects.</p>
                        
                        <h4 style={{"fontSize":"1.1rem","marginBottom":"1rem","color":"var(--clr-text)"}}>Services Include:</h4>
                        <ul style={{"listStyle":"none","padding":"0"}}>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Plant & Equipment Installation
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Pumping Stations
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Industrial Piping Systems (MS, SS, HDPE)
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Equipment Erection
                            </li>
                        </ul>
                    </div>

                    {/*  Fabrication Subsection  */}
                    <div className="glass-panel service-panel">
                        <div className="service-icon" style={{"background":"var(--clr-primary)","color":"white","borderRadius":"50%","width":"60px","height":"60px","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.5rem","marginBottom":"1.5rem"}}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                        </div>
                        <h3 className="portfolio-title" style={{"marginBottom":"1rem","fontSize":"1.5rem"}}>Fabrication Services</h3>
                        <p style={{"color":"var(--clr-text-muted)","marginBottom":"2rem"}}>High-quality, precision-engineered steel and heavy equipment fabrication.</p>
                        
                        <h4 style={{"fontSize":"1.1rem","marginBottom":"1rem","color":"var(--clr-text)"}}>Services Include:</h4>
                        <ul style={{"listStyle":"none","padding":"0"}}>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Heavy Equipment Fabrication
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Tailor-Made Steel Fabrication
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Industrial Sheds & Structures
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Pre-Engineered Buildings (PEB)
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/*  Section 2: Electrical & Instrumentation  */}
            <div className="service-category">
                <div className="section-header fade-in-up">
                    <span className="section-tag">Power & Control</span>
                    <h2 className="section-title">Electrical & Instrumentation Services</h2>
                    <p className="section-desc">End-to-end electrical solutions and precision-driven instrumentation for accurate monitoring and safe, efficient operations.</p>
                </div>

                <div className="portfolio-grid two-cols fade-in-up delay-2" style={{"gridTemplateColumns":"repeat(auto-fit, minmax(400px, 1fr))"}}>
                    
                    {/*  Electrical Subsection  */}
                    <div className="glass-panel service-panel">
                        <div className="service-icon" style={{"background":"var(--clr-primary)","color":"white","borderRadius":"50%","width":"60px","height":"60px","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.5rem","marginBottom":"1.5rem"}}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        </div>
                        <h3 className="portfolio-title" style={{"marginBottom":"1rem","fontSize":"1.5rem"}}>Electrical Services</h3>
                        <p style={{"color":"var(--clr-text-muted)","marginBottom":"2rem"}}>End-to-end electrical solutions ensuring safe and efficient operations.</p>
                        
                        <h4 style={{"fontSize":"1.1rem","marginBottom":"1rem","color":"var(--clr-text)"}}>Services Include:</h4>
                        <ul style={{"listStyle":"none","padding":"0"}}>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Substation Installation
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> HT/LT & Control Panels
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Cabling & Termination
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Testing & Automation
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Lighting Systems
                            </li>
                        </ul>
                    </div>

                    {/*  Instrumentation Subsection  */}
                    <div className="glass-panel service-panel">
                        <div className="service-icon" style={{"background":"var(--clr-primary)","color":"white","borderRadius":"50%","width":"60px","height":"60px","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.5rem","marginBottom":"1.5rem"}}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <h3 className="portfolio-title" style={{"marginBottom":"1rem","fontSize":"1.5rem"}}>Instrumentation Services</h3>
                        <p style={{"color":"var(--clr-text-muted)","marginBottom":"2rem"}}>Precision-driven instrumentation solutions for accurate monitoring and automation.</p>
                        
                        <h4 style={{"fontSize":"1.1rem","marginBottom":"1rem","color":"var(--clr-text)"}}>Services Include:</h4>
                        <ul style={{"listStyle":"none","padding":"0"}}>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Instrument Erection
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Cabling & Termination
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Testing & Calibration
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> Control Systems
                            </li>
                            <li className="service-list-item">
                                <span className="service-list-icon">✓</span> SCADA Integration
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    </section>

    {/*  Footer Placeholder  */}
    

    

      <Footer />
    </>
  );
}
