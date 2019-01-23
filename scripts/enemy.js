// Background Image Constructor

// original square enemy CAN BE REUSED FOR OBSTACLES?
// class Enemy {
//   constructor(x, y, width, height, vy, health) {
//     this.x = x
//     this.y = y
//     this.width = width
//     this.height = height
//     this. vy = vy
//     this.health = health
//   }
//   draw(ctx) {
//     ctx.fillStyle = "blue"
//     ctx.fillRect(this.x, this.y, this.width, this.height)
//   }
//   update(ctx) {
//     if (frame > 100) {
//       this.y += this.vy
//     }
//   }
// }

class Enemy {
  constructor(imgSrc, x, y, width, height, vy) {
    this.img = new Image()
    this.img.src = imgSrc
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.vy = vy
  }
  draw(ctx) {
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
  }
  update(ctx) {
    if (frame > 100) {
      this.y += this.vy
    }
  }}
