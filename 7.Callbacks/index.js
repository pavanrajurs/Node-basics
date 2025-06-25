const fs = require("fs");

function person(name, callback) {
  console.log(`hello ${name} from`);
  callback();
}

function address() {
  console.log("Bengaluru");
}

person("Pavan", address);

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("error reading file", err);
    return;
  }
  console.log(data);
});
