console.log("require가 가장위에 오지 않아도 됩니다.");

module.exports = "find me";

require("./var");

console.log("require.cache입니다.");
console.log(require.cache);

console.log("require.main입니다.");
console.log(require.main === module);
console.log(require.main.filename);
