const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const backToTop = document.getElementById('backToTop');
const toast = document.getElementById('toast');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.event-btn').forEach(button => {
  button.addEventListener('click', () => {
    toast.textContent = `Evento selecionado: ${button.dataset.event}`;
    toast.classList.add('show');
    window.clearTimeout(window.toastTimer);
    window.toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3000);
  });
});

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 500);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
