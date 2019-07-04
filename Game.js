'use strict';

function Game(canvas) {
  this.player = null; // why null?
  // this.trippyBackground = null;
  this.enemies = [];
  this.puppies = [];
  this.isGameOver = false;
  this.canvas = canvas;
  this.score = 0;
  this.ctx = this.canvas.getContext('2d');
  this.onGameOver = null;
}; 

Game.prototype.startGame = function() {
  // initialise a player and enemies and puppies
  this.trippyBackground = new trippyBackground(this.canvas);
  this.player = new Player(this.canvas);


  var loop = () => {

    var randomNum = Math.round(Math.random() * 2);
    //console.log(randomNum);
    if (randomNum === 0) {
      var imgIndex = 0;
    } else if (randomNum === 1) {
      var imgIndex = 1;
    } else if (randomNum === 2) {
      var imgIndex = 2;
    }

    if(Math.random() > 0.97) {
      var randomX = Math.random() * this.canvas.width - 10;
      var newPuppy = new Puppy(this.canvas, randomX, imgIndex);
      this.puppies.push(newPuppy);
    }

    if(Math.random() > 0.98) {
      var randomX = Math.random() * this.canvas.width - 10;
      var newEnemy = new Enemy(this.canvas, randomX);
      this.enemies.push(newEnemy);
    }
    this.update();
    this.clear();
    this.draw();
    this.checkCollisionPuppy();
    this.checkCollisionEnemy();
    if(!this.isGameOver) {
      window.requestAnimationFrame(loop);
    } else {
      this.onGameOver();
    }
  }
  loop();
};


Game.prototype.update = function() {
  this.trippyBackground.move();
  this.player.move();
  this.enemies.forEach(function(enemy) {
    enemy.move();
  })
  this.puppies.forEach(function(puppy) {
    puppy.move();
  })
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};


Game.prototype.draw = function() {
  this.trippyBackground.draw();
  this.player.draw();
  this.enemies.forEach(function(enemy) {
  enemy.draw();
  })
  this.puppies.forEach(function(puppy) {
    puppy.draw();
  })
};
/*
function changeToBlue() {
  this.player.color = 'blue';
}
*/

Game.prototype.checkCollisionSides = function(player, fallingElement) {
  var topBottom = player.y <= fallingElement.y + fallingElement.width;
  var rightLeft = player.x + player.width >= fallingElement.x;
  var leftRight = player.x <= fallingElement.x + fallingElement.width;
  var bottomTop = player.y + player.height >= fallingElement.y;
  return topBottom && rightLeft && leftRight && bottomTop;
}

Game.prototype.checkCollisionEnemy = function() { // declarar antes para DRY?
  this.enemies.forEach((fallingElement, index) => {

    var livesLeft = document.querySelector('#lives-left');
    livesLeft.innerHTML = 'Lives left: ' + this.player.lives;

    if(this.checkCollisionSides(this.player, fallingElement)) {
      this.enemies.splice(index, 1);
      this.player.lives--;
      this.player.color = 'white';
      setTimeout(() => {
        this.player.color = 'blue';
      }, 100);
      console.log(`Lives left: ${this.player.lives}`);
    if(this.player.lives === 0) {
        this.isGameOver = true;
      }
    }
  })
}

Game.prototype.checkCollisionPuppy = function() {
  this.puppies.forEach((fallingElement, index) => {

    var globalScore = document.querySelector('#global-score');
    globalScore.innerHTML = 'Score: ' + this.score;

    if(this.checkCollisionSides(this.player, fallingElement)) {
      this.puppies.splice(index, 1);
      this.score += 15;
      console.log(`Score: ${this.score}`);
      }
  })
}

Game.prototype.gameOverCallback = function(callback) {
  this.onGameOver = callback;
};

Game.prototype.displayScore = function() {

}







