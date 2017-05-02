

function setup(){
  createCanvas(640, 480);

}
function tree(x1, y1, angle, iterations){
  if (iterations !== 0){
    var x2 = x1 + (cos(angle) * iterations * 3);
    var y2 = y1 + (sin(angle) * iterations * 3);
    var weight = iterations;
    stroke(0);
    strokeWeight(weight);
    line(x1, y1, x2, y2);
    tree(x2, y2, angle - PI/8, iterations - 1);
    tree(x2, y2, angle + PI/8, iterations - 1);
  }
}

function draw(){
  
  tree(width/2, height * 0.75, -PI/2, 5);
}
