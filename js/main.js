const myBoard = document.getElementById("board");
const myBoardBounds = myBoard.getBoundingClientRect();
const myBoardStyle = window.getComputedStyle(myBoard);
// const myBoardBorderWidth = parseInt(myBoardStyle.borderWidth, 10);
const boardBorderWidthPixels = parseInt(myBoardStyle.borderWidth, 10);
const boardBorderWidthVW = (boardBorderWidthPixels / myBoardBounds.width) * 100; // Calculate the border width in vw

const myBoardBorderWidth = boardBorderWidthVW;
// const myBoardWidth = myBoardBounds.width - myBoardBorderWidth * 2;
const viewportWidth = window.innerWidth;
const boardWidthPixels = myBoardBounds.width - myBoardBorderWidth * 2;
const boardWidthVW = (boardWidthPixels / viewportWidth) * 100;

const myBoardWidth = boardWidthVW;
console.log(myBoardWidth);

class Player {
  constructor() {
    this.height = 10;
    this.width = 5;
    this.positionX = 0; // Fix it.
    this.positionY = 0;
    this.step = 2; // It can move faster by changing this.
    console.log(this.positionX);

    // display it in UI:
    this.playerElm = document.getElementById("player");
    this.playerElm.style.width = this.width + "vw";
    this.playerElm.style.height = this.height + "vh";
    this.playerElm.style.left = this.positionX + "vw";
    this.playerElm.style.bottom = this.positionY + "vh";
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= this.step;
      this.playerElm.style.left = this.positionX + "vw";
    }
  }
  moveRight() {
    if (this.positionX < myBoardWidth - myBoardBorderWidth - this.width) {
      this.positionX += this.step;
      this.playerElm.style.left = this.positionX + "vw";
    }
    console.log(this.positionX);
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
