class Bullet {
  constructor(positionX, positionY) {
    this.height = 30;
    this.width = 10;
    this.bulletSpeed = 5;
    this.positionX = positionX;
    this.positionY = positionY;

    this.createDomElement();
  }

  createDomElement() {
    this.bulletElm = document.createElement("div");

    this.bulletElm.classList.add("bullet");
    this.bulletElm.style.width = this.width + "px";
    this.bulletElm.style.height = this.height + "px";
    this.bulletElm.style.left = this.positionX + "px";
    this.bulletElm.style.top = this.positionY + "px";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.bulletElm);
  }

  moveUp() {
    this.positionY -= this.bulletSpeed;
    this.bulletElm.style.top = this.positionY + "px";
  }
}
