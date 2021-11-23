function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(ball.color[2])
  circle(ball.x,ball.y,ball.radius)
  ball.x=ball.x+ball.xspeed
}
var ball={
  x:70,
  y:80,
  radius:25,
  xspeed:7,
  yspeed:8,
  color:["red","blue","green"]

}