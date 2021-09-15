const choseNum = document.querySelector(".chosedNum");
const randomNum = document.querySelector(".randomNum");
const result = document.querySelector(".result");
const range = document.querySelector(".range");
const inputNum = document.querySelector(".inputNum");
const button = document.querySelector(".button");
const start = document.querySelector(".start");

console.log(range.value);

function removeHidden() {
  choseNum.innerText = inputNum.value;
  start.classList.remove("hidden");
}

function makeRandomNum(e) {
  // e.preventDefault;
  removeHidden();
  randomNum.innerText = Math.ceil(Math.random() * range.value);
  if (parseInt(choseNum.innerText) === parseInt(randomNum.innerText)) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

button.onclick = makeRandomNum;

console.log("결과", result.innerText);
