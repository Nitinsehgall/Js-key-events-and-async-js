
//generate a random color
const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
color+= hex[Math.floor(Math.random()*16)]
    }
return color;
}

console.log(randomColor());



let btnStart=document.querySelector('#Start');
let btnStop=document.querySelector('#Stop');
let intervalId;
const StartChangingColor=function(){
 intervalId=setInterval(colorChange,1000)
function colorChange(){

    document.body.style.backgroundColor=randomColor();
}
}

const stopChangingColor=function(){
clearInterval(intervalId)
  
}


btnStart.addEventListener('click',StartChangingColor);


btnStop.addEventListener('click',stopChangingColor)

