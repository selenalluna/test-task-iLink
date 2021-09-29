let btnLeft = document.querySelector(".slider__btn-left");
let btnRight = document.querySelector(".slider__btn-right");
let slides = document.querySelectorAll(".slider__image");

let i = 0;

btnLeft.addEventListener("click", function () {
    --i
    if (i < 0) {
        slides[i+1].classList.remove("block");
        i = slides.length-1;
        slides[i].classList.add("block");
    } else {
        slides[i+1].classList.remove("block");
        slides[i].classList.add("block");
    }
})

btnRight.addEventListener("click", function () {
    ++i
    if (i >= slides.length) {
        slides[i-1].classList.remove("block");
        i = 0;
        slides[i].classList.add("block");
    } else {
        slides[i-1].classList.remove("block");
        slides[i].classList.add("block");
    }
})