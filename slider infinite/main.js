let images = document.querySelectorAll(".slider__item");
let imagesSrc = [];
for(let i=0; i< images.length; i++){
    imagesSrc[i] = images[i].src;
    images[i].remove();
}

let step = 0;
let offset = 0;
function addRightImage(){
    let imgCur = document.createElement("img");
    imgCur.src = imagesSrc[step];
    imgCur.classList.add("slider__item");
    imgCur.style.left = offset*512 + "px";
    document.querySelector(".slider__window").append(imgCur);
    if(step + 1 > imagesSrc.length - 1){
        step = 0;
    }
    else{
        step++;
    }
    offset = 1;
}

addRightImage();
addRightImage();

let btn = document.querySelector(".btn");

let handler = function next(){
    btn.removeEventListener("click", handler);
    offset = 0;
    slides = document.querySelectorAll(".slider__item");
    for(let slide of slides){
        slide.style.left = offset*512 - 512 + "px";
        offset++;
    }
    offset = 1;
    addRightImage();
    setTimeout(() => {slides[0].remove(); btn.addEventListener("click", handler);}, 500);
    // slides[0].remove();
}

btn.addEventListener("click", handler);