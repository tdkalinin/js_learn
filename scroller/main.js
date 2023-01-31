let scrollerProgress = document.querySelector(".scroller.progress");
let scroller = document.querySelector(".scroller");
let body = document.querySelector("body");

let bodyWidth;
let scrollerWidth;

function updateScrollLocation(){
    bodyWidth = Number(window.getComputedStyle(body).getPropertyValue("width").replace("px", ""));
    scrollerWidth = Number(window.getComputedStyle(scroller).getPropertyValue("width").replace("px", ""));

    scroller.style.left = bodyWidth/2-scrollerWidth/2 + "px";
    scrollerProgress.style.left = bodyWidth/2-scrollerWidth/2 + "px";
};

updateScrollLocation();

setInterval(function(){
    let maxScrollY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollY = window.scrollY;
    scrollerProgress.style.width = (parseInt(scrollerWidth*scrollY/maxScrollY) + "px").toString();
    updateScrollLocation();
}, 15);