// navbarscroll
var header = document.querySelector("header");
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {


    var currentScrollPos = window.pageYOffset;




    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";

        header.style.transition = "0.5s";
        if (window.pageYOffset < 130) {

            header.style.backgroundColor = "#F5F5F5"
            header.style.position = "fixed"

        }


    } else {
        header.style.top = "-6.625rem";
        header.style.position = "fixed";
        header.style.backgroundColor = "#F5F5F5";
        if (window.pageYOffset < 130) {

            header.style.backgroundColor = "#F5F5F5"
            header.style.position = "fixed"

        }


    }
    prevScrollpos = currentScrollPos;


}






// search
$(".btn").click(function() {
    $(".input").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".input").val("");
    $(".menu ul").toggleClass("menu_ul_active")
    $(".btn1").toggleClass("btn1-animate")


});



// tab section
var double__groups__box = document.querySelector(".double__groups__box");
var groups__active = document.querySelector(".groups__active")
var wrapper__all = document.querySelector(".tabs__header__wrapper__all");
var wrapper__active = document.querySelector(".tabs__header__wrapper__active");
var indicator__item = document.querySelector(".tabs__indicator__wrapper__item");
var double__groups__box__item = document.querySelectorAll(".double__groups__box .double__groups__box__item");
var item2 = document.querySelectorAll("groups__active .double__groups__box__item")

wrapper__all.addEventListener("click", () => {
    indicator__item.style.transform = "translateX(0%)";
    wrapper__active.style.color = "rgba(51, 51, 51, 0.5)";
    wrapper__all.style.color = "#333333";
    double__groups__box.style.display = "flex";
    groups__active.style.display = "none";
})

wrapper__active.addEventListener("click", () => {
    indicator__item.style.transform = "translateX(322%)"
    wrapper__all.style.color = "rgba(51, 51, 51, 0.5)";
    wrapper__active.style.color = "#333333";
    groups__active.style.display = "flex";
    double__groups__box.style.display = "none";
})