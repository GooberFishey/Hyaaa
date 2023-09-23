function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let cardOne= getRandomInt(14);
let cardTwo= getRandomInt(14);
let sum = cardOne+cardTwo+cardThree;
let cardThree = getRandomInt(14);
let houseOne = getRandomInt(14);
let houseTwo = getRandomInt(14);
let houseThree = getRandomInt(14);
let houseSum = houseOne+houseTwo+houseThree;

if (sum > 21 || sum < houseSum) {
  console.log('You have ${sum} points. House has ${houseSum} points. You loose!');
  process.exit(1); // exit program
}

if (sum > houseSum && sun < 21 || houseSum > 21) {
    console.log(`You have ${sum} points. House has ${houseSum} points. You Win!`);
    process.exit(1);
}