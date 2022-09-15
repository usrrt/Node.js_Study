const { access } = require("fs");

const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const testCookie = "mycookie=test1;mycookie2=hong;mycookie3=fuckingjavascripts";

console.log(parseCookies(testCookie));
