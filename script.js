// Carousel script for services page
// moves through testimonial images inside .carousel

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return; // nothing to do on other pages

  const slides = carousel.querySelectorAll("img");
  const prevBtn = document.querySelector(".carousel-container .prev-btn");
  const nextBtn = document.querySelector(".carousel-container .next-btn");
  let index = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn &&
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
    });

  nextBtn &&
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateCarousel();
    });

  // optionally allow arrow keys
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevBtn && prevBtn.click();
    if (e.key === "ArrowRight") nextBtn && nextBtn.click();
  });

  // auto advance every 5 seconds
  let autoInterval = setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel();
  }, 5000);

  // pause on hover
  carousel.parentElement.addEventListener("mouseenter", () =>
    clearInterval(autoInterval),
  );

  // restart mouse on leave
  carousel.parentElement.addEventListener("mouseleave", () => {
    autoInterval = setInterval(() => {
      index = (index + 1) % slides.length;
      updateCarousel();
    }, 5000);
  });
});

document.getElementById("paymentBtn").addEventListener("click", function () {
  alert(
    "Thank you! We will confirm your booking once payment has been processed.",
  );
});
