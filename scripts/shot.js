class Shot {
  constructor(x,y,width, height,speed) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.speed = speed
  }
  draw(ctx) {
    ctx.fillStyle = "red"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  update(ctx) {
    this.y += this.speed
  }
}