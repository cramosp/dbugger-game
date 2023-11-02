# Dbugger; - OOP Game

## Description

Educational game to practice basic English vocabulary, perfect for people that are learning English as a foreign language or anglophones who are starting to read.

Some explorers are collecting bugs in the forest. However, it's a windy season and they must be careful with the pieces of trunks that fall from above. They must destroy the trunks with their arrows and collect the right bugs to win the game.

## How to play

- Move the player left and right with the arrow keys from your keyboard.
- Don't let the tree trunks touch the player.
- Collect the right objects according to the word displayed on top of the board.
- Destroy the trunks pressing the spacebar.

## How to win

- In the demo version, only 6 bugs are needed to win.
- Be careful! If you collect the incorrect bug, you'll lose one point.
- You'll also lose if your score is less than 0.

## Tech stack

OOP game built with web technologies (HTML, CSS, JavaScript).

## Minimum Viable Product (MVP)

- Have 1 player at the bottom that moves left and right.
- Have obstacles coming from above that the player needs to avoid.
- If there's a collision between the player and any obstacle, it's game over.

## Milestones

- Milesstone 1:
  [X] Player that moves left to right.
  [X] Obstacles coming from above from a same position every 3 seconds.
  [X] Detect collision.
  [X] Display game-over if there's a collision.

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
  [X] If the score reaches 15, player wins. (For the presentation of the game, this is changed to 6)
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
  [X] The array of words changes every 5 points, following this order: colors, numbers and food. (For the presentation, this is changed to 2)

- Milestone 8:
  [X] Implement shooting, the player can destroy the obstacles (not the objects).
  [X] Images for the rest of arrays.

- Milestone 9:
  [X] Overlay with intro and instructions of the game, with a button to 'Start'.
  [X] Style overlays.
  [X] Choose character before starting the game.

## FUTURE Improvement

[ ] Sounds.
[ ] Make it available for mobiles and tablets.
