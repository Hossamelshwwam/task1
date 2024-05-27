const menu = document.querySelector(".menu");
const link = document.querySelector(".navbar .links ul");

menu.addEventListener("click", () => {
  link.classList.toggle("hidden");
});

const content = document.querySelector(".content");
const contentMobile = document.querySelector(".content-mobile");

function checkWindowWidth() {
  console.log(window.innerWidth);
  if (window.innerWidth < 558) {
    content.classList.add("hidden");
    contentMobile.classList.remove("hidden");
  } else {
    content.classList.remove("hidden");
    contentMobile.classList.add("hidden");
  }
}
window.addEventListener("resize", checkWindowWidth);

window.addEventListener("load", checkWindowWidth);
