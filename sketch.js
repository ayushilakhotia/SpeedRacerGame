var canvas;
var bgImg;
var database;



function preload() {
  bgImg = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth-1, windowHeight-1);
  //database = firebase.database();
 
  
}

function draw() {
  background(bgImg);
}

function windowResized() {
  resizeCanvas(windowWidth-200, windowHeight-200);
}
