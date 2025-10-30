
// Función genérica para crear cualquier carrusel
function initCarousel({
  sectionSelector,
  slidesSelector,
  nextBtnId,
  prevBtnId,
  dotsContainerId,
  baseClass
}) {
  const section = document.querySelector(sectionSelector);
  const slides = section.querySelectorAll(slidesSelector);
  const nextBtn = document.getElementById(nextBtnId);
  const prevBtn = document.getElementById(prevBtnId);
  const dotsContainer = document.getElementById(dotsContainerId);

  let current = 0;
  let autoPlay;

  // Crear dots dinámicamente
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      current = index;
      updateSlide(current);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  // Actualiza slide activo
  function updateSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    const bgClass = "bg-" + slides[index].dataset.bg;
    section.className = `${baseClass} ${bgClass} text-white py-5`;
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    updateSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    updateSlide(current);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // AutoPlay
  function startAutoPlay() {
    autoPlay = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlay);
  }

  section.addEventListener("mouseenter", stopAutoPlay);
  section.addEventListener("mouseleave", startAutoPlay);

  startAutoPlay();
}

//
// 🧃 Iniciar carrusel de proteínas
//
initCarousel({
  sectionSelector: ".carousel-proteins",
  slidesSelector: ".carousel-slide",
  nextBtnId: "next-slide",
  prevBtnId: "prev-slide",
  dotsContainerId: "carousel-dots",
  baseClass: "carousel-proteins"
});

//
// ⚡ Iniciar carrusel de creatinas
//
initCarousel({
  sectionSelector: ".carousel-creatinas",
  slidesSelector: ".carousel-slide",
  nextBtnId: "next-slide-creatina",
  prevBtnId: "prev-slide-creatina",
  dotsContainerId: "carousel-dots-creatina",
  baseClass: "carousel-creatinas"
});

// FAQ
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach((i) =>
        i.classList.remove("active")
      );

      if (!isActive) item.classList.add("active");
    });
  });



  // Footer fade-in al hacer scroll
  const footer = document.querySelector('.site-footer');

  function revealFooter() {
    const rect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight - 100) {
      footer.classList.add('visible');
      window.removeEventListener('scroll', revealFooter);
    }
  }

  window.addEventListener('scroll', revealFooter);
  revealFooter(); // por si ya está visible al cargar la página

  // Mostrar botones fixed al hacer scroll
  document.addEventListener("DOMContentLoaded", () => {
    const fixedButtons = document.querySelectorAll(".fixed-btn");
    const showAfter = 200; // px de scroll para mostrar los botones

    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;

      fixedButtons.forEach(btn => {
        if (scrolled > showAfter) {
          btn.classList.remove("hidden");
        } else {
          btn.classList.add("hidden");
        }
      });
    });
  });

