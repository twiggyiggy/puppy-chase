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
        <p id="global-score">Score: 0</p>
        <p id="lives-left">Lives left: 4</p>
      </section>
      <section>
        <canvas width="600" height="600"></canvas>
      </section>
    `)

    var canvasElement = gameScreen.querySelector('canvas');
    var gameInstance = new Game(canvasElement);

    gameInstance.gameOverCallback(createGameOverScreen);

    gameInstance.startGame();

    document.addEventListener('keydown', function(event) {
      if(event.key === 'ArrowLeft') {
        gameInstance.player.setDirection(-1);
        //gameInstance.player.img.src = "./images-shia/shia-going-left.png";
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

  function createInstructionsScreen() {
    var instructionsScreen = buildDom(`
      <section>
        <div id="container">
          <h1>How to play</h1>
          <h2>After a long day on set, nothing brings more joy to the famous actor Shia Labeouf than chasing cute puppies around the park. Help him pet as many as possible while avoiding nasty chihuahuas!
          <section class="game-elements>
            <article class="game-element">
              <img>
              <p>Move around using left and right arrows</p>
            </article class="game-element">
            <article>
              <img>
              <p>Don't let these yappy little rats bite you</p>
            </article class="game-element">
            <article>
              <img>
              <p>Objective: pet the puppies</p>
            </article>
          </section>
        </div>
      </section>
    `)
  }

  createSplashScreen();
};

window.addEventListener('load', main);