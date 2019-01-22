// Background Image Constructor
class Enemy {
  constructor(x, y, width, height, vy) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this. vy = vy
  }
  draw(ctx) {
    ctx.fillStyle = "blue"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  update(ctx) {
    if (frame > 100) {
      this.y += this.vy
    }
  }
}