# OOP Game

## Minimum Viable Product (MVP)

- Have 1 player at the bottom that moves left and right.
- Have obstacles coming from above that the player needs to avoid.
- If there's a collition between the player and any obstacle, it's game over.

## Milestones

- Milesstone 1:
  [ ] Player that moves left to right.
  [ ] Obstacles coming from above from a same position every 3 seconds.
  [ ] Detect collition.
  [ ] Display game-over if there's a collition.

- Milestone 2:
  [ ] Setting a board.
  [ ] Set the player in the middle of the board to start the game. \*\*
  [ ] Avoid the player moving outside the board.
  [ ] Obstacles coming from random positions along the width of the board.
  [ ] Avoid obstacles going outside the board.

- Milestone 3:
  [ ] Remove obstacles once they touch the floor.
  [ ] Set a score that start from 0.
  [ ] Display the score on top of the board.

- Milestone 4:
  [ ] Create two types of obstacles: obstacles the player need to avoid, objects they player needs to collect.
  [ ] If the player touches an obstacle, it's game over.
  [ ] If the player collects an object the score increase by 1.

- Milestone 5:
  [ ] If the score reaches 40, player wins.
  [ ] Display that winner wins.

- Milestone 6:
  [ ] Implement shooting, the player can destroy the obstacles (not the objects).

- Milestone 7:
  [ ] If player shoots an obstacle (there's a collition), increase the score by 1.
  [ ] Implement more than one type of object (images), that will be displayed randomly.

- Milestone 8:
  [ ] Create an array of words (basic vocabulary in English: colors, numbers, food...).
  [ ] Link those words to the objects.
  [ ] Display a random word on top of the board everytime the player collects an object.
  [ ] If the object collected matches the word, increase the score by 1, and display a new word.

- Milestone 9:
  [ ] If the player collects the incorrect object (one that is not linked to the displayed word), decrease score by 1.
  [ ] If score is < 0, it's game over.

## Further Improvement

[ ] Make it responsive (score and word).
[ ] Adjust the player to the right.
[ ] Choose character before starting the game.
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
