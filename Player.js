"use strict";

function Player(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.height = 80;
  this.width = 60;
  this.x = this.canvas.width / 2;
  this.y = this.canvas.height - this.height;
  this.lives = 5;
  this.direction = 0;
  this.speed = 5;
  this.color = 'blue';
  this.img = new Image();
  this.img.src = "./images/shia/shia-hands-down-cartoon.png";
}

Player.prototype.move = function() {
  if (this.x < 0) {
    this.x = 0;
    this.direction = 0;
  } else if (this.x + this.width > this.canvas.width) {
    this.x = this.canvas.width - this.width;
    this.direction = 0;
  } else {
    this.x += this.direction * this.speed;
  }

};

Player.prototype.draw = function() {
  //this.ctx.fillStyle = this.color;
  //this.ctx.fillRect(this.x, this.y, this.width, this.height);
  var ctx = this.ctx;
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
};

Player.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
};
