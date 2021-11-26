var current = 0,
  slides = document.getElementsByClassName("img-slider");

setInterval(function () {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = current != slides.length - 1 ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 5000);

const nav = document.querySelector("#myHeader");
const NavTop = nav.offsetTop;

function fixnavbar() {
  if (window.pageYOffset >= NavTop) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll", fixnavbar);

const check = document.querySelector(".navigation__checkbox");
function noneScroll() {
  if (check.checked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}
window.addEventListener("click", noneScroll);
