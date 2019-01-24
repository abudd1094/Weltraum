// for enemy class feed: imgSrc, x, y, width, height, vx, vy, points, shotspeed, damage, canshoot

// Level 1
function spawnEnemy() { //enemy 1 is the basic little guy no shots
  if(frame > 100 && frame % 80 === 0 && frame < 2000) {
    var xcor = Math.random() * (width - 20)
    var enemy = new Enemy('images/enemies/enemy1.png', xcor, -30, 30, 30, 0, 5, 15, 0, 5, false)
    enemies.push(enemy)
  }
}

function spawnEnemy2() { // enemy 2 shoots at a consecutive rate
  if (frame > 700) {  
    if(frame % 110 === 0) {
      var xcor = Math.random() * (width - 20)
      var enemy2 = new Enemy('images/enemies/enemy2.png', xcor, -32, 32, 30, 0, 5, 25, 7, 10, true) // 
      enemies.push(enemy2)
    }
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].canShoot == true && frame % 150 === 0) {
        enemies[i].shoot("yellow", 3) // speed, color, damage
        var enemy2shotsound = new Audio("audio/shot2.mp3")
        enemy2shotsound.volume = 0.2
        enemy2shotsound.play()
      }
    }
  }
}

function spawnEnemy3() { // enemy 3 shoots moving right
  if (frame > 1300) {  
    if(frame % 120 === 0) {
      var xcor = Math.random() * (width - 20)
      var enemy2 = new Enemy('images/enemies/enemy3.png', xcor, -32, 32, 30, 1, 5, 35, 7, 15, true) // 
      enemies.push(enemy2)
    }
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].canShoot == true && frame % 110 === 0) {
        enemies[i].shoot("yellow", 3) // speed, color, damage
        var enemy2shotsound = new Audio("audio/shot2.mp3")
        enemy2shotsound.volume = 0.2
        enemy2shotsound.play()
      }
    }
  }
}

function spawnEnemy4() { // enemy 2 shoots at a consecutive rate
  if (frame > 2000) {  
    if(frame % 100 === 0) {
      var xcor = Math.random() * (width - 20)
      var enemy2 = new Enemy('images/enemies/enemy3.png', xcor, -32, 32, 30, -1, 5, 35, 9, 15, true) // 
      enemies.push(enemy2)
    }
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].canShoot == true && frame % 110 === 0) {
        enemies[i].shoot("green", 5) // speed, color, damage
        var enemy2shotsound = new Audio("audio/shot2.mp3")
        enemy2shotsound.volume = 0.2
        enemy2shotsound.play()
      }
    }
  }
}


