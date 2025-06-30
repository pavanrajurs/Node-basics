const lodash = require("lodash");

const names = ["pavan", "nikhil", "bharath"];
const capitalize = lodash.map(names, lodash.capitalize);

// ✔️ dependencies → Needed in production
//  ✔️ devDependencies → Needed only in development
