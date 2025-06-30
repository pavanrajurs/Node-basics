// module.exports -> export
// require -> import

const firstModule = require("./First-module");

console.log(firstModule.add(2, 4));
console.log(firstModule.divide(10, 2));
console.log(firstModule.subtract(200,90));


try {
  console.log("trying to divide it by zero");
  let result = firstModule.divide(0, 10);

  console.log("result", result);
} catch (error) {
  console.log("caught an error", error.message);
}


