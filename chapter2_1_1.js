// const, let
// if (true) {
//   var x = 3;
// }
// console.log(x);
// if (true) {
//   const y = 3;
// }
// console.log(y); Uncaught TypeError TypeError: Assignment to constant variable.

// const a = 0;
// a = 1; Uncaught TypeError TypeError: Assignment to constant variable.

// let b = 0;
// b = 1;
// const c; SyntaxError: Missing initializer in const declaration

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 템플릿 문자열
// var num1 = 1;
// var num2 = 2;
// var result = 3;
// var string1 = num1 + " 더하기 " + num2 + " 는 '" + result + "'";
// console.log(string1);

// const num3 = 1;
// const num4 = 2;
// const result2 = 3;
// const string2 = `${num3} 더하기 ${num4}는 '${result2}'`;
// console.log(string2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 객체 리터럴
// var sayNode = function () {
//   console.log("Node");
// };
// var es = "ES";
// var oldObject = {
//   sayJS: function () {
//     console.log("JS");
//   },
//   sayNode: sayNode,
// };
// oldObject[es + 6] = "Fantastic";
// oldObject.sayNode();
// oldObject.sayJS();
// console.log(oldObject.ES6);

// const newObject = {
//   sayJS() {
//     console.log("JS");
//   },
//   sayNode,
//   [es + 6]: "Fantastic",
// };
// newObject.sayNode();
// newObject.sayJS();
// console.log(newObject.ES6);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 화살표 함수
// function add1(x, y) {
//     return x + y;
// }

// const add2 = (x, y) => {
//     return x + y;
// };
// const add3 = (x, y) => x + y;
// const add4 = (x, y) => (x + y);

// function not1(x) {
//     return !x;
// }

// const not2 = x => !x;

// var relationship1 = {
//   name: "zero",
//   friends: ["nero", "hero", "xero"],
//   logFriend: function () {
//     var that = this;
//     this.friends.forEach(function (friend) {
//       console.log(that.name, friend);
//     });
//   },
// };
// relationship1.logFriend();

// const relationship2 = {
//   name: "zero",
//   friends: ["nero", "hero", "xero"],
//   logFriend() {
//     this.friends.forEach((friend) => {
//       console.log(this.name, friend);
//     });
//   },
// };
// relationship2.logFriend();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 구조분해 할당
// var candyMachine = {
//   status: {
//     name: "node",
//     count: 5,
//   },
//   getCandy: function () {
//     this.status.count--;
//     return this.status.count;
//   },
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 프로미스
// const condition = true;
// const promise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("성공");
//   } else {
//     reject("실패");
//   }
// });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("무조건");
//   });

// promise
//   .then((message) => {
//     return new Promise((resolve, reject) => {
//       resolve(message);
//     });
//   })
//   .then((message2) => {
//     // message2는 이전 then의 return 값을 받아옴
//     console.log(message2);
//     return new Promise((resolve, reject) => {
//       resolve(message2);
//     });
//   })
//   .then((message3) => {
//     console.log(message3);
//   })
//   .catch((error) => {
//     // 실패하면 여기가 호출된다. 3개의 then중에 한단계라도 reject난다면 catch호출
//     console.error(error);
//   });

// // 콜백함수
// function findAndSaveUser(Users) {
//   Users.findOne({}, (err, user) => {
//     if (err) {
//       return console.error(err);
//     }
//     user.name = "zero";
//     user.save((err) => {
//       if (err) {
//         return console.error(err);
//       }
//       Users.findOne({ gender: "m" }, (err, user) => {
//         // 세번째 콜백
//       });
//     });
//   });
// }

// // 콜백함수 프로미스로 바꾼모습
// function findAndSaveUser(Users) {
//   Users.findOne({})
//     .then((user) => {
//       user.name = "zero";
//       return user.save();
//     })
//     .then((user) => {
//       return Users.findOne({ gender: "m" });
//     })
//     .then((user) => {
//       // 세번째...
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

// const promise1 = Promise.resolve("성공1");
// const promise2 = Promise.resolve("2");
// Promise.all([promise1, promise2])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async/await
