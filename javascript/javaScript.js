//Navegation menú

let menu = document.querySelector("#navegation");
let hamburger = document.querySelector(".hamburger");
let main = document.querySelector(".main");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("show-menu");
    if(menu.matches(".show-menu")){
        main.addEventListener("click", function(){
            hamburger.classList.remove("is-active");
            menu.classList.remove("show-menu");
        });
    }
});



// Switch theme
let btnTheme = document.getElementById('theme');
let btnThemeBfr = window.getComputedStyle(document.querySelector('#theme ','::after'));

btnTheme.addEventListener("click", function() {
    if(btnTheme.checked){ 
        document.documentElement.setAttribute('data-theme', 'dark');
        btnTheme.style.marginLeft = '10px';
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        btnTheme.style.marginLeft = '0px';
    }
});


// Slider by Juan Civardi

const coment1 = document.querySelector('.coment1');
const coment2 = document.querySelector('.coment2');
const coment3 = document.querySelector('.coment3');
const back = document.getElementById('back');
const next = document.getElementById('next');

coment1.classList.toggle("hidden-to-left");
coment2.classList.toggle("showed-up");
coment3.classList.toggle("hidden-to-right");

next.addEventListener("click", function() {
    if(coment1.matches('.showed-up')){
        // back.classList.toggle("hidden-button");
        coment1.classList.toggle("showed-up");
        coment1.classList.toggle("hidden-to-left");
        coment2.classList.toggle("hidden-to-right");
        coment2.classList.toggle("showed-up");
        coment3.classList.toggle("hidden-to-left");
        coment3.classList.toggle("hidden-to-right");
    }
    else if(coment2.matches('.showed-up')){
        coment1.classList.toggle("hidden-to-left");
        coment1.classList.toggle("hidden-to-right");
        coment2.classList.toggle("showed-up");
        coment2.classList.toggle("hidden-to-left");
        coment3.classList.toggle("hidden-to-right");
        coment3.classList.toggle("showed-up");
        // next.classList.toggle("hidden-button");
    }else{
        coment1.classList.toggle("hidden-to-right");
        coment1.classList.toggle("showed-up");
        coment2.classList.toggle("hidden-to-left");
        coment2.classList.toggle("hidden-to-right");
        coment3.classList.toggle("hidden-to-left");
        coment3.classList.toggle("showed-up");
    }
});

back.addEventListener("click", function() {
    if(coment3.matches('.showed-up')){
        coment1.classList.toggle("hidden-to-right");
        coment1.classList.toggle("hidden-to-left");
        coment2.classList.toggle("hidden-to-left");
        coment2.classList.toggle("showed-up");
        coment3.classList.toggle("showed-up");
        coment3.classList.toggle("hidden-to-right");
        // next.classList.toggle("hidden-button");
    }
    else if(coment2.matches('.showed-up')){
        // back.classList.toggle("hidden-button");
        coment1.classList.toggle("hidden-to-left");
        coment1.classList.toggle("showed-up");
        coment2.classList.toggle("showed-up");
        coment2.classList.toggle("hidden-to-right");
        coment3.classList.toggle("hidden-to-right");
        coment3.classList.toggle("hidden-to-left");
    }else{
        coment1.classList.toggle("hidden-to-right");
        coment1.classList.toggle("showed-up");
        coment2.classList.toggle("hidden-to-left");
        coment2.classList.toggle("hidden-to-right");
        coment3.classList.toggle("hidden-to-left");
        coment3.classList.toggle("showed-up");
    }
});

