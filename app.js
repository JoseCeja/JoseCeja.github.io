var userSelect;

var compSelect;

function setup(){

  createCanvas(700,700);

}

function draw(){

  background(29,202,255);

}

function preload(){

  rockImage = loadImage("images/rock.png");
  scissorImage = loadImage("images/paper.png");
  paperImage = loadImage("images/paer.png");

}

function keyPressed(){

  if(keyCode == 49){

    userSelect = 1;
    compSelect = floor(random(1,4));

  }else if (keyCode == 50) {

    userSelect = 2;
    compSelect = floor(random(1,4));

  }else if (keyCode == 51) {

    userSelect = 3;
    compSelect = floor(random(1,4));

  }

}

function showSlection(){

  if (userSelect == 1){

    image(rockImage, centerX + 50 , centerY);

  }else if (userSelect == 2) {

    image(scissorImage, centerX + 50, centerY);

  }else if (userSelect == 3) {

    image(paperImage, centerX + 50, centerY);

  }

  if(compSelect == 1){

    image(rockImage, centerX + 50, centerY);

  }else if (compSelect == 2) {

    image(scissorImage, centerX + 50, centerY);

  }else if (compSelect == 3) {

    image(paperImage, centerX + 50, centerY)

  }
}
