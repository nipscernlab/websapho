document.addEventListener("DOMContentLoaded",function(){window.addEventListener("scroll",function(){const a=document.querySelector(".top");window.pageYOffset>window.innerHeight?(a.style.opacity="1",a.style.pointerEvents="auto"):(a.style.opacity="0",a.style.pointerEvents="none"),window.pageYOffset>50&&(a.style.opacity="1",a.style.pointerEvents="auto")}),document.querySelector(".top").addEventListener("click",function(a){a.preventDefault();const b=document.querySelector("body");b.scrollIntoView({behavior:"smooth",block:"start"})})});