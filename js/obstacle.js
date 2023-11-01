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
        imageElm.src = "./images/blue.png";
        break;
      case "green":
        imageElm.src = "./images/green.png";
        break;
      case "pink":
        imageElm.src = "./images/pink.png";
        break;
      case "red":
        imageElm.src = "./images/red.png";
        break;
      case "yellow":
        imageElm.src = "./images/yellow.png";
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
