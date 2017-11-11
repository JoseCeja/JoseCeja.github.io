var userSelect;

var compSelect;

var rockImage;
var paperImage;
var scissorsImage;

var centerX;
var centerY;

var gameState = 0;

function preload(){

  rockImage = loadImage("images/rock.png");
  scissorsImage = loadImage("images/scissors.png");
  paperImage = loadImage("images/paper.png");

}

function setup(){

  createCanvas(700,700);
  centerY = height/2;
  centerX = width/2 ;


}

function draw(){
  background(29,202,255);


  if (gameState == 0){

    showStart();

  }else {

    showSelection();
    checkResult();
  }
}


function keyPressed(){

  if(keyCode == 49){
    gameState = 1;
    userSelect = 1;
    compSelect = floor(random(1,4));

  }else if (keyCode == 50) {
    gameState = 1;
    userSelect = 2;
    compSelect = floor(random(1,4));

  }else if (keyCode == 51) {
    gameState = 1;
    userSelect = 3;
    compSelect = floor(random(1,4));

  }

}

function showSelection(){

  if (userSelect == 1){

    image(rockImage, centerX - 250 , centerY);

  }else if (userSelect == 2) {

    image(scissorsImage, centerX - 250, centerY);

  }else if (userSelect == 3) {

    image(paperImage, centerX - 250, centerY);

  }

  if(compSelect == 1){

    image(rockImage, centerX + 50, centerY);

  }else if (compSelect == 2) {

    image(scissorsImage, centerX + 50, centerY);

  }else if (compSelect == 3) {

    image(paperImage, centerX + 50, centerY)

  }
}

function checkResult(){
if (userSelect == compSelect) {
    textSize(50);
    text("ISSA DRAW!", 200, 100);

  }
  else if ((userSelect == 1 && compSelect == 2) || (userSelect == 2 && compSelect == 3) || (userSelect == 3 && userSelect == 1)) {
      textSize(50);
      text("YOU WIN!",200,100);

  }
  else {

    textSize(50);
    text("COMPUTER WINS!",100,100);

  }

}

function showStart(){

    background(29,202,255);

    textSize(50);
    text("ROCK PAPER SCISSORS!", 70, 100);

    image(rockImage, centerX -300, centerY);
    image(paperImage, centerX -120, centerY);
    image(scissorsImage, centerX +50, centerY);


}
