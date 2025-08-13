
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
    }
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0; 
    }
    else if(index < 0){
        slideIndex = slides.length - 1;

    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function slide0(){
    slideIndex = 0;
    showSlide(slideIndex);
}
function slide1(){
    slideIndex = 1;
    showSlide(slideIndex);
}
function slide2(){
    slideIndex = 2;
    showSlide(slideIndex);
}
function slide3(){
    slideIndex = 3;
    showSlide(slideIndex);
}
function slide4(){
    slideIndex = 4;
    showSlide(slideIndex);
}
function slide5(){
    slideIndex = 5;
    showSlide(slideIndex);
}
function slide6(){
    slideIndex = 6;
    showSlide(slideIndex);
}
function slide7(){
    slideIndex = 7;
    showSlide(slideIndex);
}
function slide8(){
    slideIndex = 8;
    showSlide(slideIndex);
}
function slide9(){
    slideIndex = 9;
    showSlide(slideIndex);
}
function slide10(){
    slideIndex = 10;
    showSlide(slideIndex);
}
function slide11(){
    slideIndex = 11;
    showSlide(slideIndex);
}
function slide12(){
    slideIndex = 12;
    showSlide(slideIndex);
}
function slide13(){
    slideIndex = 13;
    showSlide(slideIndex);
}
function slide14(){
    slideIndex = 14;
    showSlide(slideIndex);
}
function slide15(){
    slideIndex = 15;
    showSlide(slideIndex);
}
function slide16(){
    slideIndex = 16;
    showSlide(slideIndex);
}
function slide17(){
    slideIndex = 17;
    showSlide(slideIndex);
}
function slide18(){
    slideIndex = 18;
    showSlide(slideIndex);
}
function slide19(){
    slideIndex = 19;
    showSlide(slideIndex);
}
function slide20(){
    slideIndex = 20;
    showSlide(slideIndex);
}
function slide21(){
    slideIndex = 21;
    showSlide(slideIndex);
}
function slide22(){
    slideIndex = 22;
    showSlide(slideIndex);
}
function slide23(){
    slideIndex = 23;
    showSlide(slideIndex);
}
function slide24(){
    slideIndex = 24;
    showSlide(slideIndex);
}
function slide25(){
    slideIndex = 25;
    showSlide(slideIndex);
}
function slide26(){
    slideIndex = 26;
    showSlide(slideIndex);
}
function slide27(){
    slideIndex = 27;
    showSlide(slideIndex);
}
function slide28(){
    slideIndex = 28;
    showSlide(slideIndex);
}
function slide29(){
    slideIndex = 29;
    showSlide(slideIndex);
}
function slide30(){
    slideIndex = 30;
    showSlide(slideIndex);
}
function slide31(){
    slideIndex = 31;
    showSlide(slideIndex);
}