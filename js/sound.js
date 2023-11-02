const spacebarSound = new Audio("../sounds/arrow.mp3");

function arrowSound() {
  if (spacebarSound.paused) {
    spacebarSound.play();
  } else {
    spacebarSound.currentTime = 0;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    arrowSound();
  }
});
