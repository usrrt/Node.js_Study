const crypto = require("crypto");

console.log(
  "base",
  crypto.createHash("sha512").update("비밀번호").digest("base64")
);
console.log(
  "hex: ",
  crypto.createHash("sha512").update("비밀번호").digest("hex")
);
console.log(
  "base:",
  crypto.createHash("sha512").update("다른비밀번호").digest("base64")
);
