/* =============================================
   Cosecant Technologies — SPA Router & Interactivity
   ============================================= */

(function () {
  'use strict';

  /* ---------- SVG Icon Library ---------- */
  const icons = {
    coding: `<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    billing: `<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    transcription: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    rcm: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    arCalling: `<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    credentialing: `<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`,
    shield: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    award: `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    clock: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    dollarSign: `<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    zap: `<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    flag: `<svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
    check: `<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    arrowUp: `<svg viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,
    mapPin: `<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    phone: `<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    users: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    target: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    eye: `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    heart: `<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    trendingUp: `<svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    barChart: `<svg viewBox="0 0 24 24"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
    clipboard: `<svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
    activity: `<svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    layers: `<svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    checkCircle: `<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    globe: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    database: `<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    search: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    fileText: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    headphones: `<svg viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  };

  /* ---------- Page Templates ---------- */
  function homePage() {
    return `
    <!-- Hero -->
    <section class="hero" id="hero">
      <div class="hero-shapes">
        <div class="hero-shape"></div>
        <div class="hero-shape"></div>
        <div class="hero-shape"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge reveal"><span class="hero-badge-dot"></span> Trusted Healthcare Partner Since 2009</div>
          <h1 class="reveal reveal-delay-1">Empowering <span class="highlight">Healthcare Providers</span> Across the USA</h1>
          <p class="hero-subtitle reveal reveal-delay-2">End-to-end Revenue Cycle Management solutions that maximize reimbursements, reduce denials, and let you focus on what matters most — patient care.</p>
          <div class="hero-buttons reveal reveal-delay-3">
            <a href="#services" class="btn btn-primary" data-nav>Our Services</a>
            <a href="#contact" class="btn btn-outline" data-nav>Contact Us</a>
          </div>
          <div class="hero-stats reveal reveal-delay-4">
            <div class="hero-stat">
              <span class="stat-number" data-count="500">0</span>
              <span class="stat-label">Clients</span>
            </div>
            <div class="hero-stat">
              <span class="stat-number" data-count="98" data-suffix="%">0</span>
              <span class="stat-label">Accuracy</span>
            </div>
            <div class="hero-stat">
              <span class="stat-number" data-count="15" data-suffix="+">0</span>
              <span class="stat-label">Years Exp.</span>
            </div>
            <div class="hero-stat">
              <span class="stat-number" data-count="24" data-suffix="/7">0</span>
              <span class="stat-label">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section section-beige" id="services-overview">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">What We Offer</div>
          <h2>Comprehensive Healthcare Solutions</h2>
          <p>From coding to collections, we handle every step of your revenue cycle with precision and expertise.</p>
        </div>
        <div class="services-grid">
          ${serviceCards().map((s, i) => `
          <div class="service-card reveal reveal-delay-${(i % 3) + 1}" onclick="navigateTo('services')">
            <div class="service-card-icon">${s.icon}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <span class="card-link">Learn More ${icons.arrowRight}</span>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section" id="why-choose">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Why Choose Us</div>
          <h2>The Cosecant Advantage</h2>
          <p>We combine industry expertise with cutting-edge technology to deliver unmatched results.</p>
        </div>
        <div class="features-grid">
          ${featureCards().map((f, i) => `
          <div class="feature-card reveal reveal-delay-${(i % 3) + 1}">
            <div class="feature-icon">${f.icon}</div>
            <h4>${f.title}</h4>
            <p>${f.desc}</p>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section testimonials-section" id="testimonials">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Client Testimonials</div>
          <h2>What Our Clients Say</h2>
          <p>Healthcare providers across the nation trust Cosecant Technologies for their revenue cycle needs.</p>
        </div>
        <div class="testimonial-carousel reveal">
          <div class="testimonial-track" id="testimonialTrack">
            ${testimonials().map(t => `
            <div class="testimonial-slide">
              <div class="testimonial-card">
                <div class="testimonial-quote">&ldquo;</div>
                <p class="testimonial-text">${t.text}</p>
                <p class="testimonial-author">${t.author}</p>
                <p class="testimonial-role">${t.role}</p>
              </div>
            </div>`).join('')}
          </div>
          <div class="testimonial-dots" id="testimonialDots">
            ${testimonials().map((_, i) => `<button class="testimonial-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Testimonial ${i + 1}"></button>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-banner">
      <div class="container reveal">
        <h2>Ready to Optimize Your Revenue Cycle?</h2>
        <p>Partner with Cosecant Technologies and experience the difference that expertise, accuracy, and dedication can make.</p>
        <a href="#contact" class="btn btn-white" data-nav>Get a Free Consultation</a>
      </div>
    </section>`;
  }

  function aboutPage() {
    return `
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb"><a href="#home" data-nav>Home</a> <span>/</span> <span>About Us</span></div>
        <h1>About Cosecant Technologies</h1>
        <p>Your trusted partner in healthcare revenue cycle management since 2009.</p>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="section">
      <div class="container">
        <div class="about-intro">
          <div class="about-intro-content reveal">
            <div class="section-label">Who We Are</div>
            <h2>Dedicated to Healthcare Excellence</h2>
            <p>Cosecant Technologies is a US-based healthcare outsourcing company that partners with healthcare providers, hospitals, clinics, and medical groups to streamline their revenue cycle operations. Founded in 2009, we have grown into a trusted partner for over 500 healthcare organizations across all 50 states.</p>
            <p>Our team of AAPC-certified coders, experienced billing specialists, and RCM experts work tirelessly to ensure maximum reimbursements, minimal denials, and complete compliance with healthcare regulations including HIPAA, HITECH, and CMS guidelines.</p>
            <p>We understand the challenges that healthcare providers face in today's complex billing landscape. That's why we offer customized, end-to-end solutions that adapt to your specialty, your payer mix, and your unique workflow requirements.</p>
          </div>
          <div class="about-intro-image reveal reveal-delay-2">
            <div class="about-image-placeholder">
              <div class="about-image-inner">
                ${icons.activity}
                <p>Excellence in Healthcare Solutions</p>
              </div>
            </div>
            <div class="about-float-card">
              <span class="float-number">15+</span>
              <span class="float-text">Years of<br>Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section section-beige">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Our Journey</div>
          <h2>Our Story</h2>
          <p>From a small team of passionate professionals to a national healthcare solutions leader.</p>
        </div>
        <div style="max-width:800px;margin:0 auto" class="reveal">
          <p>Cosecant Technologies was founded with a simple yet powerful vision: to empower healthcare providers by eliminating the administrative burden of revenue cycle management. What started as a small team of medical coders and billing specialists in 2009 has grown into a full-service healthcare outsourcing company serving over 500 clients nationwide.</p>
          <p>Over the years, we've invested heavily in technology, training, and process optimization. We've adopted AI-assisted coding tools, automated claims scrubbing systems, and real-time analytics dashboards — all while maintaining the personal, hands-on approach that our clients value most.</p>
          <p>Today, Cosecant Technologies is recognized as a leader in healthcare revenue cycle management, known for our exceptional accuracy rates, rapid turnaround times, and unwavering commitment to compliance and data security.</p>
        </div>
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Our Foundation</div>
          <h2>Mission, Vision &amp; Values</h2>
        </div>
        <div class="mvv-grid">
          <div class="mvv-card reveal reveal-delay-1">
            <div class="mvv-icon">${icons.target}</div>
            <h3>Our Mission</h3>
            <p>To empower healthcare providers with accurate, efficient, and compliant revenue cycle management solutions that maximize financial outcomes and allow them to focus on delivering exceptional patient care.</p>
          </div>
          <div class="mvv-card reveal reveal-delay-2">
            <div class="mvv-icon">${icons.eye}</div>
            <h3>Our Vision</h3>
            <p>To be the most trusted healthcare outsourcing partner in the United States, recognized for innovation, integrity, and measurable impact on our clients' financial health and operational efficiency.</p>
          </div>
          <div class="mvv-card reveal reveal-delay-3">
            <div class="mvv-icon">${icons.heart}</div>
            <h3>Our Values</h3>
            <p>Integrity in every interaction. Excellence in every process. Compliance as a cornerstone. Innovation as a driver. Partnership as our philosophy. These values guide every decision we make.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Expertise -->
    <section class="section section-beige">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Our Team</div>
          <h2>Areas of Expertise</h2>
          <p>Our multidisciplinary team brings deep expertise across all healthcare revenue cycle domains.</p>
        </div>
        <div class="expertise-grid">
          ${expertiseCards().map((e, i) => `
          <div class="expertise-card reveal reveal-delay-${(i % 4) + 1}">
            ${e.icon}
            <h4>${e.title}</h4>
            <p>${e.desc}</p>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="section trust-section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Results That Speak</div>
          <h2>Why Healthcare Providers Trust Us</h2>
          <p>Our numbers reflect our commitment to excellence and our clients' success.</p>
        </div>
        <div class="trust-stats">
          <div class="trust-stat reveal reveal-delay-1">
            <span class="stat-number" data-count="500" data-suffix="+">0</span>
            <span class="stat-label">Healthcare Clients Served</span>
          </div>
          <div class="trust-stat reveal reveal-delay-2">
            <span class="stat-number" data-count="98" data-suffix="%">0</span>
            <span class="stat-label">Clean Claim Rate</span>
          </div>
          <div class="trust-stat reveal reveal-delay-3">
            <span class="stat-number" data-count="30" data-suffix="%">0</span>
            <span class="stat-label">Revenue Increase (Avg.)</span>
          </div>
          <div class="trust-stat reveal reveal-delay-4">
            <span class="stat-number" data-count="48" data-suffix="hr">0</span>
            <span class="stat-label">Average Turnaround</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-banner">
      <div class="container reveal">
        <h2>Let's Build Your Revenue Success Story</h2>
        <p>Join 500+ healthcare providers who trust Cosecant Technologies to manage their revenue cycle.</p>
        <a href="#contact" class="btn btn-white" data-nav>Get Started Today</a>
      </div>
    </section>`;
  }

  function servicesPage() {
    return `
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb"><a href="#home" data-nav>Home</a> <span>/</span> <span>Services</span></div>
        <h1>Our Services</h1>
        <p>Comprehensive healthcare revenue cycle solutions tailored to your practice's unique needs.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${serviceDetails().map((s, i) => `
        <div class="service-detail reveal">
          <div class="service-detail-content">
            <div class="section-label">${s.label}</div>
            <h2>${s.title}</h2>
            <p>${s.desc}</p>
            <ul class="service-detail-list">
              ${s.items.map(item => `<li>${icons.check} ${item}</li>`).join('')}
            </ul>
          </div>
          <div class="service-detail-visual">
            <div class="service-visual-card">
              <div class="service-visual-inner">
                ${s.icon}
                <p>${s.title}</p>
              </div>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </section>

    <section class="cta-banner">
      <div class="container reveal">
        <h2>Need a Customized Solution?</h2>
        <p>Every practice is different. Let us create a tailored solution that fits your specific needs and budget.</p>
        <a href="#contact" class="btn btn-white" data-nav>Request a Free Assessment</a>
      </div>
    </section>`;
  }

  function contactPage() {
    return `
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb"><a href="#home" data-nav>Home</a> <span>/</span> <span>Contact Us</span></div>
        <h1>Contact Us</h1>
        <p>Get in touch with our team to discuss how we can help optimize your revenue cycle.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-wrapper">
          <div class="contact-form reveal">
            <h3>Send Us a Message</h3>
            <p>Fill out the form below and one of our specialists will get back to you within 24 hours.</p>
            <form id="contactForm" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label>Full Name <span class="required">*</span></label>
                  <input type="text" id="formName" placeholder="John Doe" required>
                  <div class="error-message" id="nameError">Please enter your full name.</div>
                </div>
                <div class="form-group">
                  <label>Email Address <span class="required">*</span></label>
                  <input type="email" id="formEmail" placeholder="john@example.com" required>
                  <div class="error-message" id="emailError">Please enter a valid email address.</div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Phone Number</label>
                  <input type="tel" id="formPhone" placeholder="(555) 123-4567">
                </div>
                <div class="form-group">
                  <label>Company / Practice Name</label>
                  <input type="text" id="formCompany" placeholder="Your Practice Name">
                </div>
              </div>
              <div class="form-group">
                <label>Service Interested In <span class="required">*</span></label>
                <select id="formService" required>
                  <option value="">Select a service...</option>
                  <option value="medical-coding">Medical Coding</option>
                  <option value="medical-billing">Medical Billing</option>
                  <option value="medical-transcription">Medical Transcription</option>
                  <option value="rcm">Revenue Cycle Management</option>
                  <option value="ar-calling">AR Calling & Follow-up</option>
                  <option value="credentialing">Credentialing Services</option>
                  <option value="multiple">Multiple Services</option>
                  <option value="other">Other</option>
                </select>
                <div class="error-message" id="serviceError">Please select a service.</div>
              </div>
              <div class="form-group">
                <label>Message <span class="required">*</span></label>
                <textarea id="formMessage" placeholder="Tell us about your needs..." required></textarea>
                <div class="error-message" id="messageError">Please enter a message.</div>
              </div>
              <button type="submit" class="form-submit">Send Message ${icons.arrowRight}</button>
            </form>
            <div class="form-success" id="formSuccess">
              ${icons.checkCircle}
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. Our team will get back to you within 24 business hours.</p>
            </div>
          </div>
          <div class="contact-info-cards reveal reveal-delay-2">
            <div class="contact-info-card">
              <div class="contact-info-icon">${icons.mapPin}</div>
              <div>
                <h4>Office Address</h4>
                <p>123 Healthcare Blvd, Suite 400<br>Dallas, TX 75201, USA</p>
              </div>
            </div>
            <div class="contact-info-card">
              <div class="contact-info-icon">${icons.phone}</div>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 234-5678<br>+1 (555) 234-5679</p>
              </div>
            </div>
            <div class="contact-info-card">
              <div class="contact-info-icon">${icons.mail}</div>
              <div>
                <h4>Email</h4>
                <p>info@cosecanttech.com<br>support@cosecanttech.com</p>
              </div>
            </div>
            <div class="contact-info-card">
              <div class="contact-info-icon">${icons.clock}</div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday – Friday: 8:00 AM – 6:00 PM CST<br>Saturday: 9:00 AM – 1:00 PM CST</p>
              </div>
            </div>
            <div class="map-placeholder">
              <div class="map-inner">
                ${icons.mapPin}
                <p>Dallas, TX — Interactive Map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }

  function privacyPage() {
    return `
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb"><a href="#home" data-nav>Home</a> <span>/</span> <span>Privacy Policy</span></div>
        <h1>Privacy Policy</h1>
        <p>Your privacy is of utmost importance to Cosecant Technologies.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="privacy-content reveal">
          <p class="last-updated">Last Updated: January 15, 2026</p>

          <div class="privacy-section">
            <h2>1. Introduction</h2>
            <p>Cosecant Technologies ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.</p>
            <p>By accessing our website or using our services, you consent to the data practices described in this policy. We encourage you to read this policy carefully and contact us if you have any questions.</p>
          </div>

          <div class="privacy-section">
            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>Name, email address, phone number, and mailing address</li>
              <li>Company or practice name and title</li>
              <li>National Provider Identifier (NPI) and Tax ID numbers</li>
              <li>Billing and payment information</li>
              <li>Any information you voluntarily submit through our contact forms or communications</li>
            </ul>
            <h3>Protected Health Information (PHI)</h3>
            <p>In the course of providing our services, we may have access to Protected Health Information as defined by HIPAA. All PHI is handled in strict accordance with HIPAA regulations and our Business Associate Agreements (BAAs) with our clients.</p>
            <h3>Automatically Collected Information</h3>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div class="privacy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To provide, maintain, and improve our healthcare revenue cycle services</li>
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>To send administrative communications about our services</li>
              <li>To comply with legal obligations and regulatory requirements</li>
              <li>To detect, prevent, and address technical issues or security threats</li>
              <li>To analyze usage patterns and improve our website experience</li>
            </ul>
          </div>

          <div class="privacy-section">
            <h2>4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information, including:</p>
            <ul>
              <li>256-bit SSL/TLS encryption for all data transmissions</li>
              <li>SOC 2 Type II certified data centers</li>
              <li>Multi-factor authentication for system access</li>
              <li>Regular security audits and penetration testing</li>
              <li>Employee background checks and security training</li>
              <li>Role-based access controls and audit logging</li>
            </ul>
            <p>While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>
          </div>

          <div class="privacy-section">
            <h2>5. HIPAA Compliance</h2>
            <p>As a healthcare services provider, we are fully committed to compliance with the Health Insurance Portability and Accountability Act (HIPAA). Our practices include:</p>
            <ul>
              <li>Execution of Business Associate Agreements (BAAs) with all clients</li>
              <li>Annual HIPAA compliance training for all employees</li>
              <li>Designated HIPAA Privacy and Security Officers</li>
              <li>Documented policies and procedures for PHI handling</li>
              <li>Regular risk assessments and compliance audits</li>
              <li>Incident response and breach notification procedures</li>
            </ul>
          </div>

          <div class="privacy-section">
            <h2>6. Third-Party Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li>Service providers who assist in our operations (under strict confidentiality agreements)</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Business partners with your explicit consent</li>
              <li>Insurance companies and clearinghouses as necessary for claims processing</li>
            </ul>
          </div>

          <div class="privacy-section">
            <h2>7. Cookie Policy</h2>
            <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience. Types of cookies we use include:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p>You can control cookie settings through your browser preferences. Disabling certain cookies may limit some website functionality.</p>
          </div>

          <div class="privacy-section">
            <h2>8. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul>
              <li>Right to access and receive a copy of your personal data</li>
              <li>Right to correct inaccurate or incomplete information</li>
              <li>Right to request deletion of your personal data</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent at any time</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the information provided below.</p>
          </div>

          <div class="privacy-section">
            <h2>9. Changes to This Policy</h2>
            <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
          </div>

          <div class="privacy-section">
            <h2>10. Contact Information</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <p><strong>Cosecant Technologies</strong><br>
            123 Healthcare Blvd, Suite 400<br>
            Dallas, TX 75201, USA<br>
            Email: privacy@cosecanttech.com<br>
            Phone: +1 (555) 234-5678</p>
          </div>
        </div>
      </div>
    </section>`;
  }

  /* ---------- Data Helpers ---------- */
  function serviceCards() {
    return [
      { icon: icons.coding, title: 'Medical Coding', desc: 'Expert ICD-10, CPT, and HCPCS coding by AAPC-certified professionals, ensuring maximum accuracy and compliance.' },
      { icon: icons.billing, title: 'Medical Billing', desc: 'End-to-end claims management from submission to payment posting, minimizing denials and accelerating cash flow.' },
      { icon: icons.transcription, title: 'Medical Transcription', desc: 'Accurate clinical documentation with fast turnaround — radiology, pathology, and discharge summaries.' },
      { icon: icons.rcm, title: 'Revenue Cycle Management', desc: 'Comprehensive RCM solutions from patient scheduling through final payment, maximizing your revenue potential.' },
      { icon: icons.arCalling, title: 'AR Calling & Follow-up', desc: 'Aggressive yet professional insurance follow-up and denial resolution to recover every dollar you\'re owed.' },
      { icon: icons.credentialing, title: 'Credentialing Services', desc: 'Streamlined provider enrollment, re-credentialing, and payer contract management with major insurers.' },
    ];
  }

  function featureCards() {
    return [
      { icon: icons.shield, title: 'HIPAA Compliant', desc: 'All processes adhere to strict HIPAA and HITECH regulations, ensuring your data is always protected.' },
      { icon: icons.award, title: 'AAPC Certified Coders', desc: 'Our coding team holds CPC, CCS, and specialty certifications with ongoing education requirements.' },
      { icon: icons.clock, title: '24/7 Support', desc: 'Round-the-clock support ensures your queries and issues are addressed promptly, regardless of time zone.' },
      { icon: icons.dollarSign, title: 'Cost Effective', desc: 'Reduce operational costs by up to 40% while improving accuracy and collection rates significantly.' },
      { icon: icons.zap, title: 'Quick Turnaround', desc: '24-48 hour turnaround on coding and billing, ensuring claims are submitted promptly for faster payments.' },
      { icon: icons.flag, title: 'US-Based Management', desc: 'Our management team is 100% US-based, ensuring seamless communication and cultural alignment.' },
    ];
  }

  function testimonials() {
    return [
      { text: 'Since partnering with Cosecant Technologies, our clean claim rate has improved from 85% to 98%. Their attention to detail and proactive denial management has transformed our revenue cycle.', author: 'Dr. Sarah Mitchell', role: 'Medical Director, Houston Family Practice' },
      { text: 'The Cosecant team feels like an extension of our own staff. They understand our specialty, communicate effectively, and consistently deliver results that exceed our expectations.', author: 'James Rodriguez', role: 'Practice Administrator, Cardiology Associates of Texas' },
      { text: 'We switched to Cosecant Technologies two years ago and have seen a 35% increase in net collections. Their AR follow-up team is relentless and highly professional.', author: 'Dr. Emily Chen', role: 'CEO, Pacific Northwest Medical Group' },
      { text: 'What impressed me most was the seamless onboarding process. Within two weeks, Cosecant had integrated with our EHR system and was processing claims with remarkable accuracy.', author: 'Mark Thompson', role: 'CFO, Sunrise Health Systems' },
    ];
  }

  function expertiseCards() {
    return [
      { icon: icons.coding, title: 'Medical Coding', desc: 'ICD-10, CPT, HCPCS expertise across 40+ specialties' },
      { icon: icons.billing, title: 'Claims Management', desc: 'Electronic & paper claims for all major payers' },
      { icon: icons.trendingUp, title: 'Revenue Analytics', desc: 'Data-driven insights for financial optimization' },
      { icon: icons.shield, title: 'Compliance & Audit', desc: 'HIPAA, OIG, and payer-specific compliance' },
      { icon: icons.database, title: 'EHR Integration', desc: 'Epic, Cerner, Athena, and 50+ systems' },
      { icon: icons.arCalling, title: 'AR Management', desc: 'Denial resolution and payment recovery' },
      { icon: icons.credentialing, title: 'Credentialing', desc: 'Provider enrollment with major insurers' },
      { icon: icons.headphones, title: 'Patient Support', desc: 'Patient billing inquiries and payment plans' },
    ];
  }

  function serviceDetails() {
    return [
      {
        label: 'Coding Excellence',
        title: 'Medical Coding',
        desc: 'Our AAPC-certified coders deliver accurate, compliant coding across 40+ medical specialties. We leverage AI-assisted coding technology combined with human expertise to ensure every code is optimized for maximum reimbursement while maintaining full compliance.',
        icon: icons.coding,
        items: ['ICD-10-CM/PCS Diagnosis Coding', 'CPT & HCPCS Procedure Coding', 'Specialty-Specific Coding (Cardiology, Orthopedics, etc.)', 'E/M Level Optimization', 'Coding Audits & Compliance Reviews', 'Modifier Selection & Validation', 'HCC Risk Adjustment Coding', 'Surgical & Anesthesia Coding'],
      },
      {
        label: 'Billing Solutions',
        title: 'Medical Billing',
        desc: 'Our comprehensive billing services cover the entire claims lifecycle — from charge capture through final payment. We work with all major payers and clearinghouses to ensure clean claim submission and rapid reimbursement.',
        icon: icons.billing,
        items: ['Electronic Claims Submission', 'Payment Posting & Reconciliation', 'Denial Management & Appeals', 'Patient Billing & Statements', 'Secondary & Tertiary Billing', 'Era/EOB Processing', 'Fee Schedule Optimization', 'Payer Contract Analysis'],
      },
      {
        label: 'Documentation Services',
        title: 'Medical Transcription',
        desc: 'Accurate and timely clinical documentation is the foundation of proper coding and billing. Our medical transcriptionists are experienced across all document types and specialties, delivering 99.5% accuracy with industry-leading turnaround times.',
        icon: icons.transcription,
        items: ['Clinical Notes & Progress Reports', 'Radiology & Imaging Reports', 'Pathology & Lab Reports', 'Discharge Summaries', 'Operative & Procedure Notes', 'History & Physical Reports', 'Consultation Letters', 'Emergency Room Documentation'],
      },
      {
        label: 'End-to-End Solutions',
        title: 'Revenue Cycle Management',
        desc: 'Our comprehensive RCM solutions encompass every touchpoint of the revenue cycle — from the moment a patient schedules an appointment through final payment collection. We optimize each step to maximize revenue and minimize leakage.',
        icon: icons.rcm,
        items: ['Patient Eligibility Verification', 'Prior Authorization Management', 'Charge Capture & Coding', 'Claims Submission & Tracking', 'Denial Prevention & Management', 'Payment Posting & Reconciliation', 'Financial Reporting & Analytics', 'Revenue Integrity Audits'],
      },
      {
        label: 'Recovery Services',
        title: 'AR Calling & Follow-up',
        desc: 'Our dedicated AR follow-up team works tirelessly to recover every dollar owed to your practice. With systematic workflows and aggressive yet professional follow-up protocols, we significantly reduce your accounts receivable days and improve cash flow.',
        icon: icons.arCalling,
        items: ['Insurance Follow-up (30/60/90/120+ days)', 'Denial Analysis & Resolution', 'Payment Variance Identification', 'Aging Report Management', 'Appeal Preparation & Submission', 'Underpayment Recovery', 'Credit Balance Resolution', 'Payer Escalation Management'],
      },
      {
        label: 'Enrollment Services',
        title: 'Credentialing Services',
        desc: 'Navigating the complex world of provider credentialing can be overwhelming. Our credentialing specialists handle the entire process, from initial enrollment through re-credentialing, ensuring your providers are in-network and ready to see patients.',
        icon: icons.credentialing,
        items: ['Provider Enrollment (Medicare, Medicaid, Commercial)', 'Re-Credentialing & Revalidation', 'CAQH Profile Management', 'Payer Contract Negotiation Support', 'Group & Individual NPI Registration', 'State License Tracking', 'DEA Registration Assistance', 'Hospital Privileging Support'],
      },
    ];
  }

  /* ---------- Router ---------- */
  const routes = {
    home: homePage,
    about: aboutPage,
    services: servicesPage,
    contact: contactPage,
    privacy: privacyPage,
  };

  const pageContent = document.getElementById('pageContent');

  function getHash() {
    return (location.hash.replace('#', '') || 'home').toLowerCase();
  }

  window.navigateTo = function (page) {
    location.hash = '#' + page;
  };

  function render(page) {
    const build = routes[page] || routes.home;
    pageContent.classList.add('fade-out');
    setTimeout(() => {
      pageContent.innerHTML = build();
      pageContent.classList.remove('fade-out');
      window.scrollTo({ top: 0, behavior: 'instant' });
      setActiveNav(page);
      initPageFeatures();
    }, 350);
  }

  function setActiveNav(page) {
    document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach(a => {
      const href = a.getAttribute('href').replace('#', '');
      a.classList.toggle('active', href === page);
    });
  }

  window.addEventListener('hashchange', () => render(getHash()));

  /* ---------- Navigation click handler ---------- */
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-nav]');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href').replace('#', '');
      navigateTo(href);
      closeMobileMenu();
    }
  });

  /* ---------- Mobile Menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('mobileOverlay');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    overlay.classList.toggle('visible');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  overlay.addEventListener('click', closeMobileMenu);

  function closeMobileMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  /* ---------- Sticky Navbar ---------- */
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 60);
    lastScroll = scrollY;

    // Scroll-to-top
    const scrollBtn = document.getElementById('scrollTop');
    scrollBtn.classList.toggle('visible', scrollY > 500);
  });

  document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Intersection Observer (Scroll Reveal) ---------- */
  function initRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  /* ---------- Animated Counter ---------- */
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '+';
          const duration = 2000;
          const startTime = performance.now();

          function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = current + (progress >= 1 ? suffix : '');
            if (progress < 1) requestAnimationFrame(update);
          }

          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  /* ---------- Testimonial Carousel ---------- */
  function initCarousel() {
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    if (!track || !dotsContainer) return;

    let current = 0;
    const slides = track.children.length;
    let autoplayId;

    function goTo(index) {
      current = ((index % slides) + slides) % slides;
      track.style.transform = `translateX(-${current * 100}%)`;
      dotsContainer.querySelectorAll('.testimonial-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    dotsContainer.addEventListener('click', (e) => {
      const dot = e.target.closest('.testimonial-dot');
      if (dot) {
        goTo(parseInt(dot.dataset.index, 10));
        resetAutoplay();
      }
    });

    function resetAutoplay() {
      clearInterval(autoplayId);
      autoplayId = setInterval(() => goTo(current + 1), 5000);
    }

    resetAutoplay();
  }

  /* ---------- Contact Form Validation ---------- */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const fields = [
        { id: 'formName', errorId: 'nameError', validate: v => v.trim().length >= 2 },
        { id: 'formEmail', errorId: 'emailError', validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
        { id: 'formService', errorId: 'serviceError', validate: v => v !== '' },
        { id: 'formMessage', errorId: 'messageError', validate: v => v.trim().length >= 10 },
      ];

      fields.forEach(f => {
        const input = document.getElementById(f.id);
        const error = document.getElementById(f.errorId);
        if (!f.validate(input.value)) {
          input.classList.add('error');
          error.style.display = 'block';
          valid = false;
        } else {
          input.classList.remove('error');
          error.style.display = 'none';
        }
      });

      if (valid) {
        form.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
      }
    });

    // Live validation reset
    form.querySelectorAll('input, select, textarea').forEach(el => {
      el.addEventListener('input', () => {
        el.classList.remove('error');
        const errEl = el.parentElement.querySelector('.error-message');
        if (errEl) errEl.style.display = 'none';
      });
    });
  }

  /* ---------- Init Page Features ---------- */
  function initPageFeatures() {
    initRevealObserver();
    initCounters();
    initCarousel();
    initContactForm();
  }

  /* ---------- Preloader ---------- */
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('preloader').classList.add('hidden');
    }, 800);
    render(getHash());
  });

  // Fallback: if load already fired
  if (document.readyState === 'complete') {
    setTimeout(() => {
      document.getElementById('preloader').classList.add('hidden');
    }, 800);
    render(getHash());
  }
})();
