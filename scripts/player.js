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
    this.health = 3
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
    if (this.xMovement === "right") {
      this.x += lateralSpeed
    }
    else if (this.xMovement === "left") {
      this.x -= lateralSpeed
    }
  }
  moveDown() {
    //if (this.y <= 460) {this.y += 5}
    if (bg.vy > 4) {bg.moveDown()}
  }
  moveLeft() {
    // if (this.x > 0) {this.x -= 15}   
    // this.sx = 0
    this.xMovement = "left"
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
    for (var i = 0; i < enemies.length; i++) {
      if (this.health === 0) {
        //endGame();
      } else if (hasHit(enemies[i], this)) {
        this.health -= 1;
        enemies.splice(i,1);
      }
    }
  }
}
