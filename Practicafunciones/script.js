/* funcion que concatena nombre y apellido y saluda */

 let result = '';
const button = document.querySelector(".btn");
const full = document.querySelector(".full");

full.style.color = 'white';
function sumando(name,lastName){
    result = name + ' ' +lastName ;
}


button.onclick = function() {
    for (i=0; i<=5;i++){
  button.style.backgroundcolor = 'red';
  button.style.justifyContent = 'center';
  sumando(prompt ("enter your name"),prompt("enter your last name"));
  alert ("Hello dear " + result + " greetings for your cooperation");
  if(i==5){
    full.style.color = 'red';
    full.style.backgroundcolor = 'brown'; 
}}}
 



