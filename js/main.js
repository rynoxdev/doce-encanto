AOS.init({
  once: true,
  duration: 900,
  easing: 'ease-out-cubic'
});

// Scroll suave
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// WhatsApp automático
const whatsappBtn = document.querySelector('.whatsapp-btn');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    const msg = encodeURIComponent(
      'Olá! Gostaria de fazer uma encomenda 😊'
    );
    window.open(
      'https://wa.me/55SEUNUMEROAQUI?text=' + msg,
      '_blank'
    );
  });
}
