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


// PLAYER ATTACKS
function shootEnemy() {
  for (var i = 0; i < enemies.length; i++) {
    for (var j = 0; j < bullets.length; j++) {
      if (hasHit(enemies[i], bullets[j])) { 
        var xplosion1 = new Xplosion(enemies[i].x + 7, enemies[i].y + 10, 32, 32) // XPLOSION 1
        xplosions1.push(xplosion1)
        xplode1 = true;
        mainplayer.score += enemies[i].points
        enemies.splice(i,1)
        bullets.splice(j,1)
      }
    }
  }
}