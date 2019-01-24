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
  constructor(imgSrc, x, y, width, height, vx, vy, points, shotspeed, damage, canShoot) { // points are scored for killing, damage is dealt for getting hit by
    this.img = new Image()
    this.img.src = imgSrc
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.vx = vx
    this.vy = vy
    this.points = points
    this.shotspeed = shotspeed
    this.damage = damage
    this.canShoot = canShoot
  }
  draw(ctx) {
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
  }
  update() {
    if (frame > 100) {
      this.y += this.vy
      this.x += this.vx
    } 
  }
  shoot(color, damage) {
    var enemybullet = new Shot(this.x + 15, this.y + 20, 3, 11, this.shotspeed, color, damage)
    enemybullets.push(enemybullet)
  }
}
