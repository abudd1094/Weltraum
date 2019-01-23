// Level 1
function spawnEnemy() { //enemy 2 is the basic little guy
  if(frame > 0 && frame % 100 === 0) {
    var xcor = Math.random() * (width - 20)
    var enemy2 = new Enemy('images/enemies/enemy1.png', xcor, -30, 30, 30, 5, 50, 5)
    enemies.push(enemy2)
  }

}

