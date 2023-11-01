class Player {
  constructor() {
    this.height = 100;
    this.width = 60;
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

  shoot(obstaclesArr) {
    console.log(this.playerElm.offsetWidth);
    const bullet = new Bullet(
      this.playerElm.offsetLeft + this.width / 2,
      this.playerElm.offsetTop
    );

    const bulletIntervalId = setInterval(() => {
      bullet.moveUp();

      obstaclesArr.forEach((obstacleInstance) => {
        if (bullet.bulletElm.offsetTop < 0) {
          bullet.bulletElm.remove();
          clearInterval(bulletIntervalId);
        }
      });
    }, 30);
  }
}
