// for enemy class feed: imgSrc, x, y, width, height, vy, points, damage

// Level 1
function spawnEnemy() { //enemy 1 is the basic little guy no shots
  if(frame > 0 && frame % 100 === 0) {
    var xcor = Math.random() * (width - 20)
    var enemy = new Enemy('images/enemies/enemy1.png', xcor, -30, 30, 30, 5, 15, 10, false)
    enemies.push(enemy)
  }
}

function spawnEnemy2() { // enemy 2 shoots at a consecutive rate
  if (frame > 840) {  
    if(frame % 95 === 0) {
      var xcor = Math.random() * (width - 20)
      var enemy2 = new Enemy('images/enemies/enemy4.png', xcor, -32, 32, 30, 5, 25, 10, true) // 
      enemies.push(enemy2)
    }
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].canShoot == true && frame % 60 === 0) {
        enemies[i].shoot("green")
      }
    }
  }
}

function spawnEnemy2() { // enemy 3 shoots at a variable rate
  if (frame > 840) {  
    if(frame % 95 === 0) {
      var xcor = Math.random() * (width - 20)
      var enemy2 = new Enemy('images/enemies/enemy4.png', xcor, -32, 32, 30, 5, 25, 10, true) // 
      enemies.push(enemy2)
    }
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].canShoot == true && frame % 60 === 0) {
        enemies[i].shoot("green")
      }
    }
  }
}

