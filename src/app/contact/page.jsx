import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: "Contact Us | Projexel Engineering - Get a Quote in Ahmedabad",
  description: "Contact Projexel Engineering today for expert EPC, mechanical fabrication, and E&I solutions. Get in touch with our team in Ahmedabad, Gujarat.",
  keywords: "contact Projexel Engineering, EPC contractor contact, request quote EPC, engineering firm Ahmedabad, contact details Projexel",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      
    {/*  Navbar Placeholder  */}
    

    {/*  Page Header  */}
    <header className="page-header pattern-bg">
        <div className="container">
            <h1 className="page-title fade-in-up">CONTACT <span className="text-gradient">US</span></h1>
            <p className="page-subtitle fade-in-up delay-1">Let's discuss how we can bring your next industrial project to life.</p>
        </div>
    </header>

    <section className="contact-section" style={{"padding":"100px 0","backgroundColor":"var(--clr-surface-light)"}}>
        <div className="container">
            <div className="contact-wrapper">
                {/*  Contact Info  */}
                <div className="contact-info slide-in-left">
                    <div className="glass-panel contact-info-card">
                        <span className="section-tag">Get in Touch</span>
                        <h2 className="section-title" style={{"fontSize":"2rem","marginBottom":"2rem"}}>Contact Information</h2>
                        
                            <div className="info-item">
                                <div className="info-icon">📍</div>
                                <div className="info-content">
                                    <h4>Our Office</h4>
                                    <p>1004, Sudarshan Saket, Behind Godrej Garden City,<br />Chainpur Road, Jagatpur, Ahmedabad – 382470</p>
                                    <div style={{"marginTop":"1.5rem"}}>
                                        <a href="https://www.google.com/maps/dir//1004,+Sudarshan+Saket,+Behind+Godrej+Garden+City,+Chainpur+Road,+Jagatpur,+Ahmedabad+-+382470" target="_blank" className="btn btn-primary" style={{"fontSize":"0.9rem","padding":"0.6rem 1.2rem"}}>Get Directions &rarr;</a>
                                    </div>
                                </div>
                            </div>

                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div className="info-content">
                                <h4>Call Us</h4>
                                <p><a href="tel:+918000369880">+91 80003 69880</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">✉️</div>
                            <div className="info-content">
                                <h4>Email Us</h4>
                                <p><a href="mailto:projexel.engr@gmail.com">projexel.engr@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🕒</div>
                            <div className="info-content">
                                <h4>Business Hours</h4>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 2:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Contact Form  */}
                <div className="contact-form slide-in-right">
                    <ContactForm />
                </div>

            </div>
        </div>
    </section>

    {/*  Map Section  */}
    <section className="map-section" style={{"padding":"0 0 80px 0","backgroundColor":"var(--clr-surface-light)"}}>
        <div className="container">
            <div style={{"marginBottom":"2rem","textAlign":"center"}}>
                <h3 style={{"fontSize":"1.8rem"}}>Find Us on Map</h3>
                <p style={{"color":"var(--clr-text-muted)"}}>Visit our office for project discussions and consultations.</p>
            </div>
            <div style={{"height":"500px","borderRadius":"16px","overflow":"hidden","border":"1px solid rgba(0,0,0,0.1)","boxShadow":"0 10px 30px rgba(0,0,0,0.05)"}}>
                <iframe 
                    src="https://maps.google.com/maps?q=1004,+Sudarshan+Saket,+Behind+Godrej+Garden+City,+Chainpur+Road,+Jagatpur,+Ahmedabad+-+382470&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{"border":"0"}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </section>

    {/*  Footer Placeholder  */}
    

    

      <Footer />
    </>
  );
}
