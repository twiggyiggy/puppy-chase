'use strict';

function Enemy(canvas, randomX) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 20;
  this.width = 20;
  this.direction = 1;
  this.speed = 4;
  this.color = 'brown';
  this.x = randomX;
  this.y = 0;
  //this.img = new Image();
  //this.img.src = "./images/chiuaua.png"
}

Enemy.prototype.move = function() {
  this.y = this.y + this.direction * this.speed;
}

Enemy.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
  //var ctx = this.ctx;
  //ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

function Puppy(canvas, randomX) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = 20;
  this.width = 20;
  this.direction = 1;
  this.speed = 3;
  this.color = 'green';
  this.x = randomX;
  this.y = 0;
  //this.img = newImage();
  //this.img.src = "./images/hot-dog.png";
}

Puppy.prototype.move = function() {
  this.y = this.y + this.direction * this.speed;
}

Puppy.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
  // later, insert context for image
}