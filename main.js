// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.borderBottomColor = window.scrollY > 20 ? 'rgba(42,42,50,.8)' : 'rgba(42,42,50,1)';
});

// Mobile menu
function toggleMenu() {
  document.getElementById('navMobile').classList.toggle('open');
}

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 70;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});

// Intersection Observer for fade-in
const fadeEls = document.querySelectorAll(
  '.stat-card, .mission-card, .comp-block, .but-card, .contact-card, .bilan-intro'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));
