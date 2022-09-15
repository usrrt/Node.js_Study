const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = "abcdefghijklmnopqrstuvwxyz123456"; //key값이 조금만 바껴도 암호화되는 문장이 달라진다
const iv = "1234567890123456";

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update("암호화문장", "utf8", "base64");
result += cipher.final("base64");
console.log("암호화: ", result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, "base64", "utf8");
result2 += decipher.final("utf8");
console.log("복호화: ", result2);
