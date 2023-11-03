const spacebarSound = document.getElementById("arrowSound");

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
