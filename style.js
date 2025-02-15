const number= +prompt("yuor number is: ")
if(number>=0 && number<=50){
        document.body.style="background-color: red";
}
if(number>=51 && number<90){
    document.body.style="background-color: blue";
}
if(number>=90 && number<100){
    document.body.style="background-color: green";
}
if(number<0 || number>100){
    document.body.style="background-color: brown";
}