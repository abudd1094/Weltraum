// Background Image Constructor
class Enemy {
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
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height)
  }
}