function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log("Promise started");

delayFn(2000).then(() => {
  console.log("After 2 sec promise resolved");
});
console.log("end");

function divide(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("cannot perform division by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}

divide(10, 0)
  .then((result) => console.log(result, "res"))
  .catch((error) => console.log(error, "error"));
