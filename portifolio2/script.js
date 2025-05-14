function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Animação ao rolar
const faders = document.querySelectorAll(".fade-in");

function appearOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  faders.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("appear");
    }
  });
}

window.addEventListener("scroll", appearOnScroll);
window.addEventListener("load", appearOnScroll);

// Carrossel de projetos
let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const totalItems = carousel.children.length;
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
// Alternar tema claro/escuro
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Animação de texto caindo
document.addEventListener('DOMContentLoaded', () => {
  const welcomeText = document.getElementById('welcome-text');
  if (!welcomeText) return;

  const text = welcomeText.textContent;
  welcomeText.textContent = '';
  
  // Criar spans para cada letra
  [...text].forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    if (char === ' ') {
      span.classList.add('space');
    }
    welcomeText.appendChild(span);
  });

  // Animar cada letra
  const letters = welcomeText.querySelectorAll('span');
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.add('visible');
    }, 100 * index);
  });
});

// Reiniciar animação quando a seção estiver visível
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const welcomeText = entry.target;
      const letters = welcomeText.querySelectorAll('span');
      
      letters.forEach((letter, index) => {
        letter.classList.remove('visible');
        setTimeout(() => {
          letter.classList.add('visible');
        }, 100 * index);
      });
    }
  });
}, { threshold: 0.5 });

// Observar o elemento de texto
document.addEventListener('DOMContentLoaded', () => {
  const welcomeText = document.getElementById('welcome-text');
  if (welcomeText) {
    observer.observe(welcomeText);
  }
});
