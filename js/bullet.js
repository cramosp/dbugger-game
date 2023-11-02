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
    this.element = document.createElement("div");

    this.element.classList.add("bullet");
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.left = this.positionX + "px";
    this.element.style.top = this.positionY + "px";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.element);
  }

  moveUp() {
    this.positionY -= this.bulletSpeed;
    this.element.style.top = this.positionY + "px";
  }
}
