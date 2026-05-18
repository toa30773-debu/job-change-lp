const hamburgerBtn = document.getElementById('hamburgerBtn');
const headerNav = document.getElementById('headerNav');

if (hamburgerBtn && headerNav) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = headerNav.classList.toggle('is-open');
    hamburgerBtn.classList.toggle('is-open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  });

  headerNav.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      headerNav.classList.remove('is-open');
      hamburgerBtn.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const header = document.querySelector('.header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 0);
  }, { passive: true });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
