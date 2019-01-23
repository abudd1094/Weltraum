class Xplosion {
  constructor(x, y, width, height) {
    this.img = new Image()
    this.img.src 
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  draw(ctx) {
    if (xplode1 == true) {
      ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
  }
  update(frame) {
    if (xplode1 == true) {
      var frame1 = frame
      if (frame1 === frame) {
        this.img.src = 'images/xplosion1/x11.png';
      } else if (frame1 > frame + 1000) {
        this.img.src = 'images/xplosion1/x12.png';
      } else if (frame1 > frame + 2000) {
        this.img.src = 'images/xplosion1/x13.png';
      } else if (frame1 > frame + 3000) {
        this.img.src = 'images/xplosion1/x14.png';
      } else if (frame1 > frame + 4000) {
        this.img.src = 'images/xplosion1/x15.png';
      } else if (frame1 > frame + 5000) {
        this.img.src = 'images/xplosion1/x16.png';
      } else {
        
      }
    }
  }
}