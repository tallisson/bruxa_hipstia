let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload() {
  imagemCenario = loadImage('./imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('./imagens/personagem/correndo.png');  
}

function setup() {  
  createCanvas(windowWidth-10, windowHeight-10);  
  cenario = new Cenario(imagemCenario, 2);
  frameRate(40);
  personagem = new Personagem(imagemPersonagem);  
}
 
function draw() {  
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}

window.onload = () => {
  somDoJogo = new Audio('./sons/trilha_jogo.mp3');
  somDoJogo.play();
};