// ===== site.js =====

// Footer year
(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Scroll reveal
(() => {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length || !('IntersectionObserver' in window)) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => obs.observe(el));
})();

// Theme toggle
(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    root.setAttribute('data-theme', 'light');
    toggle.textContent = '☀️';
  } else {
    // Dark is default — remove any attribute
    root.removeAttribute('data-theme');
    toggle.textContent = '🌙';
  }

  toggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    if (isLight) {
      root.removeAttribute('data-theme');
      toggle.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      toggle.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    }
  });
})();


// Back to top
(() => {
  const toTop = document.getElementById('toTop');
  if (!toTop) return;

  const onScroll = () => {
    if (window.scrollY > 320) toTop.classList.add('show');
    else toTop.classList.remove('show');
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  toTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  onScroll();
})();
