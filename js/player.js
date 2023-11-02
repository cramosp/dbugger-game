class Player {
  constructor(selectedCharacter) {
    this.height = 80;
    this.width = 60;
    this.positionX = (myBoardWidth - this.width) / 2;
    this.positionY = 0;
    this.step = 15;

    this.playerElm = document.querySelector(".player");
    this.playerElm.style.width = this.width + "px";
    this.playerElm.style.height = this.height + "px";
    this.playerElm.style.left = this.positionX + "px";
    this.playerElm.style.bottom = this.positionY + "px";

    if (selectedCharacter === "player1") {
      this.playerElm.classList.remove("player2");
      this.playerElm.classList.add("player1");
    } else {
      this.playerElm.classList.remove("player1");
      this.playerElm.classList.add("player2");
    }
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

  shoot(obstaclesArr) {
    const bullet = new Bullet(
      this.playerElm.offsetLeft + this.width / 2,
      this.playerElm.offsetTop
    );
    const bulletIntervalId = setInterval(() => {
      bullet.moveUp();
      obstaclesArr.forEach((obstacleInstance, index) => {
        if (
          obstacleInstance.obstacleElm !== null &&
          bullet.element.offsetLeft >=
            obstacleInstance.obstacleElm.offsetLeft &&
          bullet.element.offsetLeft <
            obstacleInstance.obstacleElm.offsetLeft + obstacleInstance.width &&
          bullet.element.offsetTop > obstacleInstance.obstacleElm.offsetTop &&
          bullet.element.offsetTop <=
            obstacleInstance.obstacleElm.offsetTop + obstacleInstance.height
        ) {
          bullet.element.remove();
          obstacleInstance.removeDOMElement();
          obstaclesArr.splice(index, 1);
          clearInterval(bulletIntervalId);
        } else if (bullet.element.offsetTop < 0) {
          bullet.element.remove();
          clearInterval(bulletIntervalId);
        }
      });
    }, 30);
  }
}
