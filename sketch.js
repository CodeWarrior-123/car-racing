var canvas, backgroundImage;
var p;
var gameState = 0;
var playerCount;
var allPlayers;
var database;
var ref;
var form, player, game;
var cars,car1,car2,car3,car4;
var car1_img,car2_img,car3_img,car4_img,ground_img,track;
var playerRank=0;
var passedFinish;
var gold,silver,bronze;
var finishedPlayers;


function preload(){
  car1_img=loadImage("images/car1.png");
  car2_img=loadImage("images/car2.png");
  car3_img=loadImage("images/car3.png");
  car4_img=loadImage("images/car4.png");
  ground_img=loadImage("images/ground.png");
  track=loadImage("images/track.jpg");
  gold=loadImage("images/gold.png");
  silver=loadImage("images/silver.png");
  bronze=loadImage("images/bronze.png")
}

function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
 
  if(playerCount===4){
    game.update(1);
  }

  if(gameState===1){
    clear();
    game.play();
  }

  if(finishedPlayers===4){
    game.update(2);
  }

  if(gameState===2 && finishedPlayers===4){
    game.displayRank()
  }

 

}
