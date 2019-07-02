'use strict';

function Game(canvas) {
  this.player = null;
  this.enemies = [];
  this.puppies = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.onGameOver = null;
};

Game.prototype.startGame = function() {
  // initialise a player on the canvas

  var loop = () => {
    // math random to generate enemies goes in here.
    this.update();
    this.clear();
    //draw
    // check collisions

    console.log('loop');
    window.requestAnimationFrame(loop);
  }
  loop()
};


Game.prototype.update = function() {
  this.player.move();
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw() = function() {
  this.player.draw()
}

/*
Game.prototype.checkCollisions = function() {

};

Game.prototype.checkLives = function() {

};




*/
