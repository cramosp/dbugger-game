const game = new Game();

function hideOverlays() {
  const overlays = document.querySelectorAll(".show-overlay");
  overlays.forEach((overlay) => {
    overlay.classList.toggle("show-overlay");
  });
}

function playAgain() {
  hideOverlays();
  game.reset();
  game.start();
}

function showChoosePlayerOverlay() {
  hideOverlays();
  const choosePlayer = document.getElementById("choose-player-overlay");
  choosePlayer.classList.toggle("show-overlay");
}

function selectCharacter(player) {
  const selectedCharacters = document.querySelectorAll(".selected-player");
  selectedCharacters.forEach((character) => {
    character.classList.toggle("selected-player");
  });

  if (player === "player1") {
    const player1 = document.getElementById("player1");
    player1.classList.toggle("selected-player");
  } else if (player === "player2") {
    const player2 = document.getElementById("player2");
    player2.classList.toggle("selected-player");
  }

  game.changePlayer(player);
}
