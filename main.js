/* js/main.js — Care Homoeo Clinic */
//git
(function () {
  'use strict';

  /* ── MOBILE NAV TOGGLE ─────────────────────────────── */
  const toggle  = document.getElementById('navToggle');
  const navMenu = document.getElementById('navLinks');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', false);
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', false);
      }
    });
  }

  /* ── ACTIVE NAV HIGHLIGHTING (Intersection Observer) ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links li a[href^="#"]');

  function setActiveLink(id) {
    navLinks.forEach(a => {
      a.classList.toggle('active-link', a.getAttribute('href') === '#' + id);
    });
  }

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: '-60px 0px -60% 0px', threshold: 0 }
    );
    sections.forEach(sec => observer.observe(sec));
  }

  /* ── SCROLL REVEAL ──────────────────────────────────── */
  function addRevealClasses() {
    const targets = [
      '.hero-tag', '.hero-title', '.hero-sub', '.hero-actions', '.hero-trust',
      '.section-header', '.col-text', '.col-visual',
      '.service-card', '.why-item',
      '.doctor-card', '.contact-info', '.map-wrapper',
      '.timings-text', '.timings-card'
    ];
    targets.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = (i * 0.08) + 's';
      });
    });
  }

  function initReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach(el => io.observe(el));
  }

  addRevealClasses();
  initReveal();

  /* ── STICKY HEADER SHADOW ────────────────────────────── */
  const header = document.querySelector('.site-header');
  if (header) {
    const updateHeader = () => {
      header.style.boxShadow =
        window.scrollY > 10
          ? '0 2px 16px rgba(0,0,0,0.08)'
          : 'none';
    };
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ── SMOOTH ANCHOR OFFSET (account for sticky header) ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target   = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const headerH = document.querySelector('.site-header')?.offsetHeight || 64;
      const top     = target.getBoundingClientRect().top + window.scrollY - headerH - 8;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
