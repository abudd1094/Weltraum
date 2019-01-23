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
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height)
  }
  moveDown(ctx) {
    if (this.y <= 460) {this.y += 5}
    if (bg.vy > 3) {bg.moveDown(ctx)}
  }
  moveLeft(ctx) {
    if (this.x > 0) {this.x -= 10}   
    this.sx = 0
  }
  moveRight(ctx) {
    this.x += 10
    this.sx = 105.3 
  }
  moveUp(ctx) {
    if (this.y >= 440) {this.y -= 5}
    if (bg.vy < 8) {bg.moveUp(ctx)}
  }
  damage(ctx) {
    for (var i = 0; i < enemies.length; i++) {
      if (this.health === 0) {
        //endGame();
      } else if (hasHit(enemies[i], this)) {
        this.health -= 1;
        console.log(healthdisplay)
      }
    }
  }
}
