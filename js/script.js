let menuResponsive = document.querySelector(".menuResponsive");
let header = document.querySelector("header");

menuResponsive.onclick = function () {
    header.classList.toggle('active')
}

window.onscroll = () => {
    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active')
    }else{
        document.querySelector('#scroll-top').classList.remove('active')
    }
}