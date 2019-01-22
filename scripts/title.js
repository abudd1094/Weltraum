// Basic Image Constructor for Title and Text images
class Title {
  constructor(imgSrc, width, height, x, y) {
    this.img = new Image()
    this.img.src = imgSrc
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  draw(ctx, frame) {
    var opacity = 1 - frame / 100
    if (opacity > 0) {
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      ctx.restore()
    }
  }
}