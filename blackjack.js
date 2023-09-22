function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let cardOne= getRandomInt(14);
let cardTwo= getRandomInt(14);
let sum = cardOne+cardTwo;
let cardThree = getRandomInt(14);

sum += cardThree;
if (sum > 21) {
  console.log('You lost');
  process.exit(1); // exit program
}
console.log(`You have ${sum} points`);