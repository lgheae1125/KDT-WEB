const win = document.querySelector("#win");
const draw = document.querySelector("#draw");
const lose_scissors = document.querySelector("#lose_scissors");
const lose_rock = document.querySelector("#lose_rock");
const lose_paper = document.querySelector("#lose_paper");

function game(human) {
  //초기화
  win.style.display = "none";
  draw.style.display = "none";
  lose_rock.style.display = "none";
  lose_paper.style.display = "none";
  lose_scissors.style.display = "none";

  //컴퓨터 가위바위보
  var com = Math.floor(Math.random() * 3) + 1;

  if (human == 1) {
    // 누가 이긴지 판별
    if (com === 1) {
      draw.style.display = "block";
    } else if (com === 2) {
      lose_scissors.style.display = "block";
    } else if (com === 3) {
      win.style.display = "block";
    }
  } else if (human == 2) {
    if (com === 1) {
      lose_rock.style.display = "block";
    } else if (com === 2) {
      draw.style.display = "block";
    } else if (com === 3) {
      win.style.display = "block";
    }
  } else if (human == 3) {
    if (com === 1) {
      lose_paper.style.display = "block";
    } else if (com === 2) {
      win.style.display = "block";
    } else if (com === 3) {
      draw.style.display = "block";
    }
  }
}
