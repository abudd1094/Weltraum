// Background Image Constructor
class Background {
  constructor(imgSrc, width, height, x, y, vx, vy) {
    this.img = new Image()
    this.img.src = imgSrc
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x, this.y + this.height, this.width, this.height)
    ctx.drawImage(this.img, this.x, this.y - this.height, this.width, this.height)
  }
  update(ctx) {
    this.x += this.vx
    this.y += this.vy
    if (this.y > this.height) {
      this.y -= this.height;
    }
  }
}

// Basic Image Constructor for Title and Text images
class Basicimage {
    constructor(imgSrc, width, height, x, y) {
    this.img = new Image()
    this.img.src = imgSrc
    this.width = width
    this.height = height
    this.x = x
    this.y = y
  }
}
