const myBoard = document.getElementById("board");

const myBoardBounds = myBoard.getBoundingClientRect();
const myBoardStyle = window.getComputedStyle(myBoard);
const myBoardBorderWidth = parseInt(myBoardStyle.borderWidth, 10);
const myBoardWidth = myBoardBounds.width - myBoardBorderWidth * 2;

const myBoardBorderHeight = parseInt(myBoardStyle.borderHeight, 10);
const myBoardHeight = myBoardBounds.height - myBoardBorderHeight * 2;

let score = 0;

const colors = ["yellow", "red", "blue", "pink", "green"];
const numbers = ["four", "six", "nine", "three", "eight"];
const food = ["banana", "milk", "apple", "burger", "biscuit"];

let selectedWord;

function getRandomWordByScore() {
  if (score <= 5) {
    return colors[Math.floor(Math.random() * colors.length)];
  } else if (score <= 10) {
    return numbers[Math.floor(Math.random() * numbers.length)];
  } else {
    return food[Math.floor(Math.random() * food.length)];
  }
}

function updateSelectedWord() {
  selectedWord = getRandomWordByScore();
  const scoreElement = document.getElementById("word");
  scoreElement.innerText = selectedWord;
}

updateSelectedWord();

class Player {
  constructor() {
    this.height = 100;
    this.width = 80;
    this.positionX = (myBoardWidth - this.width) / 2;
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
  constructor(word) {
    this.word = word;
    this.height = 75;
    this.width = 40;
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

    let imageElm = document.createElement("img");
    switch (this.word) {
      case "blue":
        imageElm.src = "./images/blueworm.jpg";
        break;
      case "green":
        imageElm.src = "./images/greenworm.jpg";
        break;
      case "pink":
        imageElm.src = "./images/pinkworm.jpg";
        break;
      case "red":
        imageElm.src = "./images/redworm.jpg";
        break;
      case "yellow":
        imageElm.src = "./images/yellowworm.jpg";
        break;
    }

    this.objectElm.appendChild(imageElm);

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
      console.log("game over"); // change this to an overlay
    }
  });
}, 30);

const objectsSettings = {
  delayBetweenObjects: 2000,
};

setInterval(() => {
  const randomWord = getRandomWordByScore();
  const newObject = new Object(randomWord);
  objectsArr.push(newObject);
}, objectsSettings.delayBetweenObjects);

setInterval(() => {
  objectsArr.forEach((objectInstance) => {
    objectInstance.moveDown();

    if (objectInstance.positionY < 75 - objectInstance.height) {
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
      if (objectsArr[i].word === selectedWord) {
        score++;
        updateSelectedWord();
      } else {
        score--;
      }

      updateScore();
      objectsArr[i].objectElm.remove();
      objectsArr.splice(i, 1);

      if (score === 2) {
        const overlay = document.getElementById("winner-overlay");
        overlay.classList.toggle("show-overlay");
      } else if (score < 0) {
        console.log("you won"); // change this to an overlay
      }
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
