# OOP Game

## Minimum Viable Product (MVP)

- Have 1 player at the bottom that moves left and right.
- Have obstacles coming from above that the player needs to avoid.
- If there's a collition between the player and any obstacle, it's game over.

## Milestones

- Milesstone 1:
  [X] Player that moves left to right.
  [X] Obstacles coming from above from a same position every 3 seconds.
  [X] Detect collition.
  [X] Display game-over if there's a collition.

- Milestone 2:
  [X] Setting a board.
  [X] Set the player in the middle of the board to start the game.
  [X] Avoid the player moving outside the board.
  [X] Obstacles coming from random positions along the width of the board.
  [X] Avoid obstacles going outside the board.

- Milestone 3:
  [X] Remove obstacles once they touch the floor.
  [X] Set a score that start from 0.
  [X] Display the score on top of the board.

- Milestone 4:
  [X] Create two types of obstacles: obstacles the player need to avoid, objects they player needs to collect.
  [X] If the player touches an obstacle, it's game over.
  [X] If the player collects an object the score increase by 1.

- Milestone 5:
  [X] Set the image for the obstacle (poison jar).
  [X] If the score reaches 15, player wins.
  [X] Display that winner wins in an overlay.
  [X] Tranform the game-over page to an overlay.

- Milestone 6:
  [X] Create arrays of words (basic vocabulary in English: colors, numbers, food...).
  [X] Display a random word on top of the board everytime the player collects an object.
  [X] Link those words to the objects (ie. the yellow worm image to 'yellow')
  [X] If the object collected matches the word, increase the score by 1, and display a new word.

- Milestone 7:
  [X] If the player collects the incorrect object (one that is not linked to the displayed word), decrease score by 1.
  [X] If score is < 0, it's game over.

- Milestone 8:
  [ ] Implement shooting, the player can destroy the obstacles (not the objects).
  [ ] Images for the rest of arrays.

- Milestone 9:
  [X] Overlay with intro and instructions of the game, with a button to 'Start'.
  [ ] Style overlays.

## Further Improvement

[ ] Change help button to an icon button.
[ ] Make it responsive (score and word).
[ ] Choose character before starting the game.
[ ] Sounds.
[ ] Increase speed as user moves to next level.

## Description

OOP game built with web technologies (HTML, CSS, JavaScript).

## How to play

Move player left and right with arrow keys.
Avoid the obstacles.
Collect the objects.
