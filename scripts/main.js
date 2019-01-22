var canvas = document.getElementById("gameboard")
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var bg = new Background('images/bg1.jpg', 852, 480, 0, 0, 0, 0.9)
var title = new Title('images/weltraumTitle.png', 326.5, 100, 7, 100)
var mainplayer = new Player('images/spaceship.png', 51.8, 0, width/2 - 25, 510)
var playershot = new Shot(mainplayer.x, mainplayer.y, 4, 10, -2)

//document.getElementById("start-button").onclick = function() {
//  startGame();

var isGameStart = false
var frame = 0

// Main Animation
function updateEverything() {
  bg.update()
  if (isGameStart) {
    frame++
  }
}
function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw(ctx)
  title.draw(ctx, frame)
  mainplayer.draw(ctx)
}


var animationId
function animation(){
  updateEverything()
  drawEverything()
  animationId = window.requestAnimationFrame(animation)
}
animation()

//Movement Keys
window.onkeydown = function(event) {
  event.preventDefault() // stops the button scrolling the page
  if(event.keyCode == 40) { // down
    mainplayer.moveDown()
  } else if(event.keyCode == 38) { // up
    mainplayer.moveUp()  
  } else if(event.keyCode == 39) { // right 
    mainplayer.moveRight()    
  } else if(event.keyCode == 37) { // left
    mainplayer.moveLeft()   
  } else if(event.keyCode == 32) {
    var playershot = new Shot(mainplayer.x + 26, mainplayer.y, 3, 11, -2)
    var actionAnimation = function() {
      playershot.update()
      playershot.draw(ctx)
      window.requestAnimationFrame(actionAnimation)
    }
    actionAnimation()
  }
}
window.onkeyup = function(event) {
  event.preventDefault()
  mainplayer.sx = 51.8;
}

// Menu
document.getElementById("startbutton");
startbutton.onclick = function() {
  isGameStart = true
}

//function startGame() {