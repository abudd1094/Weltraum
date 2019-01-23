// Canvas
var canvas = document.getElementById("gameboard")
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var bg = new Background('images/bg1.jpg', 852, 480, 0, 0, 0, 0.9)
var title = new Title('images/weltraumTitle.png', 326.5, 100, 7, 150)

// Game State
var mainplayer = new Player('images/spaceship.png', 51.8, 0, width/2 - 25, 450)
var bullets = [];
var enemies = [];
var xplosions1 = [];

var isGameStart = false
var frame = 0
var gamelevel = 1

var xplode1 = false

// ***** IN GAME INFO ******
var lives = new Hud("Lives: " + mainplayer.health, 8, 590)
var score = new Hud("Score: " + mainplayer.score, 290, 592)
var level = new Hud("Level " + gamelevel, 8, 15)

// ***** ANIMATION RENDER LOOP *****
function updateEverything() {
  if (isGameStart) {
    frame++
  }
  bg.update()
  mainplayer.update()
  
  mainplayer.damage() // main player items
  timeScore();

  spawnEnemy() // generate basic enemies, move to enemy generator
  for (var i = 0; i < enemies.length; i++) { // updating enemies array one by one
    enemies[i].update();
  }
  for (var i = 0; i < bullets.length; i++) { // updating player shots one by one
    bullets[i].update();
  }
  for (var i = 0; i < xplosions1.length; i++) { // updating 1 xplosions one by one
    xplosions1[i].update();
  }
}
function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw(ctx)
  title.draw(ctx, frame)

  lives.draw(ctx) // ?????? WHY ARENT THEY UPDATING????
  score.draw(ctx)
  level.draw(ctx)

  mainplayer.draw(ctx)
  for (var i = 0; i < enemies.length; i++) { //drawing enemies array one by one
    enemies[i].draw(ctx);
  }
  for (var i = 0; i < bullets.length; i++) { //player's shot array
    bullets[i].draw(ctx);
  }
  for (var i = 0; i < xplosions1.length; i++) { // 1 xplosions array
    xplosions1[i].draw(ctx);
  }
}
// ANIMATION LOOP
var animationId
function animation(){
  shootEnemy()
  updateEverything()
  drawEverything()
  // setTimeout(() => {
    animationId = window.requestAnimationFrame(animation)
  // }, 100)
}
animation()




// Player Movements
window.onkeydown = function(event) {
  event.preventDefault() // stops the button scrolling the page
  if (frame > 0) {
    if(event.keyCode == 40) { // down
      mainplayer.moveDown()
    } else if(event.keyCode == 38) { // up
      mainplayer.moveUp()  
    } else if(event.keyCode == 39) { // right 
      mainplayer.moveRight()    
    } else if(event.keyCode == 37) { // left
      mainplayer.moveLeft()   
    } else if(event.keyCode == 32) {
      var playerbullet = new Shot(mainplayer.x + 26, mainplayer.y, 3, 11, -5)
      bullets.push(playerbullet)
    }
  }
} 
window.onkeyup = function(event) {
  event.preventDefault()
  mainplayer.sx = 51.8;
  if (frame > 0) {
     if(event.keyCode == 39 || event.keyCode == 37) { // right or left
      mainplayer.stopLateralMove();
    }
  }
}

// Game Over
// function endGame() {
//   isGameStart = false;
//   (function() {console.log('end game')})()
//   bg.vy = 0.9
//   frame = 0;
// }

// Menu
var startbutton = document.getElementById("startbutton");
startbutton.onclick = function() {
  isGameStart = true
  startbutton.classList.remove("visible")
  startbutton.classList.add("hidden")
  scorebutton.classList.remove("visible")
  scorebutton.classList.add("hidden")
  // playerscore.classList.remove("hidden")
  // playerscore.classList.add("visible")
  // healthdisplay.classList.remove("hidden")
  // healthdisplay.classList.add("visible")
  // currentlevel.classList.remove("hidden")
  // currentlevel.classList.add("visible")
  bg.vy = 4;
}
var scorebutton = document.getElementById("scorebutton");
scorebutton.onclick = function() {
  scorebutton.classList.remove("visible")
  scorebutton.classList.add("hidden")
}

