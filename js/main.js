function switchSubTab(id, btn) {
  const section = btn.closest('section');
  section.querySelectorAll('.subtab-panel').forEach(p => p.classList.remove('active'));
  section.querySelectorAll('.subtab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('subtab-' + id).classList.add('active');
  btn.classList.add('active');
}

function toggleEventDetails(element) {
  const details = element.nextElementSibling;

  document.querySelectorAll('.event-row.expandable.active').forEach(el => {
    if (el !== element) {
      el.classList.remove('active');
      el.nextElementSibling.classList.remove('active');
    }
  });

  element.classList.toggle('active');
  details.classList.toggle('active');
}

function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});
