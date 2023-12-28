let icon = document.querySelector(".theme");
let link = document.querySelectorAll("link");
function darkMode() {
  if (icon.classList.contains("icoo")) {
    icon.classList.remove("icoo");
    link[1].href = "./assets/Css/darkMode.css";
  } else {
    icon.classList.add("icoo");
    link[1].href = "./assets/Css/lightMode.css";
  }
}
icon.addEventListener("click", darkMode);

let nav2 = document.querySelector(".nav2");
let nav3 = document.querySelector(".nav3");
let bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
  if (nav2.style.display == "none" && nav3.style.display == "none") {
    nav2.style.display = "block";
    nav3.style.display = "block";
  } else {
    nav2.style.display = "none";
    nav3.style.display = "none";
  }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 992)
    {
        nav2.style.display = "block";
        nav3.style.display = "block";
    }
})
