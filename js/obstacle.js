class Obstacle {
  constructor() {
    this.height = 60;
    this.width = 60;
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
    this.height = 60;
    this.width = 60;
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
        imageElm.src = "./images/colors/blue.png";
        break;
      case "green":
        imageElm.src = "./images/colors/green.png";
        break;
      case "pink":
        imageElm.src = "./images/colors/pink.png";
        break;
      case "red":
        imageElm.src = "./images/colors/red.png";
        break;
      case "yellow":
        imageElm.src = "./images/colors/yellow.png";
        break;
      case "three":
        imageElm.src = "./images/numbers/bug3.png";
        break;
      case "four":
        imageElm.src = "./images/numbers/bug4.png";
        break;
      case "six":
        imageElm.src = "./images/numbers/bug6.png";
        break;
      case "eight":
        imageElm.src = "./images/numbers/bug8.png";
        break;
      case "nine":
        imageElm.src = "./images/numbers/bug9.png";
        break;
      case "apple":
        imageElm.src = "./images/food/applebug.png";
        break;
      case "banana":
        imageElm.src = "./images/food/bananabug.png";
        break;
      case "biscuit":
        imageElm.src = "./images/food/biscuitbug.png";
        break;
      case "milk":
        imageElm.src = "./images/food/milkbug.png";
        break;
      case "pizza":
        imageElm.src = "./images/food/pizzabug.png";
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
