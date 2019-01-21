class Player {
  constructor(imgSrc,sx,sy,x,y) {
    this.img = new Image()
    this.img.src = imgSrc
    this.sx = sx
    this.sy = sy
    this.swidth = 25.9
    this.sheight = 38.5
    this.x = x
    this.y = y
    this.width = 50
    this.height = 80
  }
  draw(ctx) {
    // Clip the main spaceship (TODO: check if sy and sheight is correct)
    ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height)
    // ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
  }

  moveLeft(ctx) {
    this.y -= 1;
  }

}
