// Canvas & Background
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

var isGameStart = false
var frame = 0

// Enemies
function spawnEnemy() {
  if(frame > 0 && frame % 100 === 0) {
    var enemy = new Enemy(width/2 - 15, -50, 30, 30, 5, 1);
    enemies.push(enemy)
  }
}

function hasHit(box1, box2) {
  var box1Bottom = box1.x + box1.width
  var box1Left = box1.y + box1.height  
  var box2Bottom = box2.x + box2.width
  var box2Left = box2.y + box2.height  
  
  if(box1Bottom > box2.x && box2Bottom > box1.x && 
    box1Left > box2.y && box2Left > box1.y) return true;
  else return false
}

function shootEnemy() {
  for (var i = 0; i < enemies.length; i++) {
    for (var j = 0; j < bullets.length; j++) {
      if (hasHit(enemies[i], bullets[j])) { 
        enemies.splice(i,1)
        bullets.splice(j,1)
        console.log('hit')
        shootEnemy()
        return 
      }
    }
  }
}

// Animation Render Loop
function updateEverything() {
  if (isGameStart) {
    frame++
  }
  bg.update()
  mainplayer.damage() 
  spawnEnemy()
  for (var i = 0; i < enemies.length; i++) { //enemies array
    enemies[i].update();
  }
  for (var i = 0; i < bullets.length; i++) { //player's shot array
    bullets[i].update();
  }
}
function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw(ctx)
  title.draw(ctx, frame)
  mainplayer.draw(ctx)
  for (var i = 0; i < enemies.length; i++) { //enemies array
    enemies[i].draw(ctx);
  }
  for (var i = 0; i < bullets.length; i++) { //player's shot array
    bullets[i].draw(ctx);
  }
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