const game = new Game();

function playAgain() {
  const overlays = document.querySelectorAll(".show-overlay");
  overlays.forEach((overlay) => {
    overlay.classList.toggle("show-overlay");
  });
  game.reset();
  game.start();
}
