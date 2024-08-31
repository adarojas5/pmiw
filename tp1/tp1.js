/*youtube: https://youtu.be/tEOUP_6Z1gQ
 Rojas Ada
 COM3
 TP1 (tp4), p5.js */


//DECLARACIONES DE VARIABLES
let cantY = 10; //define el num de filas y columnas de cuadricula
let cantX = 10;
let estado = 0;
let  contador = 0;// contador de fotogramas



function preload () {// para cargar una imagen antes de ejecutarse
  img1=loadImage('data/foto42.png');
}


function setup() {
  createCanvas (800, 400);// tamaño de la ventana 800 de ancho 400 de alto
}


function draw() {
  background(0);//fondo negro
  image (img1, 0, 0, width/2, height);// imagen ocupando mitad izq
  dibujo();// funcion personalizada
  console.log ("estado="+ estado); //imprime el estado actual en la consola
}


function dibujo() {
  let modY = 400/cantY;//calculan la altura (modY) y el  ancho(modX) de las celdas de la cuadricula
  let modX = 400/cantX;//

  for ( let j=0; j<cantY; j++) { // dos bucles. PARA LAS FILAS
    for ( let i=0; i<cantX; i++) {// PARA LAS COLUMNAS

      if  ( ( i+j)%2==0) {//  alterna los colores de relleno entre negro y blanco para crear un patron de tablero de ajedrez
        fill (0);// lo determina si la suma de los indices de la fila y la columna es par la celda se pinta de negro.
      } else {
        fill (255);// si es impar, de blanco
      }

      let despX = 0; // desclazamiento horizontal
      if ( j%1==0 ) {
        despX = (frameCount* 0.1)%modX*10;//depende de un numero de fotogramas  multiplicado por un factor para controñar su velocidad,
        //el (%modX) asegura desplazamiento dentro del ancho
      }

// dependiendo del valor del estado el comportamiento del dibujo cambia 
 
      if ( estado == 1 ) { //pantalla 1
        contador++;
        if ( contador>=0 ) {
          // cambio de estado:
          //del estado 1  a  2
          estado++;
        }
      } else if ( estado == 2) {
        //pantalla 2, se dibuja 
        rect ( 400+i*modX+despX, j*modY, modX, modY);
        ellipse (400+i*modX+modX/2, j*modY+modY/2, random(20), 20);
      }
    }
  }
}

function mousePressed() { // se ejecuta cuando se hace clic con el mouse
  if (mouseActivado()) {
    estado++;
    if (estado > 3) {
      estado = 1;
    }
  }
}

function mouseActivado() {  
  // verifica que el mouse esté dentro de la mitad derecha de la ventana
  return mouseX >= width / 2 && mouseX < width && mouseY >= 0 && mouseY < height    
}
