let palavra;
function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["medo", "palmeiras", "maria"];
   return random(palavras);
}

function inicializaCores(){
  background("red");
  fill("white");
  textSize(40);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, width, maximo, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text (texto, 200, 200);

  
  /*if(mouseX < 50){
    let palavra = "m";
    text(palavra, 200, 200);
  } else if(mouseX < 100){
    let palavra = "me";
     text(palavra, 200, 200);
  } else if(mouseX < 150){
    let palavra = "med";
     text(palavra, 200, 200);
  } else if(mouseX < 200){
    let palavra = "medo";
     text(palavra, 200, 200);
  }*/
  
}