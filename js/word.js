const colors = ["yellow", "red", "blue", "pink", "green"];
const numbers = ["four", "six", "nine", "three", "eight"];
const food = ["banana", "milk", "apple", "burger", "biscuit"];

class Word {
  constructor(score) {
    this.updateSelectedWord(score);
  }

  getRandomWordByScore(score) {
    if (score <= 5) {
      return colors[Math.floor(Math.random() * colors.length)];
    } else if (score <= 10) {
      return numbers[Math.floor(Math.random() * numbers.length)];
    } else {
      return food[Math.floor(Math.random() * food.length)];
    }
  }

  updateSelectedWord(score) {
    this.selectedWord = this.getRandomWordByScore(score);
    const scoreElement = document.getElementById("word");
    scoreElement.innerText = this.selectedWord;
  }
}
