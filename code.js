"use strict"
function $(name){
    return document.querySelector(name)
}
let elImg = $(".mainImgs");
let left  = $(".left")
let next = $(".right");

let imgs = document.querySelectorAll(".img")
console.log(imgs.length);

let ind = 0;

function style(){
    if(ind > imgs.length - 1){
        ind = 0;
    }   
        elImg.style.transform = `translateX(${-ind*1000}px)`;
}
style();
next.addEventListener("click", ()=>{
    ind++
    resitInerval()
    style();    
})
left.addEventListener("click", ()=>{
    ind > 0 ? ind--: ind = imgs.length-1;
    resitInerval()
    style();
})

let interval = setInterval(run, 2000);

function run(){
    ind++;
    style();
}

function resitInerval(){
    clearInterval(interval);

    interval = setInterval(run, 2000);
}