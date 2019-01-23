// Level 1
function spawnEnemy() { //enemy 1 is the basic little guy no shots
  if(frame > 0 && frame % 100 === 0) {
    var xcor = Math.random() * (width - 20)
    var enemy2 = new Enemy('images/enemies/enemy1.png', xcor, -30, 30, 30, 5, 20, 10)
    enemies.push(enemy2)
  }
}

