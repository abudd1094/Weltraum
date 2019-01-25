// for enemy class feed: imgSrc, x, y, width, height, vx, vy, points, shotspeed, damage, canshoot

// LETTUCE
function spaceLettuce() {
  if(frame > 1000 && frame % 500 === 0 && gamelevel >= 2 && isGameStart == true)
    var xcor = Math.random() * (width - 20)
    var lettuce = new Powerup('images/spacelettuce.png', xcor, -30, 30, 30, 0.1, 5.5, 15, 0, 5, false)
    powerups.push(lettuce)
}

// ENEMY SWARMS
function spawnEnemy() { //enemy 1 is the basic little guy no shots
  if(frame > 100 && frame % 70 === 0 && gamelevel < 5  && isGameStart == true) {
    var xcor = Math.random() * (width - 20)
    var enemy = new Enemy('images/enemies/enemy1.png', xcor, -30, 30, 30, 0, 5, 15, 0, 5, false)
    enemies.push(enemy)
  }
}

function spawnEnemy2() { // enemy 2 shoots at a consecutive rate
  if (frame > 600 && frame % 80 === 0 && gamelevel < 5  && isGameStart == true) {  
    if(frame % 100 === 0) {
      var xcor = Math.random() * (width - 20)
      var enemy2 = new Enemy('images/enemies/enemy2.png', xcor, -32, 32, 30, 0, 5, 25, 7, 10, true) // 
      enemies.push(enemy2)
    }
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].canShoot == true && frame % 150 === 0) {
        enemies[i].shoot("yellow", 3) // speed, color, damage
        var enemy2shotsound = new Audio("audio/shot2.mp3")
        enemy2shotsound.volume = 0.1
        enemy2shotsound.play()
      }
    }
  }
}

function spawnEnemy3() { // enemy 3 shoots moving right
  if (gamelevel >= 2 && gamelevel < 5  && isGameStart == true) {  
    if(frame % 110 === 0) {
      var xcor = Math.random() * (width - 20)
      var enemy2 = new Enemy('images/enemies/enemy3.png', xcor, -32, 32, 30, 1, 5, 35, 7, 15, true) // 
      enemies.push(enemy2)
    }
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].canShoot == true && frame % 110 === 0) {
        enemies[i].shoot("yellow", 3) // speed, color, damage
        var enemy2shotsound = new Audio("audio/shot2.mp3")
        enemy2shotsound.volume = 0.1
        enemy2shotsound.play()
      }
    }
  }
}

function spawnEnemy4() { // enemy 4 shoots moving left
  if (gamelevel >= 3 && gamelevel < 5  && isGameStart == true) {  
    if(frame % 100 === 0) {
      var xcor = Math.random() * (width - 20)
      var enemy2 = new Enemy('images/enemies/enemy3.png', xcor, -32, 32, 30, -1, 5, 35, 9, 15, true) // 
      enemies.push(enemy2)
    }
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].canShoot == true && frame % 110 === 0) {
        enemies[i].shoot("yellow", 4) // speed, color, damage
        var enemy2shotsound = new Audio("audio/shot2.mp3")
        enemy2shotsound.volume = 0.2
        enemy2shotsound.play()
      }
    }
  }
}

function spawnEnemy5() { // enemy 5 shoots moving left or right
if (gamelevel >= 3 && frame && gamelevel < 5  && isGameStart == true) {  
  if(frame % 110 === 0) {
    var xcor = Math.random() * (width - 20)
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    var enemy = new Enemy('images/enemies/enemy4.png', xcor, -32, 40, 40, plusOrMinus, 6, 35, 9, 15, true) // 
    bigenemies.push(enemy)
  }
  for (var i = 0; i < bigenemies.length; i++) {
    if (bigenemies[i].canShoot == true && frame % 100 === 0) {
      bigenemies[i].shoot("#00FFFF", 7) // speed, color, damage
      var enemyshotsound = new Audio("audio/shot2.mp3")
      enemyshotsound.volume = 0.2
      enemyshotsound.play()
      }
    }
  }
}

var trump = false
function trumpAlert() {
  if (gamelevel === 4 && !trump) {
    trump = true
    var sanders = new Audio("audio/sanders.mp3")
    sanders.play()
  }
}
function spawnEnemy6() { // enemy 6 is Trump
  if (gamelevel === 4  && isGameStart == true) {  
    if(frame % 80 === 0) {
      var xcor = Math.random() * (width - 20)
      var plusOrMinus = Math.random() < 0.5 ? -0.2 : 0.2;
      var enemy = new Enemy('images/enemies/trump.png', xcor, -32, 60, 40, plusOrMinus, 6, 35, 9, 15, true) // 
      bigenemies.push(enemy)
    }
    for (var i = 0; i < bigenemies.length; i++) {
      if (bigenemies[i].canShoot == true && frame % 70 === 0) {
        bigenemies[i].shoot("#00FFFF", 7) // speed, color, damage
        var enemyshotsound = new Audio("audio/trumpbing1.mp3")
        enemyshotsound.volume = 0.1
        enemyshotsound.play()
        }
      }
    }
  }

  function spawnEnemy7() { // enemy 7 is also Trump
    if (gamelevel === 4  && isGameStart == true) {  
      if((frame + 50) % 80 === 0) {
        var xcor = Math.random() * (width - 20)
        var plusOrMinus = Math.random() < 0.5 ? -0.2 : 0.2;
        var enemy = new Enemy('images/enemies/trump.png', xcor, -32, 60, 40, plusOrMinus, 6, 35, 9, 15, true) // 
        bigenemies.push(enemy)
      }
      for (var i = 0; i < bigenemies.length; i++) {
        if (bigenemies[i].canShoot == true && frame % 80 === 0) {
          bigenemies[i].shoot("#00FFFF", 7) // speed, color, damage
          var enemyshotsound = new Audio("audio/trumpbong1.mp3")
          enemyshotsound.volume = 0.1
          enemyshotsound.play()
          }
        }
      }
    }


    // Break

    
    
