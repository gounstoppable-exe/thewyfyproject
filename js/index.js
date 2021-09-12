let navlinks = document.getElementById("navlinks");
let hambur = document.getElementById("hamburger");
let links = document.getElementsByClassName("nav-link");

hambur.addEventListener("click", function hamburger() {
  if (navlinks.classList.contains("resMenu")) {
    navlinks.classList.remove("resMenu");
  } else {
    navlinks.classList.add("resMenu");
  }
});
