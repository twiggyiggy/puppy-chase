#Puppy Chase

##Description
There's nothing Suzy ratcliff loves more than petting puppies. Luckily for her, the park nearby is full of them.
While running through the park, by moving left and right she will try to catch as many puppies as possible while dodging angry dogs coming
in her direction from above.

##MVP (DOM - CANVAS)
MVP definition: There are 4 screens: splash, game, game-over, and instructions.
4 contructor functions: game, player, enemy, puppy.
The lives and score need to be updated based on event.
On collision with a puppy - gain points, on collision with an angry dog (enemy) - lose a life.
Game over condition - when run out of lives, game over.
Can restart game.

##Backlog
- Moving background
- Add countdown timer
- Next level - faster puppies!
- Next level - storm
- Sprite animations
- Audio effects on events
- Bg music
- instructions screen

##Data structure
Classes + properties + methods:
- Player: x, y, direction, color, speed, width, height, lives, ctx, canvas, move(), draw(), updateLives();
- Puppy: x, y, direction, color, speed, width, height, ctx, canvas, move(), draw(), eliminatePuppy();
- Enemy: x, y, direction, color, speed, width, height, ctx, canvas, move(), draw(), eliminateEnemy();
- Game: player, enemies, puppies, isGameOver, score, checkLives(), 
checkCollisions(), startGame(), clear(), update(), draw()

##States y States Transitions

-Splash Screen - buttons: start
-Game Screen
-Game-over Screen - buttons: main menu


##Task
1. Bootstrap & setup
2. Add logic + test
3. Add backlog features

##Links
Link url

#Git
- Deploy Repo Link
https://twiggyiggy.github.io/puppy-chase/