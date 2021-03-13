
var database;

var allPlayers;
var gameState=0;
var playerCount=0;
var player, game, form;

function setup() {
  createCanvas(800,400);


  //connect to firebase
  database = firebase.database();
  game=new Game();
  game.getState();
  game.start();
  
}



function draw() {
 
  if(playerCount == 4){
    game.update(1);
  }
  if(gameState == 1){
    game.play();
  }

}


