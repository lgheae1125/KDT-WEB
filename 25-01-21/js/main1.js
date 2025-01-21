const burgers = document.querySelectorAll(".burger");
const burgerOption = document.querySelector(".burgerOption");
const backdrop = document.querySelector(".backdrop");
const putMenuButton = document.querySelector(".putMenuButton");
const putMenuButtonValue = document.querySelector(".putMenuButton span");
const toppings = document.querySelectorAll(".burgerOption ul li");
var money = 0;

function openToppingModal() {
  // 토핑 추가 모달 열기
  backdrop.style.transform = "translateY(0%)";
  burgerOption.style.transform = "translateY(-70%)";
}
function closeToppingModal() {
  // 토핑 추가 모달 닫기
  backdrop.style.transform = "translateY(100%)";
  burgerOption.style.transform = "translateY(0%)";

  toppings.forEach((topping) => {
    // 이전에 선택한 옵션 제거하기
    const toppingsInput = topping.querySelector("input");
    toppingsInput.checked = false;
  });
}

burgers.forEach((burger) => {
  var burgerPrice = burger.querySelector(".burgerTxt p .price").textContent;
  burgerPrice = burgerPrice.replace(",", "");
  burgerPrice = Number(burgerPrice);
  // 버거 기본 가격 가져와서 burgerPrice에 담기

  burger.addEventListener("click", () => {
    openToppingModal();
    // 토핑 추가 모달 열기
    money = burgerPrice;
    putMenuButtonValue.textContent = String(money);
    // 가져온 버거 기본 가격인 burgerPrice를 money에 담고 <- 토핑 추가 시에 값을 더해줘야 함
    // 가격을 메뉴 담기 버튼에 넣어주기
  });
});

backdrop.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closeToppingModal();
    // 토핑 추가 모달 닫기(배경 클릭시)
  }
});

toppings.forEach((topping) => {
  const toppingsInput = topping.querySelector("input");

  toppingsInput.addEventListener("change", () => {
    // "토핑들의 버튼을 클릭해서 값이 바뀌었다면" 이라는 메서드
    var isToppingChecked = toppingsInput.checked;

    var toppingPrice = topping.querySelector("label .toppingPrice").textContent;
    toppingPrice = toppingPrice
      .replace("+", "")
      .replace(",", "")
      .replace("원", "");
    toppingPrice = Number(toppingPrice);
    // 클릭한 토핑의 가격 toppingPrice에 넣기

    if (isToppingChecked) {
      money += toppingPrice;
      // money(버거 기본 가격 + @)에 추가 할 토핑 가격 입력
      putMenuButtonValue.textContent = String(money);
    } else if (!isToppingChecked) {
      // 만약 토핑을 클릭했을 때 이미 눌려있던 상태라면 추가한 금액에서 빼야하니까
      // money(버거 기본 가격 + @)에서 뺀 토핑 가격만큼 빼주기
      money -= toppingPrice;
      putMenuButtonValue.textContent = String(money);
    }
  });
});

putMenuButton.addEventListener("click", () => {});
