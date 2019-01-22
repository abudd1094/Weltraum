// Variables
var canvas = document.getElementById("gameboard")
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var bg = new Background('images/bg1.jpg', 852, 480, 0, 0, 0, 0.9)
var title = new Title('images/weltraumTitle.png', 326.5, 100, 7, 150)

var mainplayer = new Player('images/spaceship.png', 51.8, 0, width/2 - 25, 450)
var playershots = [];
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

function shootEnemy() {
  for (var i = 0; i < enemies.length; i++) {
    for (var j = 0; j < playershots.length; j++) {
      if (enemies[i].y === playershots[j].y) { //correct for detecting more than one pixel , no it's just y
        enemies.splice(i,1)
        playershots.splice(j,1)
        console.log('hit')
        shootEnemy()
        return 
      }
    }
  }
}

// Main Animation
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
  for (var i = 0; i < playershots.length; i++) { //player's shot array
    playershots[i].update();
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
  for (var i = 0; i < playershots.length; i++) { //player's shot array
    playershots[i].draw(ctx);
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
      var playershot = new Shot(mainplayer.x + 26, mainplayer.y, 3, 11, -5)
      playershots.push(playershot)
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
  pornbutton.classList.remove("visible")
  pornbutton.classList.add("hidden")
  bg.vy = 3;
}
var scorebutton = document.getElementById("scorebutton");
scorebutton.onclick = function() {
  scorebutton.classList.remove("visible")
  scorebutton.classList.add("hidden")
}
var pornbutton = document.getElementById("pornbutton");
pornbutton.onclick = function() {
  pornbutton.classList.remove("visible")
  pornbutton.classList.add("hidden")
}