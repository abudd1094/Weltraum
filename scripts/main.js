window.onload = function() {
  var canvas = document.getElementById("gameboard")
  var ctx = canvas.getContext('2d')
  var width = canvas.width
  var height = canvas.height

  var bg = new Background('images/bg1.jpg', 852, 480, 0, 0, 0, 1)
  var title = new Basicimage('images/weltraumTitle.png', 400, 200, 0, 0)

  //document.getElementById("start-button").onclick = function() {
  //  startGame();

  function updateEverything() {
    bg.update()
  }
  function drawEverything() {
    ctx.clearRect(0,0,width,height)
    bg.draw(ctx)
  }

  function animation(){
    updateEverything()
    drawEverything()
    window.requestAnimationFrame(animation)
  }
  animation()

  //function startGame() {

};
