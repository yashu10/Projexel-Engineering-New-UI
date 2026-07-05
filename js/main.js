document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize UI scripts now that header/footer are synchronously injected
    initNavbar();
    initFooter();
    initPortfolioFilters();
    initIntersectionObservers();

    function initFooter() {
        // Set current year in footer
        const yearSpan = document.getElementById('year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    function initNavbar() {
        // Set active link based on current URL
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(link => {
            link.classList.remove('active');
            let linkHref = link.getAttribute('href');
            // Check if currentpath matches linkHref or if it's index.html matching root
            if (linkHref === currentPath || (linkHref.includes('#') && currentPath === 'index.html' && linkHref.startsWith('index.html'))) {
                // Ignore hash links for active state unless it's exactly matching
                if (!linkHref.includes('#') || linkHref === currentPath) {
                    link.classList.add('active');
                }
            } else if (currentPath === '' && linkHref === 'index.html') {
                link.classList.add('active');
            }
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }

        // Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('nav-links');
        
        if (mobileBtn && navLinks) {
            mobileBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                
                // Hamburger animation
                const spans = mobileBtn.querySelectorAll('span');
                if(navLinks.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
            
            // Close menu when clicking a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if(window.innerWidth <= 768) {
                        navLinks.classList.remove('active');
                        const spans = mobileBtn.querySelectorAll('span');
                        spans[0].style.transform = 'none';
                        spans[1].style.opacity = '1';
                        spans[2].style.transform = 'none';
                    }
                });
            });
        }
    }

    function initIntersectionObservers() {
        // Scroll Animation (Intersection Observer)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    // Initialize counters if it's a stats card
                    if (entry.target.classList.contains('stat-card')) {
                        const counter = entry.target.querySelector('.stat-num');
                        if (counter && !counter.classList.contains('counted')) {
                            animateCounter(counter);
                            counter.classList.add('counted');
                        }
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements
        const elementsToObserve = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .stat-card');
        elementsToObserve.forEach(el => observer.observe(el));
    }

    // Number Counter Animation
    function animateCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 2000; // 2 seconds
        const stepTime = Math.abs(Math.floor(duration / target));
        let current = 0;
        
        const timer = setInterval(() => {
            current += 1;
            counter.textContent = current + suffix;
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Project Modal Logic
    const projectDetails = {
        "RO, ETP & ZLD Plant": {
            images: ["assets/images/proj_water.png", "assets/images/service_industrial.png", "assets/images/service_turnkey.png"],
            specs: { "Capacity": "500 m3/day", "Materials": "SS316, HDPE", "Standards": "ASME BPVC", "Timeline": "8 Months" },
            scope: ["Precision Equipment Erection", "High-pressure Piping Systems", "DCS/PLC Control Logic Integration", "ZLD System Optimization"]
        },
        "250 KL Soft Water Tank": {
            images: ["assets/images/service_turnkey.png", "assets/images/service_mechanical.png", "assets/images/service_industrial.png"],
            specs: { "Volume": "250 Kilolitres", "Process": "ARC Welding", "Finish": "Epoxy Interior Lining", "Testing": "Hydro-testing @ 1.5x" },
            scope: ["Shop Fabrication of MS Shells", "On-site Segmental Assembly", "Sandblasting & Multi-layer Coating", "In-situ Foundation Anchoring"]
        },
        "Clarifier & Tertiary System": {
            images: ["assets/images/service_industrial.png", "assets/images/service_mep.png", "assets/images/proj_water.png"],
            specs: { "Type": "High-rate Clarifier", "Flow": "200 m3/hr", "Automation": "Fully Automated Sludge Scraper", "Power": "15 HP Aggregator" },
            scope: ["Dismantling of Legacy Infrastructure", "Structural Steel Framework Construction", "Precision Gearbox & Scraper Erection", "Instrumentation & Level Control Setup"]
        },
        "ETP / ZLD Plant E&I": {
            images: ["assets/images/service_ei.png", "assets/images/service_oilgas.png", "assets/images/service_electrical.png"],
            specs: { "Voltage": "415V / 230V", "Cable Type": "Armoured FRLS", "Control": "Siemens S7-1200 PLC", "Instruments": "Yokogawa / Endress+Hauser" },
            scope: ["Main LT Panel Installation", "Field Instrumentation Mounting", "Cable Tray & Loop Testing", "SCADA Screen Development"]
        },
        "RO / DM Plant E&I": {
            images: ["assets/images/service_ei.png", "assets/images/service_industrial.png", "assets/images/service_mep.png"],
            specs: { "Analyzers": "pH, ORP, Conductivity", "Panels": "IP65 Stainless Steel", "Drives": "VFD Control for Pumps", "Protocols": "Profibus / Modbus" },
            scope: ["MCC & VFD Panel Commissioning", "Instrument Calibration & Loop Checks", "Earthing & Lightning Protection", "Plant Earthing Layout Optimization"]
        },
        "Agitated Thin Film Dryer (ATFD)": {
            images: ["assets/images/service_mechanical.png", "assets/images/service_industrial.png", "assets/images/service_turnkey.png"],
            specs: { "Heat Area": "12 m2", "Material": "SS316L (Internal)", "Sealing": "Mechanical Double Seal", "Drive": "Top-entry Vertical" },
            scope: ["Complex Structure Fabrication", "High-alignment Top Drive Erection", "Jacketed Piping for Steam", "Thermal Insulation & Cladding"]
        },
        "Product ETP Plant": {
            images: ["assets/images/service_turnkey.png", "assets/images/proj_water.png", "assets/images/service_mep.png"],
            specs: { "Sector": "F&B (Beverage)", "Standard": "TPM / HACCP Compatible", "Pumps": "Centrifugal / Progressive Cavity", "Controls": "Allen Bradley PLC" },
            scope: ["Piping Layout for Food Grade Standards", "Instrument Cabling & Termination", "Testing of Auto-dosage Systems", "Commissioning with Product Simulation"]
        },
        "Wilmar ETP Plant Phase II": {
            images: ["assets/images/service_industrial.png", "assets/images/service_mechanical.png", "assets/images/service_oilgas.png"],
            specs: { "Phase": "Expansion (Brownfield)", "Piping": "MS/SS Network", "Support": "Heavy Duty Racks", "Standards": "OISD / Petroleum Safety" },
            scope: ["Mechanical Equipment Tie-ins", "Live Plant Piping Extension", "Fabrication of Specialized Skids", "Final Handover & Operator Training"]
        },
        "Integrated RO / ZLD Framework": {
            images: ["assets/images/proj_water.png", "assets/images/service_turnkey.png", "assets/images/service_industrial.png"],
            specs: { "Turnkey": "Complete EPC", "System": "High Recovery RO", "Reject": "Thermal Evaporation", "Quality": "Zero Surface Discharge" },
            scope: ["Civil Foundation Coordination", "Skid-mounted RO Erection", "Crystallizer & MEE Installation", "End-to-end Process Commissioning"]
        },
        "Suzuki Plant Power Dist.": {
            images: ["assets/images/service_ei.png", "assets/images/service_oilgas.png", "assets/images/hero_bg.png"],
            specs: { "Sector": "Automotive", "Transformers": "2 MVA Dry Type", "Switchgear": "Gas Insulated (GIS)", "Relays": "Numerical Protection" },
            scope: ["High Tension (HT) Cable Laying", "Substation Component Mounting", "Logic Testing for Bus-couplers", "Safety Audit & Energization"]
        },
        "Heavy PEB Structure Construction": {
            images: ["assets/images/service_industrial.png", "assets/images/service_mechanical.png", "assets/images/service_turnkey.png"],
            specs: { "Span": "24 Meters Clear", "Tonnage": "120 Metric Tons", "Cladding": "Galvalume Profile", "Coating": "PU Paint Process" },
            scope: ["PEB Component Supply Management", "Precision Column Bolting", "Roof & Wall Sheeting Installation", "Safety Netting & Erection Compliance"]
        },
        "Mechanical & Fabrication ARC": {
            images: ["assets/images/service_mechanical.png", "assets/images/service_industrial.png", "assets/images/service_turnkey.png"],
            specs: { "Mode": "Annual Rate Contract", "Response": "24/7 Priority", "Workforce": "Skilled Fitters & Welders", "Equip": "Mobile Heavy Crane Support" },
            scope: ["On-call Structural Reinforcements", "Emergency Pipe Leak Repairs", "New Equipment Base Foundations", "Routine Maintenance Shutdowns"]
        },
        "E&I Annual Rate Contract": {
            images: ["assets/images/service_ei.png", "assets/images/service_oilgas.png", "assets/images/service_industrial.png"],
            specs: { "Support": "Continuous Upkeep", "Audits": "Thermal Imaging / Earthing", "Inventory": "Critical Spares Management", "Upgrades": "Control Logic Optimization" },
            scope: ["Switchyard Periodic Maintenance", "Instrument Recalibration Cycles", "Power Quality Analysis", "Minor Expansion Projects Execution"]
        },
        "Core E&I Upgrades": {
            images: ["assets/images/service_ei.png", "assets/images/service_oilgas.png", "assets/images/service_mep.png"],
            specs: { "Sector": "Chemical / Fertilizer", "Hazards": "Corrosive Environment", "Protection": "Ex-proof (Flameproof)", "Control": "Remote I/O Stations" },
            scope: ["Old Control Cable Replacement", "Smart Positioner Integration", "Hazardous Area Glanding", "DCS Logic Hot-cutover Management"]
        }
    };

    let carouselInterval;

    function initProjectModals() {
        // Inject Modal Structure if not present
        if (!document.getElementById('projectModal')) {
            const modalHTML = `
                <div id="projectModal" class="modal-overlay">
                    <div class="modal-container">
                        <button class="modal-close" aria-label="Close modal">&times;</button>
                        <div class="modal-content">
                            <div class="modal-carousel-container" id="modalCarousel">
                                <!-- Slides injected here -->
                                <div class="carousel-nav" id="carouselNav"></div>
                            </div>
                            <div class="modal-body">
                                <span id="modalClient" class="modal-client"></span>
                                <h3 id="modalTitle" class="modal-title"></h3>
                                
                                <div class="modal-specs-grid" id="modalSpecs">
                                    <!-- Specs injected here -->
                                </div>
                                
                                <div class="modal-detailed-scope">
                                    <h4>Technical Scope of Work</h4>
                                    <ul id="modalScope">
                                        <!-- Scope items injected here -->
                                    </ul>
                                </div>
                                
                                <div style="margin-top: 3rem;">
                                    <a href="contact.html" class="btn btn-primary">Request Similar Solution</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        const modal = document.getElementById('projectModal');
        const closeBtn = modal.querySelector('.modal-close');
        
        // Open Modal Event
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-details-btn')) {
                const card = e.target.closest('.portfolio-card');
                if (!card) return;

                const title = card.querySelector('.portfolio-title').textContent.trim();
                const client = card.querySelector('.client-name') ? card.querySelector('.client-name').textContent : 
                             (card.querySelector('.portfolio-meta') ? card.querySelector('.portfolio-meta span:last-child').textContent : "Projexel Client");
                
                populateModal(title, client);
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });

        // Close Modal Events
        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            if (carouselInterval) clearInterval(carouselInterval);
        };

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
        });
    }

    function populateModal(title, client) {
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalClient').textContent = client;

        const carouselContainer = document.getElementById('modalCarousel');
        const navContainer = document.getElementById('carouselNav');
        const specsContainer = document.getElementById('modalSpecs');
        const scopeContainer = document.getElementById('modalScope');
        
        // Clear previous content
        const oldSlides = carouselContainer.querySelectorAll('.modal-carousel-slide');
        oldSlides.forEach(s => s.remove());
        navContainer.innerHTML = '';
        specsContainer.innerHTML = '';
        scopeContainer.innerHTML = '';

        const data = projectDetails[title];
        
        if (data) {
            // Setup Carousel
            const images = data.images || ["assets/images/service_turnkey.png"];
            images.forEach((img, index) => {
                const slide = document.createElement('div');
                slide.className = `modal-carousel-slide \${index === 0 ? 'active' : ''}`;
                slide.style.backgroundImage = `url('\${img}')`;
                carouselContainer.insertBefore(slide, navContainer);

                const dot = document.createElement('div');
                dot.className = `carousel-dot \${index === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => goToSlide(index));
                navContainer.appendChild(dot);
            });

            startAutoPlay(images.length);

            // Fill Specs
            for (const [key, value] of Object.entries(data.specs)) {
                specsContainer.innerHTML += `
                    <div class="modal-spec-item">
                        <h5>\${key}</h5>
                        <p>\${value}</p>
                    </div>
                `;
            }
            // Fill Scope
            data.scope.forEach(item => {
                scopeContainer.innerHTML += `<li>\${item}</li>`;
            });
        } else {
            // Fallback
            const slide = document.createElement('div');
            slide.className = 'modal-carousel-slide active';
            slide.style.backgroundImage = "url('assets/images/service_turnkey.png')";
            carouselContainer.insertBefore(slide, navContainer);
            
            specsContainer.innerHTML = '<p style="grid-column: span 2; color: var(--clr-text-muted);">Detailed technical specifications available upon request.</p>';
            scopeContainer.innerHTML = '<li>Comprehensive Engineering & Execution</li><li>Quality Control & Safety Compliance</li>';
        }
    }

    function initPortfolioFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projects = document.querySelectorAll('.portfolio-card');

        if (filterBtns.length === 0 || projects.length === 0) return;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projects.forEach(project => {
                    const category = project.getAttribute('data-category');
                    
                    if (filterValue === 'all' || filterValue === category) {
                        project.classList.remove('hide');
                        // Trigger a small animation
                        project.style.opacity = '0';
                        setTimeout(() => {
                            project.style.opacity = '1';
                        }, 50);
                    } else {
                        project.classList.add('hide');
                    }
                });
            });
        });
    }

    function goToSlide(index) {
        const slides = document.querySelectorAll('.modal-carousel-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        if (slides[index]) slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
    }

    function startAutoPlay(count) {
        if (carouselInterval) clearInterval(carouselInterval);
        if (count <= 1) return;

        let current = 0;
        carouselInterval = setInterval(() => {
            current = (current + 1) % count;
            goToSlide(current);
        }, 3000);
    }

    initProjectModals();
});
