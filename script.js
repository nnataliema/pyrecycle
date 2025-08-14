window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > window.innerHeight +1000) { // scroll past header
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = "0";
    hero.style.animation = "fadeInHero 1.2s ease forwards";
  }
});