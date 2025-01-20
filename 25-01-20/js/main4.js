const userEmail = prompt("이메일 주소를 입력해주세요.", "");
var check1 = false;
var check2 = false;
var emailURLs = ["naver.com", "nate.com", "daum.com", "google.com"];

if (userEmail.indexOf("@") > 0) {
  check1 = true;
}
for (const URL of emailURLs) {
  if (userEmail.indexOf(URL) >= 0) {
    check2 = true;
  }
}

if (check1 && check2) {
  document.write("당신의 이메일: " + userEmail + " 입니다.");
} else {
  alert("이메일 형식이 유효하지 않습니다. 다시 입력해주세요.");
  location.reload();
}
