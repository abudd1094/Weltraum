class Powerup {
  constructor(imgSrc, x, y, width, height, vx, vy) { // points are scored for killing, damage is dealt for getting hit by
    this.img = new Image()
    this.img.src = imgSrc
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.vx = vx
    this.vy = vy
  }
  draw(ctx) {
    if (isGameStart == true) {ctx.drawImage(this.img, this.x, this.y, this.width, this.height)}
  }
  update() {
    if (frame > 100) {
      this.y += this.vy
      this.x += this.vx
    } 
  }
}



