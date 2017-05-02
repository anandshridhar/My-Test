var clock;
function setup() {
  createCanvas(640, 480);
  clock = new Clock(width / 2, height / 2, 100, 100);
}

function Clock(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var ampm = 'AM';
  this.update = function () {
    hours = hour();
    minutes = minute();
    seconds = second();
  }
  this.show = function () {
    fill(0);
    ellipse(this.x, this.y, this.size / 8, this.size / 8);
    for (var i = 0; i < 13; i++) {
      var angle = map(i, 0, 12, -PI / 2, -PI / 2 + 2 * PI);
      textAlign(CENTER);
      if (i != 0) {
        text(i, this.x + this.size * cos(angle), this.y + this.size * sin(angle));
      }
    }
    stroke(0);
    noFill();
    ellipse(this.x, this.y, this.size * 2.5, this.size * 2.5);
    this.update();
    this.hourHandShow();
    this.minHandShow();
    this.secHandShow();
    this.ampmShow();


  }
  this.hourHandShow = function () {
    if (hours >= 12) {
      hours = hours - 12;
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }
    var hoursToSec = hours * 60 * 60 + minutes * 60 + seconds;
    var angle = map(hoursToSec, 0, 60 * 60 * 12, -PI / 2, -PI / 2 + 2 * PI);
    push();
    strokeWeight(5);
    line(this.x, this.y, this.x + (this.size - 50) * cos(angle), this.y + (this.size - 50) * sin(angle));
    pop();
  }
  this.minHandShow = function () {
    var minToSecs = minutes * 60 + seconds;
    // console.log(minutes);
    var angle = map(minToSecs, 0, 60 * 60, -PI / 2, -PI / 2 + 2 * PI);
    push();
    strokeWeight(2);
    line(this.x, this.y, this.x + (this.size - 30) * cos(angle), this.y + (this.size - 30) * sin(angle));
    pop();
  }
  this.secHandShow = function () {

    var angle = map(seconds, 0, 60, -PI / 2, -PI / 2 + 2 * PI);
    line(this.x, this.y, this.x + (this.size - 10) * cos(angle), this.y + (this.size - 10) * sin(angle));
  }
  this.ampmShow = function () {
    text(ampm, this.x, this.y + 50);
  }
}


function draw() {
  background(100);
  clock.show();
}
