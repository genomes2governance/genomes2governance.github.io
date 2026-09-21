const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

const setActive = id => {
  navButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.page === id));
};

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.page).scrollIntoView({ behavior: "smooth" });
  });
});

const observer = new IntersectionObserver(
  entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) setActive(visible.target.id);
  },
  { rootMargin: "-76px 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
);

pages.forEach(page => observer.observe(page));

const newsScroll = document.querySelector(".news-scroll");
const scrollStep = () => newsScroll.querySelector(".news-card").offsetWidth + 20;

document.querySelector(".news-arrow-prev").addEventListener("click", () => {
  newsScroll.scrollBy({ left: -scrollStep(), behavior: "smooth" });
});

document.querySelector(".news-arrow-next").addEventListener("click", () => {
  newsScroll.scrollBy({ left: scrollStep(), behavior: "smooth" });
});
