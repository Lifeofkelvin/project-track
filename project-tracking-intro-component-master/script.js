const menuBtn = document.querySelector(".menu-btn");
const dropMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("close-menu");

  dropMenu.classList.toggle("active");
});
