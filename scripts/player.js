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
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height)
  }
  moveDown(ctx) {
    mainplayer.y += 5
    if (bg.vy > 3)
    bg.moveDown(ctx)
  }
  moveLeft(ctx) {
    mainplayer.x -= 10   
    mainplayer.sx = 0 
  }
  moveRight(ctx) {
    mainplayer.x += 10
    mainplayer.sx = 105.3 
  }
  moveUp(ctx) {
    mainplayer.y -= 5   
    if (bg.vy < 8)
    bg.moveUp(ctx)
  }
  //damage(ctx) {
  //  if (enemy.y == this.y) {
  //    this.health -= 1;
  //  }
//  }
}
