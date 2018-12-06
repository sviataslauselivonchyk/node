const fs = require("fs");
var git = require("git-rev-sync");

console.log(git.short());
console.log(git.branch());
console.log(git.tag());  

let versionFileContent = "export const version = 'v1.0.0'";

if (fs.existsSync("version.ts")) {
    versionFileContent = fs.readFileSync("version.ts", "utf8");
    versionFileContent += ' !!! ';
}

fs.writeFile("version.ts", versionFileContent, function (error) {
    if (error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("version.ts", "utf8");
    console.log(data); // выводим считанные данные
});
