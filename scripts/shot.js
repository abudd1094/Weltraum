class Shot {
  constructor(x,y,width, height,speed, color, damage) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.speed = speed
    this.color = color
    this.damage = damage
  }
  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  update(ctx) {
    this.y += this.speed
  }
}