let floor;
let table;
let ball;
let score = 0;
let y1 = 0;
let y2 = 0;
let dy1 = 50;
let dy2 = 50;
let x = 0;
let y = 0;
let dx = x + 5;
let dy = y + 5;

function setup() {
  createCanvas(800, 400);
  x = 400;
  y = 200;
  score = 0;
  textSize(40);
  text(score, 400, 20);
}

function preload() {
  // preload() runs once
  floor = loadImage("floor.png");
  table = loadImage("table.png");
  ball = loadImage("ball.png");
}

function draw() {
  floor.resize(800, 400);
  image(floor, 0, 0);
  table.resize(760, 360);
  image(table, 20, 20);
  fill("#FFFFFF");
  ellipse(x, y, 50, 50);
  fill("#FF0000");
  rect(0, y1, 20, 100);
  rect(780, y2, 20, 100);
  fill("#000000");
  textSize(40);
  text(score, 384, 40);
  x = x + dx;
  if (y + 25 > 400 || y - 25 < 0) {
    dy = -dy;
  }
  y = y + dy;
  if (y > y2 && y < y2 + 150 && x > width - 50 && x < width - 40) {
    dx = -dx;
    score = score + 1;
  }

  if (y > y1 && y < y1 + 150 && x < 50 && x > 40) {
    dx = -dx;
    score = score + 1;
  }
  if (y1 < 0) {
    y1 = 0;
  } else if (y1 > 300) {
    y1 = 300;
  }
  if (y2 < 0) {
    y2 = 0;
  } else if (y2 > 300) {
    y2 = 300;
  }
  if (x < 25) {
    x = 400;
    y = 200;
    score = 0;
  }
  if (x > 775) {
    x = 400;
    y = 200;
    score = 0;
  }
}
function keyPressed() {
  if (keyCode == "87") {
    y1 = y1 - dy1;
  } else if (keyCode == "83") {
    y1 = y1 + dy1;
  }
  if (keyCode == UP_ARROW) {
    y2 = y2 - dy2;
  } else if (keyCode == DOWN_ARROW) {
    y2 = y2 + dy2;
  }
}
