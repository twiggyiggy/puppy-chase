"use strict";

function Player(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.height = 100;
  this.width = 80;
  this.x = this.canvas.width / 2;
  this.y = this.canvas.height - this.height;
  this.lives = 3;
  this.direction = 0;
  this.speed = 4;
  this.color = 'blue';
  this.img = new Image();
  this.img.src = "./images/shia lebouf.jpg"
}

Player.prototype.move = function() {
  this.x = this.x + this.direction * this.speed;
};

Player.prototype.draw = function() {
  // this.ctx.fillStyle = this.color;
  // this.ctx.fillRect(this.x, this.y, this.width, this.height);
  var ctx = this.ctx;
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
};

Player.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
};
