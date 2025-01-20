const text = "hello Thank you good luck to you";
console.log(text);
console.log("charAt(문자 불러오기): " + text.charAt(6));
console.log("slice(문자 잘라내기): " + text.slice(6, 11));
console.log(
  "indexOf(글자 위치 반환, 시작위치): " +
    text.indexOf("you", text.indexOf("you") + 1)
);
console.log("match(글자를 찾아서 출력): " + text.match("yo")); // 없으면 null 반환
console.log("replace(문자 바꾸기): " + text.replace("you", "me")); // 값이 들어가지는 않음
console.log("split(문자 나누기): " + text.split(" "));
const word = text.split(" ");
console.log("join(배열 -> 문자열): ", word.join(""));
