'use strict';

function trippyBackground(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = 0;
  this.y = 0;
  this.speed = -1;
  //this.velocity = 0;
  //this.direction = 10;
  this.img = new Image();
  this.img.src = "./images/backgrounds/roa2-inf.jpg";
  this.width = this.img.width;
  this.height = this.img.height;
}

trippyBackground.prototype.move = function() {
  this.y += this.speed;
  this.y %= this.canvas.height;
}

trippyBackground.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height); 
  if (this.speed < 0) {
    this.ctx.drawImage(this.img, 0, this.y + this.img.height);
  }
}




