const myBoard = document.getElementById("board");

const myBoardBounds = myBoard.getBoundingClientRect();
const myBoardStyle = window.getComputedStyle(myBoard);
const myBoardBorderWidth = parseInt(myBoardStyle.borderWidth, 10);
const myBoardWidth = myBoardBounds.width - myBoardBorderWidth * 2;

const myBoardBorderHeight = parseInt(myBoardStyle.borderHeight, 10);
const myBoardHeight = myBoardBounds.height - myBoardBorderHeight * 2;
