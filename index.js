const menu = document.querySelector(".menu");
const link = document.querySelector(".navbar .links ul");

menu.addEventListener("click", () => {
  link.classList.toggle("hidden");
});

const content = document.querySelector(".content");
const contentMobile = document.querySelector(".content-mobile");

function checkWindowWidth() {
  if (window.innerWidth < 558) {
    content.classList.add("content-hidden");
    contentMobile.classList.remove("content-hidden");
  } else {
    content.classList.remove("content-hidden");
    contentMobile.classList.add("content-hidden");
  }
}
window.addEventListener("resize", checkWindowWidth);

window.addEventListener("load", checkWindowWidth);
