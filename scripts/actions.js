// GENERIC HIT FUNCTION TO COVER FULL OBJECT WIDTH
function hasHit(box1, box2) { 
  var box1Bottom = box1.x + box1.width
  var box1Left = box1.y + box1.height  
  var box2Bottom = box2.x + box2.width
  var box2Left = box2.y + box2.height  
  
  if(box1Bottom > box2.x && box2Bottom > box1.x && 
    box1Left > box2.y && box2Left > box1.y) return true;
  else return false
}

// SCORE
function timeScore() {
  if (isGameStart == true && frame % 100 === 0) {
    mainplayer.score += 1;
  }
}

// COLLISIONS
// function collision() {
//   for (var i = 0; i < enemies.length; i++) {
//     var playerfront = mainplayer.x + mainplayer.width
//     var shipfront = enemies[i].x + enemies[i].width
//     var playerside = mainplayer.y + mainplayer.height
//     var shipside = enemies[i].y + enemies[i].height
//     if (playerfront > enemies[i].x && shipfront > mainplayer.x && 
//       playerside > enemies[i].y && shipside > mainplayer.y) {
//       var xplosion1 = new Xplosion(enemies[i].x + 7, enemies[i].y + 10, 32, 32) // XPLOSION 1
//       xplosions1.push(xplosion1)
//       xplode1 = true;
//       mainplayer.health -= enemies[i].damage
//       enemies.splice(i,1)
//     }
//   }
// }

// POWER UPS
function spaceLettucePowerUp() {
  for (var i = 0; i < powerups.length; i++) {
      if (hasHit(powerups[i], mainplayer)) { 
        powerups.splice(i,1)
        mainplayer.health += 10
        spaceLettucePowerUp()
        var lettucesound = new Audio("audio/misc1.mp3")
        lettucesound.play()
        return 
      }
    }
  }

// SHOOTING MECHANICS
function shootEnemy() {
  for (var i = 0; i < enemies.length; i++) {
    for (var j = 0; j < bullets.length; j++) {
      if (hasHit(enemies[i], bullets[j])) { 
        var xplosion1 = new Xplosion(enemies[i].x + 7, enemies[i].y + 10, 32, 32, 0.33) // XPLOSION 1
        xplosions1.push(xplosion1)
        xplode1 = true;
        mainplayer.score += enemies[i].points
        enemies.splice(i,1)
        bullets.splice(j,1)
        shootEnemy()
        var enemy1hitsound = new Audio("audio/hit2.mp3")
        enemy1hitsound.play()
        return 
      }
    }
  }
}

function shootEnemy2() {
  for (var i = 0; i < bigenemies.length; i++) {
    for (var j = 0; j < bullets.length; j++) {
      if (hasHit(bigenemies[i], bullets[j])) { 
        var xplosion2 = new Xplosion(bigenemies[i].x + 7, bigenemies[i].y + 10, 40, 40, 0.33) // XPLOSION 1
        xplosions2.push(xplosion2)
        xplode1 = true;
        mainplayer.score += bigenemies[i].points
        bigenemies.splice(i,1)
        bullets.splice(j,1)
        shootEnemy()
        var enemy1hitsound = new Audio("audio/hit2.mp3")
        enemy1hitsound.play()
        return 
      }
    }
  }
}

function shootPlayer() {
  for (var i = 0; i < enemybullets.length; i++) {
    if (hasHit(enemybullets[i], mainplayer)) { 
      var xplosion1 = new Xplosion(mainplayer.x + 7, mainplayer.y + 10, 22, 22, 0.5) // XPLOSION 1
      xplosions1.push(xplosion1)
      xplode1 = true;
      mainplayer.health -= 5
      enemybullets.splice(i,1)
      shootPlayer()
      var playerhitsound = new Audio("audio/hit1.mp3")
      playerhitsound.play()
      return 
    }
  }
}


