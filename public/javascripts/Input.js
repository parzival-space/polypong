document.addEventListener("keydown", (e) => keyDownHandler(e));
document.addEventListener("keyup", keyUpHandler);

let dirKeys = [];


function keyDownHandler(e) {
  if(e.key == 'a' && !dirKeys.includes("a")) {
    dirKeys.push("a");
    net.sendInput("a");
    game.runData.players.find(p => p.pID == "you").velocity = 1;
  }
  else if(e.key == 'd' && !dirKeys.includes("d")) {
    dirKeys.push("d");
    net.sendInput("d");
    game.runData.players.find(p => p.pID == "you").velocity = -1;
  }
  else if(e.key == 'f' && !dirKeys.includes("f")) {
    dirKeys.push("f");
    net.sendInput("f");
  }
}



function keyUpHandler(e) {
  if(e.key == 'a') {
    dirKeys.splice(dirKeys.indexOf("a"), 1);
    if(dirKeys.length == 0){
      net.sendInput("n");
      game.runData.players.find(p => p.pID == "you").velocity = 0;
      return;
    }
    net.sendInput(dirKeys[0]);
  }
  else if(e.key == 'd') {
    dirKeys.splice(dirKeys.indexOf("d"), 1);
    if(dirKeys.length == 0){
      net.sendInput("n");
      game.runData.players.find(p => p.pID == "you").velocity = 0;
      return;
    }
    net.sendInput(dirKeys[0]);
  }
  else if(e.key == 'f') {
    dirKeys.splice(dirKeys.indexOf("f"), 1);
    if(dirKeys.length == 0){
      net.sendInput("n");
      game.runData.players.find(p => p.pID == "you").velocity = 0;
      return;
    }
    net.sendInput(dirKeys[0]);
  }
}


