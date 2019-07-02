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
      <section class="game-screen">
        <canvas width="500" height="500" class="canvas"></canvas>
      </section>
    `)
    
    var canvas = document.querySelector('canvas');
    //var gameInstance = new Game(canvas);

    setTimeout(createGameOverScreen, 3000);
  };

  function createGameOverScreen() {
    var gameOverScreen = buildDom(`
    <section class="game-over-screen">
      <h1>Game Over, the puppies are gone!</h1>
      <button>Back to Main Menu</button>
    </section>  
    `);
    var backToMainButton = document.querySelector('button');
    backToMainButton.addEventListener('click', createSplashScreen);
  };

  createSplashScreen();
};












window.addEventListener('load', main);