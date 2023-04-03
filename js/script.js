let menuResponsive = document.querySelector(".menuResponsive");
let header = document.querySelector("header");

menuResponsive.onclick = function () {
    header.classList.toggle('active')
}