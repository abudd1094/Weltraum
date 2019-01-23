class Hud {
  constructor(text, x, y) {
    this.text = text
    this.x = x
    this.y = y
  }
  draw(ctx) {
    if (frame > 0) {
      ctx.fillStyle = "white"
      ctx.fillText(this.text, this.x, this.y)
    }
  }
}