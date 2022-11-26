let collapse = document.getElementById("collapse");
let navbar = document.querySelector(".nav");

const background = document.querySelector(".head");


window.addEventListener("scroll", () => {
    // background.style.backgroundSize = 100 - +window.pageYOffset/12+'%';
});

collapse.addEventListener("click", (ev) => {
    if (ev.target.className == "icon-align-right") {
        ev.target.classList.remove("icon-align-right");
        ev.target.classList.add("icon-close");
        navbar.style.right = "0";
    } else {
        ev.target.classList.remove("icon-close");
        ev.target.classList.add("icon-align-right");
        navbar.style.right = "";
    }
});
