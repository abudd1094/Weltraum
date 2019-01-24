class Player {
  constructor(imgSrc,sx,sy,x,y) {
    this.img = new Image()
    this.img.src = imgSrc
    this.sx = sx
    this.sy = sy
    this.swidth = 25.9
    this.sheight = 38.5
    this.x = x
    this.y = y
    this.width = 50
    this.height = 80
    this.health = 100
    this.score = 0
    this.xMovement // could be undefined, "right" or "left"
  }
  draw(ctx) {
    if (this.xMovement === "right") {
      this.sx = 105.3
      // TODO: improve
    }
    else if (this.xMovement === "left") {
      this.sx -= 26
      if (this.sx < 0){
        this.sx = 0
      }
    }
    else {
      this.sx = 51.8
    }
    ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height)
  }
  update() {
    var lateralSpeed = 5
    if (this.x < 0) { // enfore x boundaries
      this.xMovement = undefined
      this.x = 0
    } else if (this.x > 287) {
      this.xMovement = undefined
      this.x = 287
    } else if (this.x >= 0 && this.x <= 337) { // allow movement
      if (this.xMovement === "right") {
        this.x += lateralSpeed
      }
      else if (this.xMovement === "left") {
        this.x -= lateralSpeed
      }
    }
  }
  moveDown() {
    //if (this.y <= 460) {this.y += 5}
    if (bg.vy > 4) {bg.moveDown()}
  }
  moveLeft() {
    // if (this.x > 0) {this.x -= 15}   
    // this.sx = 0
    if(this.x > 7) {this.xMovement = "left"}
  }
  moveRight() {
    // if (this.x < 337) {this.x += 15}
    // this.sx = 105.3 
    this.xMovement = "right"
  }
  stopLateralMove() {
    this.xMovement = undefined
  }
  moveUp() {
    //if (this.y >= 440) {this.y -= 5}
    if (bg.vy < 8) {bg.moveUp()}
  }
  damage() {
    for (var i = enemies.length - 1; i  >= 0; i--) {
      if (this.health < 0) {
        endGame();
      } else if (hasHit(enemies[i], this)) {
        this.health -= enemies[i].damage;
        enemies.splice(i,1);
        var xplosion1 = new Xplosion(mainplayer.x + 12, mainplayer.y + 2, 32, 32, 0.33) // XPLOSION 1 
        xplosions1.push(xplosion1) // why does this not work with enemy i anymore?
        var playerhit = new Audio("audio/death1.mp3")
        playerhit.play()
        return
      }
    }
  }
}
