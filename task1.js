const fs = require("fs");
var git = require("git-rev-sync");

console.log(git.short());
console.log(git.branch());
console.log(git.tag());

let versionFileContent = "export const version = '" + git.tag() + "'"; //  todo template syntax

// if (fs.existsSync("version.ts")) {
//     versionFileContent = fs.readFileSync("version.ts", "utf8");
// }

fs.writeFileSync("version.ts", versionFileContent);
versionFileContent = fs.readFileSync("version.ts", "utf8");
console.log(versionFileContent);