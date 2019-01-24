// Canvas
var canvas = document.getElementById("gameboard")
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var bg = new Background('images/bg1.jpg', 852, 480, 0, 0, 0, 0.9)
var title = new Title('images/weltraumTitle.png', 326.5, 100, 7, 150)

// Sounds
var themesong = document.getElementById("themesong")
var menusong = document.getElementById("menusong")

var playershotsound = document.getElementById("shot1")
var enemy1hit = document.getElementById("enemy1hit")

// Game State
var mainplayer = new Player('images/spaceship.png', 51.8, 0, width/2 - 25, 450)
var bullets = [];
var enemies = [];
var enemybullets = [];
var xplosions1 = [];

var isGameStart = false
var frame = 0
var gamelevel = 1

var xplode1 = false

// ***** ANIMATION RENDER LOOP *****
// UPDATE
function updateEverything() {
  if (isGameStart) {
    frame++
  }
  bg.update()
  mainplayer.update() // main player items
  mainplayer.damage() 
  timeScore(); // update time based score
  spawnEnemy(); // generate round 1 enemies
  spawnEnemy2(); // generate round 2 enemies
  for (var i = 0; i < enemies.length; i++) { // updating enemies array one by one
    enemies[i].update();
  }
  for (var i = 0; i < bullets.length; i++) { // updating player shots one by one
    bullets[i].update();
  }
  for (var i = 0; i < enemybullets.length; i++) { // updating enemy shots one by one
    enemybullets[i].update();
  }
  for (var i = 0; i < xplosions1.length; i++) { // updating 1 xplosions one by one
    xplosions1[i].update();
  }
}
// DRAW
function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw(ctx)
  title.draw(ctx, frame)
  // Draw HUD if game has started
  if (frame > 0) { // HUD drawing
    ctx.fillStyle = "#FDC60C"
    ctx.font = "20px VT323 "
    ctx.fillText("Health: " + mainplayer.health, 5, 595)
    ctx.fillText("Score: " + mainplayer.score, 240, 595)
    ctx.fillText("Level " + gamelevel, 5, 15)
  }
  mainplayer.draw(ctx) // draw main player
  for (var i = 0; i < enemies.length; i++) { //drawing enemies array one by one
    enemies[i].draw(ctx);
  }
  for (var i = 0; i < bullets.length; i++) { //draw player's shots
    bullets[i].draw(ctx);
  }
  for (var i = 0; i < enemybullets.length; i++) { //draw enemy shots
    enemybullets[i].draw(ctx);
  }
  for (var i = 0; i < xplosions1.length; i++) { // draw xplosions type 1
    xplosions1[i].draw(ctx);
  }
}
// ANIMATE
var animationId
function animation(){
  shootPlayer()
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
      var playerbullet = new Shot(mainplayer.x + 26, mainplayer.y, 3, 11, -5, "red", 0)
      bullets.push(playerbullet)
      playershotsound.play()
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

// Menu
// var mastercontainer = document.getElementById("mastercontainer");
var startbutton = document.getElementById("startbutton");
startbutton.onclick = function() {
  isGameStart = true
  startbutton.classList.remove("visible")
  startbutton.classList.add("hidden")
  musicbutton.classList.remove("visible")
  musicbutton.classList.add("hidden")
  bg.vy = 4;
  if (musicon = true) {themesong.play() }
  // mastercontainer.classList.add("introanimation")
}

var musicon = true
var musicbutton = document.getElementById("musicbutton");
musicbutton.onclick = function() {
  if (musicon = true) {
    musicon = false
  } else {
    musicon = true
  }
}

// Game Over
function endGame() {
  isGameStart = false;
  bg.vy = 0.9
  frame = 0;
  startbutton.classList.remove("hidden")
  startbutton.classList.add("visible")
  musicbutton.classList.remove("hidden")
  musicbutton.classList.add("visible")
  return
}


