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

const player = new Player();

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
