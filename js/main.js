const myBoard = document.getElementById("board");
const myBoardBounds = myBoard.getBoundingClientRect();
const myBoardStyle = window.getComputedStyle(myBoard);
const myBoardBorderWidth = parseInt(myBoardStyle.borderWidth, 10);
const myBoardWidth = myBoardBounds.width - myBoardBorderWidth * 2;
console.log(myBoardWidth);

class Player {
  constructor() {
    this.height = 70;
    this.width = 40;
    this.positionX = 0; // Fix it.
    this.positionY = 0;
    this.step = 15;

    this.playerElm = document.getElementById("player");
    this.playerElm.style.width = this.width + "px";
    this.playerElm.style.height = this.height + "px";
    this.playerElm.style.left = this.positionX + "px";
    this.playerElm.style.bottom = this.positionY + "px";
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= this.step;
      this.playerElm.style.left = this.positionX + "px";
    }
  }
  moveRight() {
    if (this.positionX < myBoardWidth - this.width) {
      this.positionX += this.step;
      this.playerElm.style.left = this.positionX + "px";
    }
  }
}

class Obstacle {
  constructor() {
    this.height = 30;
    this.width = 30;
    this.positionX = Math.floor(Math.random() * (myBoardWidth - this.width));
    this.positionY = myBoardBounds.height - this.height;
    this.obstacleElm = null;
    this.obstacleSpeed = 5;

    this.createDomElement();
  }

  createDomElement() {
    this.obstacleElm = document.createElement("div");

    this.obstacleElm.classList.add("obstacle");
    this.obstacleElm.style.width = this.width + "px";
    this.obstacleElm.style.height = this.height + "px";
    this.obstacleElm.style.left = this.positionX + "px";
    this.obstacleElm.style.bottom = this.positionY + "px";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.obstacleElm);
  }

  moveDown() {
    this.positionY -= this.obstacleSpeed;
    this.obstacleElm.style.bottom = this.positionY + "px";
  }
}

const player = new Player();
const obstaclesArr = [];

const gameSettings = {
  delayBetweenObstacles: 2000,
};

setInterval(() => {
  const newObstacle = new Obstacle();
  obstaclesArr.push(newObstacle);
}, gameSettings.delayBetweenObstacles);

setInterval(() => {
  obstaclesArr.forEach((obstacleInstance) => {
    obstacleInstance.moveDown();

    if (obstacleInstance.positionY < 0 - obstacleInstance.height) {
      obstacleInstance.obstacleElm.remove();
      obstaclesArr.shift();
    }

    if (
      player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
      player.positionX + player.width > obstacleInstance.positionX &&
      player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
      player.positionY + player.height > obstacleInstance.positionY
    ) {
      location.href = "../html/game-over.html";
    }
  });
}, 30);

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      player.moveLeft();
      break;
    case "ArrowRight":
      player.moveRight();
      break;
  }
});
