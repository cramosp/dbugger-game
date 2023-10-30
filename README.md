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
  [ ] Set the player in the middle of the board to start the game. //\*\* When I set this, then the player moves over the right border when moving right.
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
  [ ] If the score reaches 40, player wins.
  [ ] Display that winner wins.

- Milestone 6:
  [ ] Create arrays of words (basic vocabulary in English: colors, numbers, food...).
  [ ] Display a random word on top of the board everytime the player collects an object.
  [ ] Link those words to the objects (ie. the yellow worm image to 'yellow')
  [ ] If the object collected matches the word, increase the score by 1, and display a new word.

- Milestone 7:
  [ ] If the player collects the incorrect object (one that is not linked to the displayed word), decrease score by 1.
  [ ] If score is < 0, it's game over.

- Milestone 8:
  [ ] Implement shooting, the player can destroy the obstacles (not the objects).

- Milestone 9:
  [ ] File with intro and instructions of the game, with a button to 'Start'.
  [ ] Style game-over file (Alicia being a rock and the others surprised)

## Further Improvement

[ ] Make it responsive (score and word).
[ ] Choose character before starting the game (Alicia, Paco, Berta, Pepe, Paige...)
[ ] Sounds.

////// README TEMPLATE

## Description

OOP game built with web technologies (html, css, javascript)

## How to play

Move player with arrow keys :)

## Demo

to-do

## Further Improvements

Fix:

- [x] remove obstacles as they go outside board
- [ ] prevent player from going outside

Functionality:

- shooting (recommended)
- drop different things (prizes, different types of obstacles...)
- count points
- improve game over
- levels (ex. increasing speed as user moves to the next level)
- multiple lives
- allow moving the player up and down
- random sizes for obstacles

UX:

- add images or textures/gradients (background, player, obstacles...)
- sound

Code quality:

- create a Game class (keeping there all information and functionality related to the game)
- settings (speed of the game, distance between obstacles)
