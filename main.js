let btn = document.getElementById("btn");
let video = document.getElementById("video");

video.addEventListener("click",function(){
    btn.style.display = "none";
    video.setAttribute("controls","controls")
})

let burger = document.getElementById('burger');
let nav = document.getElementById('nav');

burger.addEventListener('click',function () {
    if(nav.classList.contains('nav-mob')) {
        nav.classList.remove('nav-mob')
    }else {
        nav.classList.add('nav-mob')
    }
})


