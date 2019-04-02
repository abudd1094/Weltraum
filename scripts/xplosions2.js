// used for player death

class Xplosion22 {
  constructor(x, y, width, height, speed) {
    // this.img = new Image()
    // this.img.src 
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.imgs = []
    this.speed

    for (var i = 0; i <= 7; i++) {
      this.imgs[i] = new Image()
      this.imgs[i].src = `images/xplosion2/x${i}.png`
    }
    this.iImg = 0
  }
  draw(ctx) {
    if (this.iImg < 6) {
      ctx.drawImage(this.imgs[Math.floor(this.iImg)],this.x,this.y,this.width,this.height);
    }
  }
  update() {
    if (this.iImg < 6) {
      this.iImg += this.speed
    }
  }
}