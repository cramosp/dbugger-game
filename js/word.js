const colors = ["yellow", "red", "blue", "pink", "green"];
const numbers = ["four", "six", "nine", "three", "eight"];
const food = ["banana", "milk", "apple", "pizza", "biscuit"];

class Word {
  constructor(score) {
    this.selectedWord;
    this.updateSelectedWord(score);
  }

  getRandomWordByScore(score) {
    if (score < 2) {
      return colors[Math.floor(Math.random() * colors.length)];
    } else if (score < 4) {
      return numbers[Math.floor(Math.random() * numbers.length)];
    } else if (score < 6) {
      return food[Math.floor(Math.random() * food.length)];
    }
  }

  updateSelectedWord(score) {
    this.selectedWord = this.getRandomWordByScore(score);
    const scoreElement = document.getElementById("word");
    scoreElement.innerText = this.selectedWord;
  }
}
