class Game {
  constructor() {
    this.score = 0;
    this.word = new Word(this.score);
    this.selectedCharacter = "player1";
    this.player = new Player(this.selectedCharacter);
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
          this.player.shoot(this.obstaclesArr);
          break;
      }
    });

    this.createObstacle();
    this.initObstacles();

    this.createObject();
    this.initObjects();
  }

  changePlayer(selectedCharacter) {
    this.selectedCharacter = selectedCharacter;
    this.player = new Player(this.selectedCharacter);
  }

  reset() {
    this.score = 0;
    this.word = new Word(this.score);
    this.player = new Player(this.selectedCharacter);
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
      this.obstaclesArr.forEach((obstacleInstance, index) => {
        if (obstacleInstance.obstacleElm !== null) {
          obstacleInstance.moveDown();

          if (
            this.player.positionX <
              obstacleInstance.positionX + obstacleInstance.width &&
            this.player.positionX + this.player.width >
              obstacleInstance.positionX &&
            this.player.positionY <
              obstacleInstance.positionY + obstacleInstance.height &&
            this.player.positionY + this.player.height >
              obstacleInstance.positionY &&
            obstacleInstance.markedForRemoval !== true
          ) {
            obstacleInstance.removeDOMElement();
            this.obstaclesArr.splice(index, 1);
            const loserOverlay = document.getElementById("game-over-overlay");
            loserOverlay.classList.toggle("show-overlay");
            this.reset();
          } else if (
            obstacleInstance.positionY <
            this.player.height - obstacleInstance.height
          ) {
            obstacleInstance.removeDOMElement();
            this.obstaclesArr.splice(index, 1);
          }
        }
      });

      this.obstaclesArr = this.obstaclesArr.filter((obstacleInstance) => {
        return obstacleInstance.obstacleElm !== null;
      });
    }, 30);
  }

  createObject() {
    this.objectCreateIntervalId = setInterval(() => {
      const randomWord = this.word.getRandomWordByScore(this.score);
      const newObject = new Object(randomWord);
      this.objectsArr.push(newObject);
    }, 1500);
  }

  initObjects() {
    this.initObjectIntervalId = setInterval(() => {
      this.objectsArr.forEach((objectInstance, index) => {
        objectInstance.moveDown();

        if (
          objectInstance.positionY <
          this.player.height - objectInstance.height
        ) {
          objectInstance.removeDOMElement();
          this.objectsArr.splice(index, 1);
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
          objectInstance.removeDOMElement();

          if (objectInstance.word === this.word.selectedWord) {
            this.score++;
            this.word.updateSelectedWord(this.score);
          } else {
            this.score--;
          }

          this.updateScore();
          this.objectsArr.splice(index, 1);

          if (this.score === 6) {
            const winnerOverlay = document.getElementById("winner-overlay");
            winnerOverlay.classList.toggle("show-overlay");
            this.reset();
          } else if (this.score < 0) {
            const loserOverlay = document.getElementById("game-over-overlay");
            loserOverlay.classList.toggle("show-overlay");
            this.reset();
          }
        }
      });

      this.objectsArr = this.objectsArr.filter((objectInstance) => {
        return objectInstance.objectElm !== null;
      });
    }, 30);
  }

  updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = "Score: " + this.score;
  }
}
