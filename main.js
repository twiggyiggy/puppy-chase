'use strict';

function main() {
  var mainElement = document.querySelector('#site-main');

  function buildDom(html) {
    mainElement.innerHTML=html;
    return mainElement;
  };

  function createSplashScreen() {
    var splashSrceen = buildDom(`
      <section class="splash-screen">
        <h1>PUPPY CHASE 3</h1>
        <button>Chase Some Puppies!</button>
      </section>
    `)  

    var startButton = splashSrceen.querySelector('button');
    startButton.addEventListener('click', createGameScreen);
  };

  function createGameScreen() {
    var gameScreen = buildDom(`
      <section id="score-life">
        <p id="global-score">Score: 432</p>
        <p id="lives-left">Lives left: 4</p>
      </section>
      <section>
        <canvas width="500" height="500"></canvas>
      </section>
    `)

    var canvasElement = gameScreen.querySelector('canvas');
    var gameInstance = new Game(canvasElement);

    gameInstance.gameOverCallback(createGameOverScreen);

    gameInstance.startGame();

    document.addEventListener('keydown', function(event) {
      if(event.key === 'ArrowLeft') {
        gameInstance.player.setDirection(-1);
      } else if(event.key === 'ArrowRight') {
        gameInstance.player.setDirection(1);
      }
    })
    //setTimeout(createGameOverScreen, 3000);
  };

  function createGameOverScreen() {
    var gameOverScreen = buildDom(`
      <section class="game-over-screen">
        <h1>Game Over, the puppies are gone!</h1>
        <button>Back to Main Menu</button>
      </section>
    `);
    var backToMainButton = gameOverScreen.querySelector('button');
    backToMainButton.addEventListener('click', createSplashScreen);
  };

  createSplashScreen();
};

window.addEventListener('load', main);











window.addEventListener('load', main);