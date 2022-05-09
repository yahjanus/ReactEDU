var a = 5;

for (var i = 0; i < 5; i++) {
  console.log("안쪽" + i);
}
console.log("바깥쪽" + i); //  함수단위 Scope로 정상 출력.

for (let j = 0; j < 5; j++) {
  console.log("안쪽" + j);
}
console.log("바깥쪽" + j); // 오류 발생. let으로 선언한 j는 블록단위 Scope로 {} 안에서만 유효.
