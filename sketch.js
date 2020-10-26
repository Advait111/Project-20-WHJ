var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, 100, 200);
  speed = random(55, 90);
  weight = random(400, 1500)
  car.velocityX = speed;
  car.depth = wall.depth + 1

  deformation = (0.5*weight*speed*speed)/22500
}

function draw() {
  background("black");  

  if(wall.x - car.x < (wall.width + car.width)/2 
  && car.x - wall.x < (wall.width + car.width)/2
  && wall.y - car.y < (wall.height + car.height)/2
  && car.y - wall.y < (wall.height + car.height)/2)
  {
      if(deformation < 100)
      {
          car.shapeColor = "green";
      }

      if(deformation > 100 && deformation < 180)
      {
          car.shapeColor = "orange";
      }

      if(deformation > 180)
      {
          car.shapeColor = "red";
      }

      car.velocityX = 0
  }
  else
  {
      wall.shapeColor = "grey";
      car.shapeColor = "white";
  } 

  drawSprites();
}