const myBoard = document.getElementById("board");

const myBoardBounds = myBoard.getBoundingClientRect();
const myBoardStyle = window.getComputedStyle(myBoard);
const myBoardBorderWidth = parseInt(myBoardStyle.borderWidth, 10);
const myBoardWidth = myBoardBounds.width - myBoardBorderWidth * 2;

const myBoardBorderHeight = parseInt(myBoardStyle.borderHeight, 10);
const myBoardHeight = myBoardBounds.height - myBoardBorderHeight * 2;

let score = 0;

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
    this.height = 75;
    this.width = 40;
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

class Object {
  constructor() {
    this.height = 30;
    this.width = 30;
    this.positionX = Math.floor(Math.random() * (myBoardWidth - this.width));
    this.positionY = myBoardBounds.height - this.height;
    this.objectElm = null;
    this.objectSpeed = 3;

    this.createDomElement();
  }

  createDomElement() {
    this.objectElm = document.createElement("div");

    this.objectElm.classList.add("object");
    this.objectElm.style.width = this.width + "px";
    this.objectElm.style.height = this.height + "px";
    this.objectElm.style.left = this.positionX + "px";
    this.objectElm.style.bottom = this.positionY + "px";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.objectElm);
  }

  moveDown() {
    this.positionY -= this.objectSpeed;
    this.objectElm.style.bottom = this.positionY + "px";
  }
}

const player = new Player();
const obstaclesArr = [];
const objectsArr = [];

const obstaclesSettings = {
  delayBetweenObstacles: 2000,
};

setInterval(() => {
  const newObstacle = new Obstacle();
  obstaclesArr.push(newObstacle);
}, obstaclesSettings.delayBetweenObstacles);

setInterval(() => {
  obstaclesArr.forEach((obstacleInstance) => {
    obstacleInstance.moveDown();

    if (obstacleInstance.positionY < 75 - obstacleInstance.height) {
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

const objectsSettings = {
  delayBetweenObjects: 2000,
};

setInterval(() => {
  const newObject = new Object();
  objectsArr.push(newObject);
}, objectsSettings.delayBetweenObjects);

setInterval(() => {
  objectsArr.forEach((objectInstance) => {
    objectInstance.moveDown();

    if (objectInstance.positionY < 30 - objectInstance.height) {
      objectInstance.objectElm.remove();
      objectsArr.shift();
    }

    if (
      player.positionX < objectInstance.positionX + objectInstance.width &&
      player.positionX + player.width > objectInstance.positionX &&
      player.positionY < objectInstance.positionY + objectInstance.height &&
      player.positionY + player.height > objectInstance.positionY
    ) {
      objectInstance.markedForRemoval = true;
    }
  });
  for (let i = objectsArr.length - 1; i >= 0; i--) {
    if (objectsArr[i].markedForRemoval) {
      score++;
      updateScore();
      objectsArr[i].objectElm.remove();
      objectsArr.splice(i, 1);
    }
  }
}, 30);

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = "Score: " + score;
}

updateScore();

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
