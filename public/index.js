$(".js-click-modal").click(function () {
  $(".container").addClass("modal-open");
});

$(".js-close-modal").click(function () {
  $(".container").removeClass("modal-open");
});

function count(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById("result");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 더하기/빼기
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    number = parseInt(number) - 1;
  }

  // 결과 출력
  resultElement.innerText = number;
}

function count2(type) {
  // 결과를 표시할 element
  const resultElement2 = document.getElementById("result2");

  // 현재 화면에 표시된 값
  let number = resultElement2.innerText;

  // 더하기/빼기
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    number = parseInt(number) - 1;
  }

  // 결과 출력
  resultElement2.innerText = number;
}

function count3(type) {
  // 결과를 표시할 element
  const resultElement3 = document.getElementById("result3");

  // 현재 화면에 표시된 값
  let number = resultElement3.innerText;

  // 더하기/빼기
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    number = parseInt(number) - 1;
  }

  // 결과 출력
  resultElement3.innerText = number;
}

function count4(type) {
  // 결과를 표시할 element
  const resultElement4 = document.getElementById("result4");

  // 현재 화면에 표시된 값
  let number = resultElement4.innerText;

  // 더하기/빼기
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    number = parseInt(number) - 1;
  }

  // 결과 출력
  resultElement4.innerText = number;
}

function openModal() {
  document.querySelector("#customModal").classList.add("dismiss");
}
