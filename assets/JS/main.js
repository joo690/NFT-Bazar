let icon = document.querySelector(".theme");
let link = document.querySelectorAll("link");
function darkMode(){
    if(icon.classList.contains("icoo"))
    {
        icon.classList.remove("icoo");
        link[1].href = "./assets/Css/darkMode.css";
    }
    else
    {
        icon.classList.add("icoo");
        link[1].href = "./assets/Css/lightMode.css";
    }
}
icon.addEventListener("click" , darkMode);