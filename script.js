const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.classList.toggle('active', open);
  menu.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.classList.remove('active');
    menu.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`AAN Project Dubai enquiry — ${data.get('business')}`);
  const body = encodeURIComponent(
`Name: ${data.get('name')}
Email: ${data.get('email')}
Business Line: ${data.get('business')}

Message:
${data.get('message') || ''}`
  );

  /* Replace the placeholder email below with the company's official email address. */
  window.location.href = `mailto:info@aanprojectdubai.com?subject=${subject}&body=${body}`;
  note.textContent = 'Opening your email application…';
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
});


// Mobile Businesses dropdown
document.querySelectorAll('.businesses-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const parent = toggle.closest('.nav-businesses');
      parent.classList.toggle('open');
    }
  });
});


// Responsive navigation: close after selecting a normal link on mobile.
document.querySelectorAll('.nav > a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    if (nav && window.innerWidth <= 900) nav.classList.remove('open');
  });
});

// Close mobile menu when tapping outside it.
document.addEventListener('click', (e) => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.menu-toggle');
  if (!nav || !toggle || window.innerWidth > 900) return;
  if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
    document.querySelectorAll('.nav-businesses.open').forEach(el => el.classList.remove('open'));
  }
});
