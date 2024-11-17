/*
COM3 
tpfinalparte2
Sofia Brizuela
Ada Rojas         
VIDEO : https://youtu.be/DvxtGNt0Sy8
*/
let juego;

function setup() {
  createCanvas(640, 480);
  juego = new Juego(); //se inicia una innstancia del juego 
}

function draw() {
  background(6, 13, 52);
  juego.mostrar();
}
 
function mousePressed() {
    juego.verificarClick(mouseX, mouseY);  //para det  ectar clips del mouse llama a una funcion 
}
   
