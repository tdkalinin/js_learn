let sliderItems = document.querySelectorAll(".slider__item");
let btnBack = document.querySelector(".button.back");
let btnForth = document.querySelector(".button.forth");
let sliderMenu = document.querySelector(".slider__menu");

btnBack.style.display = "none";
currentSliderItemIndex = 0;

for(let i=0; i<sliderItems.length; i++){
    let newCircle = document.createElement("div");
    newCircle.classList.add("circle");
    sliderMenu.append(newCircle);
}

let circles = document.querySelectorAll(".circle");
circles[0].style.backgroundColor = "white";

function checkBtnsActivity(){
    if(currentSliderItemIndex == sliderItems.length-1) {
        btnForth.style.display = "none";
    }
    else{
        btnForth.style.display = "block";
    }
    if(currentSliderItemIndex == 0) {
        btnBack.style.display = "none";
    }
    else{
        btnBack.style.display = "block";
    }
}

function checkCirclesActivity(){
    for(let circle of circles){
        circle.style.backgroundColor = "black";
    }
    circles[currentSliderItemIndex].style.backgroundColor = "white";
}

btnForth.addEventListener("click", function(){
    sliderItems[currentSliderItemIndex].classList.remove("active");
    currentSliderItemIndex++;
    sliderItems[currentSliderItemIndex].classList.add("active");
    checkBtnsActivity();
    checkCirclesActivity();
});

btnBack.addEventListener("click", function(){
    sliderItems[currentSliderItemIndex].classList.remove("active");
    currentSliderItemIndex--;
    sliderItems[currentSliderItemIndex].classList.add("active");
    checkBtnsActivity();
    checkCirclesActivity();
});
