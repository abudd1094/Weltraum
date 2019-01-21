var canvas = document.getElementById("gameboard")
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var bg = new Background('images/bg1.jpg', 852, 480, 0, 0, 0, 0.9)
var title = new Title('images/weltraumTitle.png', 326.5, 100, 7, 100)
var mainplayer = new Player('images/spaceship.png', 51.8, 0, width/2 - 25, 510)

//document.getElementById("start-button").onclick = function() {
//  startGame();

function updateEverything() {
  bg.update()
}
function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw(ctx)
  title.draw(ctx)
  mainplayer.draw(ctx)
}

function animation(){
  updateEverything()
  drawEverything()
  window.requestAnimationFrame(animation)
}
animation()

//Movement Keys
window.onkeydown = function(event) {
  event.preventDefault() // stops the button scrolling the page
  if(event.keyCode == 40) { // down
    mainplayer.y += 10
  } else if(event.keyCode == 38) { // up
    mainplayer.y -= 10   
  } else if(event.keyCode == 39) { // right 
    mainplayer.x += 10
    mainplayer.sx = 105.3    
  } else if(event.keyCode == 37) { // left
    mainplayer.x -= 10   
    mainplayer.sx = 0     
  } 
}

window.onkeyup = function(event) {
  event.preventDefault()
  mainplayer.sx = 51.8;
}

//function startGame() {


