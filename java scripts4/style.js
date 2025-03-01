let d="";
let lowercase=false;
let uppercase=false;
for(let i=0 ; i<=6 ; i++){
let result =Math.floor(Math.random()*2);
if(result==0){
    let  b=Math.floor(Math.random()*26+97);
   let c=String.fromCharCode(b);
   d+=c;
   lowercase=true;
}else{
    let b=Math.floor(Math.random()*26+65);
    let c=String.fromCharCode(b);
    d+=c;
    uppercase=true;
}
}
console.log(d);