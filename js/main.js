// ============================================================
// GHOST.DEV — MAIN JS
// Preloader (2.5s), scroll-reveal, scroll-spy, stat counter,
// skill bar fill. Lightweight, no heavy libraries.
// ============================================================

function handlePreloader() {
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      setTimeout(() => { preloader.style.display = 'none'; }, 700);
    }, 1200);
  });
  // fallback in case 'load' already fired before this script ran
  if (document.readyState === 'complete') {
    setTimeout(() => {
      preloader.classList.add('hidden');
      setTimeout(() => { preloader.style.display = 'none'; }, 700);
    }, 1200);
  }
}

function initNavScroll() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

function initMobileMenu() {
  const burger = document.getElementById('navBurger');
  const mobile = document.getElementById('navMobile');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobile.classList.toggle('open');
  });
  mobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobile.classList.remove('open');
    });
  });
}

function initScrollSpy() {
  const sections = ['home', 'about', 'services', 'work', 'skills', 'testimonials'];
  const links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 200) current = id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}

function initScrollReveal() {
  const items = document.querySelectorAll('.reveal, .reveal-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}

function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute('data-width') + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(bar => observer.observe(bar));
}

function initStatCounters() {
  const stats = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        let current = 0;
        const duration = 1200;
        const stepTime = Math.max(Math.floor(duration / target), 20);
        const timer = setInterval(() => {
          current += 1;
          el.textContent = current;
          if (current >= target) clearInterval(timer);
        }, stepTime);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.6 });
  stats.forEach(stat => observer.observe(stat));
}

function initHeroParallax() {
  const skull = document.getElementById('heroSkull');
  if (!skull || window.matchMedia('(pointer: coarse)').matches) return;
  window.addEventListener('scroll', () => {
    const offset = Math.min(window.scrollY * 0.06, 30);
    skull.style.transform = `translateY(${offset}px) scale(1)`;
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  handlePreloader();
  initNavScroll();
  initMobileMenu();
  initScrollSpy();
  initScrollReveal();
  initSkillBars();
  initStatCounters();
  initHeroParallax();
});
