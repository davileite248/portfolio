// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulário de Contato
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulação de envio (segurança básica)
    const formData = new FormData(contactForm);
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Validação básica
    if (nome && email && document.getElementById('mensagem').value) {
        // Aqui você pode integrar com EmailJS, Formspree ou outro serviço
        alert('✅ Mensagem enviada com sucesso! Em breve entrarei em contato.');
        contactForm.reset();
    } else {
        alert('❌ Por favor, preencha todos os campos.');
    }
});

// Animação de Scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.projeto-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = 150;

        if (cardTop < window.innerHeight - cardVisible) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});