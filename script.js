/* =============================================
   AMPLIFY LABS — Interactive Script v3
   Strategic Partner: Subtle, Premium Motion
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Mobile Navigation ----
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileMenu.querySelectorAll('.nav-link, .btn').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ---- Navbar Scroll Effect ----
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.pageYOffset > 50);
        }
    }, { passive: true });

    // ---- Smooth Scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = navbar ? navbar.offsetHeight + 16 : 80;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---- FAQ Accordion ----
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                    other.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            item.classList.toggle('active');
            answer.style.maxHeight = isActive ? null : answer.scrollHeight + 'px';
        });
    });

    // ---- Scroll Reveal ----
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.06,
        rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ---- Animated Stats Counter ----
    const metricValues = document.querySelectorAll('.metric-value[data-target]');
    let metricsAnimated = false;

    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2200;
        const start = performance.now();

        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    if (metricValues.length > 0) {
        const metricsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !metricsAnimated) {
                    metricsAnimated = true;
                    metricValues.forEach((el, i) => {
                        setTimeout(() => animateCounter(el), i * 200);
                    });
                    metricsObserver.disconnect();
                }
            });
        }, { threshold: 0.3 });

        metricValues.forEach(el => metricsObserver.observe(el));
    }

    // ---- Active Nav Highlighting ----
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links .nav-link');

    window.addEventListener('scroll', () => {
        const scrollPos = window.pageYOffset + (navbar ? navbar.offsetHeight + 100 : 180);

        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${section.id}`);
                });
            }
        });
    }, { passive: true });

    // ---- Hero Parallax ----
    const heroOrbs = document.querySelectorAll('.hero .hero-orb');
    const heroGrid = document.querySelector('.hero-grid');

    if (heroOrbs.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroHeight = document.querySelector('.hero')?.offsetHeight || 800;

            if (scrolled < heroHeight) {
                heroOrbs.forEach((orb, i) => {
                    orb.style.transform = `translateY(${scrolled * (i + 1) * 0.12}px)`;
                });
                if (heroGrid) {
                    heroGrid.style.transform = `translateY(${scrolled * 0.04}px)`;
                }
            }
        }, { passive: true });
    }

    // ---- Subtle Card Lift on Desktop ----
    if (window.matchMedia('(min-width: 1025px)').matches) {
        const liftCards = document.querySelectorAll('.infra-item, .testimonial-card, .alternative, .process-step');

        liftCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(1000px) rotateX(${-y * 2}deg) rotateY(${x * 2}deg) translateY(-3px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // ---- Pricing Tier Focus ----
    const tierCards = document.querySelectorAll('.tier-card');

    if (window.matchMedia('(min-width: 1025px)').matches && tierCards.length > 0) {
        const tiersGrid = document.querySelector('.tiers-grid');

        tiersGrid?.addEventListener('mouseenter', () => {
            tierCards.forEach(card => {
                if (!card.classList.contains('featured')) {
                    card.style.opacity = '0.65';
                    card.style.transition = 'opacity 0.3s ease, box-shadow 0.35s ease';
                }
            });
        });

        tiersGrid?.addEventListener('mouseleave', () => {
            tierCards.forEach(card => {
                card.style.opacity = '';
            });
        });

        tierCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                tierCards.forEach(c => {
                    c.style.opacity = c === card ? '1' : '0.5';
                });
            });
        });
    }

    // ---- Cursor Light on Hero (Desktop) ----
    const hero = document.querySelector('.hero');
    if (hero && window.matchMedia('(min-width: 1025px)').matches) {
        const glow = document.createElement('div');
        glow.style.cssText = `
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,240,255,0.05), transparent 70%);
      pointer-events: none;
      z-index: 0;
      transition: transform 0.4s ease-out;
    `;
        hero.querySelector('.hero-bg')?.appendChild(glow);

        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            glow.style.transform = `translate(${e.clientX - rect.left - 200}px, ${e.clientY - rect.top - 200}px)`;
        });
    }

    // ---- Hero Entrance Cascade ----
    const heroEyebrow = document.querySelector('.hero .eyebrow');
    const heroH1 = document.querySelector('.hero h1');
    const heroBody = document.querySelector('.hero .body-lg');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroMetrics = document.querySelector('.hero-metrics');

    const cascade = [
        { el: heroEyebrow, delay: 100 },
        { el: heroH1, delay: 300 },
        { el: heroBody, delay: 550 },
        { el: heroButtons, delay: 750 },
        { el: heroMetrics, delay: 950 },
    ];

    cascade.forEach(({ el, delay }) => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            setTimeout(() => {
                el.style.transition = 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, delay);
        }
    });

    // ---- Navbar Entrance ----
    if (navbar) {
        navbar.style.opacity = '0';
        navbar.style.transform = 'translateY(-16px)';
        setTimeout(() => {
            navbar.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease';
            navbar.style.opacity = '1';
            navbar.style.transform = 'translateY(0)';
        }, 50);
    }

});
