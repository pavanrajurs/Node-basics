const { error } = require("console");
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
console.log(dataFolder);

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");

// Synchronous way creating a file

fs.writeFileSync(filePath, "hello from node js");
console.log("file created sucessfully");

const readFileContent = fs.readFileSync(filePath, "utf8");
console.log("File content:", readFileContent);

fs.appendFileSync(filePath, "\n  is a new line added to the path");
console.log("new file content added");

// Asynchronous way creating a file

const asyncFilePath = path.join(dataFolder, "async-example.txt");

fs.writeFile(asyncFilePath, "Hello, Async node js", (err) => {
  if (err) throw err;
  console.log("Async file is created successfully");

  fs.readFile(asyncFilePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Async file content:", data);

    fs.appendFile(asyncFilePath, "\nThis is another line added", (err) => {
      if (err) throw err;
      console.log("New line added to async");

      fs.readFile(asyncFilePath, "utf8", (err, updatedData) => {
        if (err) throw err;
        console.log("Updated file content:", updatedData);
      });
    });
  });
});

/* // write a file
fs.writeFile("New.txt", "Hello world!", (err) => {
  if (err) throw err;
  console.log("File written!");
});

// delete a file
fs.unlink("New.txt", (err) => {
  if (err) throw err;
  console.log("File deleted!");
});

// New folder
fs.mkdir("newFolder", (err) => {
  if (err) throw err;
  console.log("Folder created!");
});

// delete folder
fs.rmdir("newFolder", (err) => {
  if (err) throw err;
  console.log("Folder deleted!");
});

// check file exists
fs.access("example.txt", fs.constants.F_OK, (err) => {
  console.log(err ? "File does not exist" : "File exists");
});

// remove or move file
fs.rename("oldName.txt", "newName.txt", (err) => {
  if (err) throw err;
  console.log("File renamed!");
}); */
