const slides = document.querySelectorAll(".carousel-slide");
const section = document.querySelector(".carousel-proteins");
const nextBtn = document.getElementById("next-slide");
const prevBtn = document.getElementById("prev-slide");
const dotsContainer = document.getElementById("carousel-dots");

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
const dots = document.querySelectorAll(".dot");

function updateSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");

  const bgClass = "bg-" + slides[index].dataset.bg;
  section.className = `carousel-proteins ${bgClass} text-white py-5`;
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

function startAutoPlay() {
  autoPlay = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
  clearInterval(autoPlay);
}

section.addEventListener("mouseenter", stopAutoPlay);
section.addEventListener("mouseleave", startAutoPlay);

startAutoPlay();


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

