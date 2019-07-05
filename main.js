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
        <div class="container">
          <img class="shia-with-puppy" src="./images/shia/shia-with-puppy.png">
          <h1 class="game-title">Shia Labeouf<br>Chases Puppies</h1>
          <button id="btn-play" class="blink_me">Play</button>
          <button id="btn-instructions" class="blink_me">How to Play</button>
        </div>
      </section>
    `)  

    var startButton = splashSrceen.querySelector('#btn-play');
    startButton.addEventListener('click', createGameScreen);
  };

  function createGameScreen() {
    var gameScreen = buildDom(`
      <section class="game-screen">
        <section>
          <canvas width="600" height="600"></canvas>
        </section>
        <section id="score-life">
          <h2 id="global-score">Score: 0</h2>
          <h2 id="lives-left">Lives left: 5</h2>
        </section>
      </screen>
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
    //setTimeout(createGameOverScreen, 1000);
  };

  function createGameOverScreen() {
    var gameOverScreen = buildDom(`
      <section class="game-over-screen">
        <div class="container">
          <h1>Game Over, Baby!</h1>
          <h2 id="final-score">Your score is: 1325</h2>
          <h3>Shia has taken too many hits from those damn chihuahuas. Looks like we have to call it a day, but we'll be back for more puppies!</h3>
          <button id="btn-main" class="blink_me">Back to Menu</button>
        </div>
      </section>
    `);
    var backToMainButton = gameOverScreen.querySelector('#btn-main');
    backToMainButton.addEventListener('click', createSplashScreen);

    var finalScore = gameOverScreen.querySelector('#final-score');
    finalScore.innerHTML = 'Your score is: ' + this.score;
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