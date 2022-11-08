var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  bgImg = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth-1, windowHeight-1);
  database = firebase.database();
  game = new Game();
  game.start();
  
}

function draw() {
  background(bgImg);
}

function windowResized() {
  resizeCanvas(windowWidth-200, windowHeight-200);
}
