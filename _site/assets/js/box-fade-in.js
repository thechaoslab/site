document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".quad-box");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  boxes.forEach(box => observer.observe(box));
});