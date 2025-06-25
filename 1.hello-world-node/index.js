require("./sum.js"); //adds sum.js to these file and we can acces that file

console.log("hello node js");

const array = [1, 2, 3, 4, 5, 6];
console.log(array, "array");
setTimeout(() => {
  console.log("this message is delayed by 3 seconds");
}, 3000);
