console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whiatIsThis() {
  console.log("function", this === exports, this === global); // 함수선언문 내부 this는 global객체를 가리킨다.
}

whiatIsThis();
