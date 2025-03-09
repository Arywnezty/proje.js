const button =document.querySelector("button")
const container=document.querySelector(".container")
let rotate=0;
function handlebtn(){
    // container.classList.toggle("rotate");
rotate+=180;
container.style=`transform :rotate(${rotate}deg)`;
}

button.onclick=handlebtn;