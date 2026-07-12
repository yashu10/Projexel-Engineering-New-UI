'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' }
  ];

  return (
    <header className="main-header">
        <div className="header-branding">
            <div className="branding-container">
                <Link href="/" className="logo-link" onClick={closeMenu}>
                    <img src="/assets/images/logo.png" alt="Projexel Engineering Logo" className="header-logo" />
                </Link>
                <p className="company-tagline">Where Engineering Meets Execution, with Precision</p>
            </div>
        </div>
        <nav className="navbar" id="navbar">
            <div className="nav-container">
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
                    {navLinks.map((link) => {
                      // Handle exact path match
                      const isActive = pathname === link.href;
                      return (
                        <Link 
                          key={link.href}
                          href={link.href} 
                          className={isActive ? 'active' : ''}
                          onClick={closeMenu}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                </div>
                <button 
                  className="mobile-menu-btn" 
                  id="mobile-menu-btn" 
                  aria-label="Toggle menu"
                  onClick={toggleMenu}
                >
                    <span className="bar" style={{
                      transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                    }}></span>
                    <span className="bar" style={{
                      opacity: isMenuOpen ? '0' : '1'
                    }}></span>
                    <span className="bar" style={{
                      transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
                    }}></span>
                </button>
            </div>
        </nav>
    </header>
  );
}

