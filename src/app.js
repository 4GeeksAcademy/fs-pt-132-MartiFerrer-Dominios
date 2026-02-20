import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronombres = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = ['.es', '.com', '.org'];

for (let a of pronombres){
  for (let b of adj){
    for (let c of noun){
      for (let d of dom){
        console.log(`${a}${b}${c}${d}`)
      }
    }
  }
}