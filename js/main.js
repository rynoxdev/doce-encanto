
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Em produção, aqui você integraria com backend ou email.');
  form.reset();
});
