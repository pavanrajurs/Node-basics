const path = require("path");

console.log("Directory:", path.dirname(__filename));

console.log("File Name:", path.basename(__filename));

console.log("File extension", path.extname(__filename));

const jointPath = path.join("/user", "documents", "node", "projects");
console.log("Join Path:", jointPath);

const resolvePath = path.resolve("user", "documents", "node", "projects");
console.log("resolved path:",resolvePath);


const noramalizePath = path.normalize('/user/.document/.objects/.math/../node/projects');
console.log("NoramalizePath:",noramalizePath);
