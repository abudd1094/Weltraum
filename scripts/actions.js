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

