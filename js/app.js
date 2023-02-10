const type = document.querySelector(".selectType");
const word = document.querySelector(".words");
const userWords = document.querySelector(".userWords");
const timer = document.querySelector(".timer");
const modal = document.querySelector(".modals");
const overlay = document.querySelector(".overlay");
const scorePc = document.querySelector(".score");
const yourScore = document.querySelector(".yourScore");
const resetGames = document.querySelector(".resetGames");
const selectType = document.querySelector(".selectType");

let time = 10;
let score = 0;
selectType.addEventListener("input", () => {
  localStorage.setItem("value", JSON.stringify(selectType.value));
});
const val = localStorage.getItem("value");
console.log(JSON.parse(val));
for (let i = 0; i < selectType.length; i++) {
  if (selectType[i].value === JSON.parse(val)) selectType[i].selected = true;
}
setInterval(() => {
  if (time !== 0) {
    time--;
    timer.textContent = "00:" + (time > 9 ? time : "0" + time);
  } else {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    yourScore.textContent = score;
  }
}, 1000);
function randomNumber() {
  let num = Math.floor(Math.random() * words.length);
  return num;
}
console.log(randomNumber());
word.textContent = words[randomNumber()];
userWords.addEventListener("input", () => {
  console.log(userWords.value);
  if (word.textContent === userWords.value) {
    word.textContent = words[randomNumber()];
    userWords.value = "";
    score++;
    scorePc.textContent = score;
    time += Number(selectType.value);
  }
});
resetGames.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
  time = 10;
  score = 0;
  word.textContent = words[randomNumber()];
  userWords.value = "";
  scorePc.textContent = 0;
});
