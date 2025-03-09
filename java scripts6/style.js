 const mainimage=document.querySelector("#main-image");
 let pervious=document.querySelector(".selected-image");

 function clickHandler(targetNode){
     const main=targetNode.getAttribute("src");
     mainimage.setAttribute("src",main);

     targetNode.classList.add("selected-image");
     pervious.classList.remove("selected-image");
     pervious=targetNode;
     
 }