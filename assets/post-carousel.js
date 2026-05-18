document.querySelectorAll(".ig-carousel").forEach((carousel) => {
  const track = carousel.querySelector(".ig-carousel-track");
  const slides = [...carousel.querySelectorAll(".ig-carousel-slide")];
  const prevBtn = carousel.querySelector(".ig-carousel-prev");
  const nextBtn = carousel.querySelector(".ig-carousel-next");
  const dotsHost = carousel.querySelector(".ig-carousel-dots");
  const counter = carousel.querySelector(".ig-carousel-counter");
  const caption = carousel.querySelector(".ig-carousel-caption");

  if (!track || slides.length === 0) return;

  let index = 0;
  let touchStartX = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "ig-carousel-dot";
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsHost.appendChild(dot);
  });

  const dots = [...dotsHost.querySelectorAll(".ig-carousel-dot")];

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, j) => dot.classList.toggle("is-active", j === index));
    if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
    if (caption) {
      const slideCaption = slides[index].querySelector("figcaption");
      caption.textContent = slideCaption?.textContent?.trim() ?? "";
      caption.hidden = !slideCaption;
    }
  }

  prevBtn?.addEventListener("click", () => goTo(index - 1));
  nextBtn?.addEventListener("click", () => goTo(index + 1));

  carousel.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  carousel.addEventListener(
    "touchend",
    (e) => {
      const delta = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(delta) < 40) return;
      goTo(delta > 0 ? index - 1 : index + 1);
    },
    { passive: true },
  );

  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  });

  goTo(0);
});
