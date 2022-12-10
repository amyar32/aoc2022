const { readFileSync } = require("node:fs");

const file = readFileSync("./data.txt").toString("utf-8");
const elvesCalories = file.split("\n\n");

Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

const totalCalories = elvesCalories.map((calories) => {
  return calories
    .split("\n")
    .map(Number)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
});

const topCalories = totalCalories.sort(function (a, b) {
  return a - b;
});

console.log(
  topCalories[topCalories.length - 1] +
    topCalories[topCalories.length - 2] +
    topCalories[topCalories.length - 3]
);
