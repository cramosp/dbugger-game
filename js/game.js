class Game {
  constructor() {
    this.score = 0;
    this.word = new Word(this.score);
    this.player = new Player();
    this.obstaclesArr = [];
    this.objectsArr = [];
    this.updateScore();
  }

  start() {
    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          this.player.moveLeft();
          break;
        case "ArrowRight":
          this.player.moveRight();
          break;
        case "Space":
          this.player.shoot();
          break;
      }
    });

    this.createObstacle();
    this.initObstacles();

    this.createObject();
    this.initObjects();
  }

  reset() {
    this.score = 0;
    this.word = new Word(this.score);
    this.player = new Player();
    this.updateScore();

    clearInterval(this.obstacleCreateIntervalId);
    clearInterval(this.initObstacleIntervalId);
    clearInterval(this.objectCreateIntervalId);
    clearInterval(this.initObjectIntervalId);

    this.obstaclesArr.forEach((obstacle) => {
      obstacle.obstacleElm.remove();
    });

    this.objectsArr.forEach((object) => {
      object.objectElm.remove();
    });

    this.obstaclesArr = [];
    this.objectsArr = [];
  }

  createObstacle() {
    this.obstacleCreateIntervalId = setInterval(() => {
      const newObstacle = new Obstacle();
      this.obstaclesArr.push(newObstacle);
    }, 2000);
  }

  initObstacles() {
    this.initObstacleIntervalId = setInterval(() => {
      this.obstaclesArr.forEach((obstacleInstance) => {
        obstacleInstance.moveDown();

        if (obstacleInstance.positionY < 75 - obstacleInstance.height) {
          obstacleInstance.obstacleElm.remove();
          this.obstaclesArr.shift();
        }

        if (
          this.player.positionX <
            obstacleInstance.positionX + obstacleInstance.width &&
          this.player.positionX + this.player.width >
            obstacleInstance.positionX &&
          this.player.positionY <
            obstacleInstance.positionY + obstacleInstance.height &&
          this.player.positionY + this.player.height >
            obstacleInstance.positionY
        ) {
          obstacleInstance.obstacleElm.remove();
          this.obstaclesArr.shift();
          const loserOverlay = document.getElementById("game-over-overlay");
          loserOverlay.classList.toggle("show-overlay");
          this.reset();
        }
      });
    }, 30);
  }

  createObject() {
    this.objectCreateIntervalId = setInterval(() => {
      const randomWord = this.word.getRandomWordByScore(this.score);
      const newObject = new Object(randomWord);
      this.objectsArr.push(newObject);
    }, 2000);
  }

  initObjects() {
    this.initObjectIntervalId = setInterval(() => {
      this.objectsArr.forEach((objectInstance) => {
        objectInstance.moveDown();

        if (objectInstance.positionY < 75 - objectInstance.height) {
          objectInstance.objectElm.remove();
          this.objectsArr.shift();
        }

        if (
          this.player.positionX <
            objectInstance.positionX + objectInstance.width &&
          this.player.positionX + this.player.width >
            objectInstance.positionX &&
          this.player.positionY <
            objectInstance.positionY + objectInstance.height &&
          this.player.positionY + this.player.height > objectInstance.positionY
        ) {
          objectInstance.markedForRemoval = true;
        }
      });

      for (let i = this.objectsArr.length - 1; i >= 0; i--) {
        if (this.objectsArr[i].markedForRemoval) {
          if (this.objectsArr[i].word === this.word.selectedWord) {
            this.score++;
            this.word.updateSelectedWord(this.score);
          } else {
            this.score--;
          }

          this.updateScore();
          this.objectsArr[i].objectElm.remove();
          this.objectsArr.splice(i, 1);

          if (this.score === 2) {
            const winnerOverlay = document.getElementById("winner-overlay");
            winnerOverlay.classList.toggle("show-overlay");
            this.reset();
          } else if (this.score < 0) {
            const loserOverlay = document.getElementById("game-over-overlay");
            loserOverlay.classList.toggle("show-overlay");
            this.reset();
          }
        }
      }
    }, 30);
  }

  updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = "Score: " + this.score;
  }
}
