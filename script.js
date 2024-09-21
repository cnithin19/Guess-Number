const number=document.getElementById("number");
const result=document.getElementById("result");



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  let x=Math.floor(getRandomArbitrary(0,100));
// console.log(x)
// console.log(result.value)


// document.getElementById(btn).addEventListener("click",function(){
//   if(number.value>x){
//     result.innerHTML="Ohh... Your number is greater..."
//   }else if(number.value==x){
//     result.innerHTML="WOW!!! You Guessed it right..."
//   }else{
//     result.innerHTML="Ohh... Your number is smaller..."
//   }
// })

let count=0;
function checkNumber(){
    count++;
    let y=number.value;
    if(y>x){
        result.innerHTML="Ohh... Your number is greater..."
      }else if(y==x){
        result.innerHTML="WOW!!! You Guessed it right..."
      }else{
        result.innerHTML="Ohh... Your number is smaller..."}
        result.innerHTML+=`Guess Count : ${count}`
}
