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

var xplode1 = false

// ***** IN GAME INFO ******
var healthdisplay = document.getElementById("healthdisplay")
var playerscore = document.getElementById("playerscore")

// ***** ENEMIES *****
function spawnEnemy() {
  if(frame > 0 && frame % 100 === 0) {
    var xcor = Math.random() * (width - 20)
    var enemy2 = new Enemy('images/enemies/enemy2.png', xcor, -30, 30, 30, 5, 50)
    enemies.push(enemy2)
  }
}

function shootEnemy() {
  for (var i = 0; i < enemies.length; i++) {
    for (var j = 0; j < bullets.length; j++) {
      if (hasHit(enemies[i], bullets[j])) { 
        // var xplosion1 = new Xplosion(bullets[j].x, bullets[j].y, 20, 20) // XPLOSION 1
        // xplosions1.push(xplosion1)
        // xplode1 = true;
        mainplayer.score += enemies[i].points
        enemies.splice(i,1)
        bullets.splice(j,1)
        //setTimeout(xplosions1.pop(), 4000);
        shootEnemy()
        return 
      }
    }
  }
}

// ***** ANIMATION RENDER LOOP *****
function updateEverything() {
  if (isGameStart) {
    frame++
  }
  bg.update()

  mainplayer.damage() // main player items
  healthdisplay.innerHTML = "Lives: " + mainplayer.health;
  playerscore.innerHTML = "Score: " + mainplayer.score;

  spawnEnemy()
  for (var i = 0; i < enemies.length; i++) { // updating enemies array one by one
    enemies[i].update();
  }
  for (var i = 0; i < bullets.length; i++) { // updating player shots one by one
    bullets[i].update();
  }
  // for (var i = 0; i < xplosions1.length; i++) { // updating 1 xplosions one by one
  //   xplosions1[i].update(frame);
  // }
}
function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw(ctx)
  title.draw(ctx, frame)
  mainplayer.draw(ctx)
  for (var i = 0; i < enemies.length; i++) { //drawing enemies array one by one
    enemies[i].draw(ctx);
  }
  for (var i = 0; i < bullets.length; i++) { //player's shot array
    bullets[i].draw(ctx);
  }
  // for (var i = 0; i < xplosions1.length; i++) { // 1 xplosions array
  //   xplosions1[i].draw(ctx);
  // }
}
var animationId
function animation(){
  shootEnemy()
  updateEverything()
  drawEverything()
  animationId = window.requestAnimationFrame(animation)
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
  bg.vy = 3;
}
var scorebutton = document.getElementById("scorebutton");
scorebutton.onclick = function() {
  scorebutton.classList.remove("visible")
  scorebutton.classList.add("hidden")
}