'use strict';

function Enemy(canvas, randomX, imgIndex) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 40;
  this.width = 50;
  this.direction = 1;
  this.speed = 5;
  this.color = 'red';
  this.x = randomX;
  this.y = 0;
  this.img = new Image();
  this.img.src = "./images/dogs/angry-chiuaua.png"
}

Enemy.prototype.move = function() {
  this.y = this.y + this.direction * this.speed;
}

Enemy.prototype.draw = function() {
  //this.ctx.fillStyle = this.color;
  //this.ctx.fillRect(this.x, this.y, this.width, this.height);
  var ctx = this.ctx;
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

function Puppy(canvas, randomX, imgIndex) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 50;
  this.width = 40;
  this.direction = 1;
  this.speed = 4;
  this.color = 'pink';
  this.x = randomX;
  this.y = 0;
  this.img = new Image();
  this.imgPuppyArr = ["./images/dogs/sausage-dog-resized.png", "./images/dogs/dog.png", "./images/dogs/hot-dog.png"];
  this.img.src = this.imgPuppyArr[imgIndex];
}


Puppy.prototype.move = function() {
  this.y = this.y + this.direction * this.speed;
}

Puppy.prototype.draw = function() {
  //this.ctx.fillStyle = this.color;
  //this.ctx.fillRect(this.x, this.y, this.width, this.height);
  var ctx = this.ctx;
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}