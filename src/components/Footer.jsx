import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer">
          <div className="container footer-grid">
              <div className="footer-brand">
                  <Link href="/" className="logo-link">
                      <img src="/assets/images/logo.png" alt="Projexel Engineering" className="logo-img" />
                  </Link>
                  <p className="footer-desc">Setting the global benchmark in EPC, E&I, and Industrial Engineering services through an unwavering commitment to quality and execution excellence.</p>
              </div>
              <div className="footer-links">
                  <h4>Quick Links</h4>
                  <Link href="/about">About Us</Link>
                  <Link href="/services">Our Services</Link>
                  <Link href="/projects">Portfolio</Link>
                  <Link href="/contact">Contact Us</Link>
                  <a href="/assets/images/company-profile.pdf" target="_blank" style={{display: 'inline-flex', alignItems: 'center', gap: '0.35rem'}}><i className="ri-file-pdf-line" style={{color: '#ef4444'}}></i> Brochure</a>
              </div>
              <div className="footer-contact">
                  <h4>Contact Us</h4>
                  <div className="footer-contact-item">
                      <i className="ri-map-pin-2-line"></i>
                      <p>1004, Sudarshan Saket, Behind Godrej Garden City,<br/>Chainpur Road, Jagatpur, Ahmedabad – 382470</p>
                  </div>
                  <div className="footer-contact-item">
                      <i className="ri-mail-line"></i>
                      <p><a href="mailto:projexel.engr@gmail.com">projexel.engr@gmail.com</a></p>
                  </div>
                  <div className="footer-contact-item">
                      <i className="ri-phone-line"></i>
                      <p><a href="tel:+918000369880">+91 80003 69880</a></p>
                  </div>
              </div>
          </div>
          <div className="footer-bottom container">
              <p>&copy; <span id="year">2026</span> Projexel Engineering. All rights reserved.</p>
              <div className="social-links">
                  <a href="#" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
                  <a href="#" aria-label="Twitter"><i className="ri-twitter-x-fill"></i></a>
              </div>
          </div>
      </footer>
      <a href="https://wa.me/918000369880" className="whatsapp-sticky" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <i className="ri-whatsapp-line"></i>
      </a>
    </>
  );
}
