const main = document.querySelector("main");
const startBtn = document.querySelector("#start-btn");
const box = document.querySelector(".box");
const timer = document.querySelector("#timer");
const points = document.querySelector("#points");
const gameOverDiv = document.querySelector("#game-over");

let interval;
let gameTimeout;
let time = 0;
let score = 0;
let isClicked = false;

function randomPosition() {
  let topVal = Math.floor(Math.random() * 91) + 5;
  let leftVal = Math.floor(Math.random() * 91) + 5;
  box.style.top = `${topVal}%`;
  box.style.left = `${leftVal}%`;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function updateTimer() {
  time++;
  timer.textContent = time;
}

function gameOver() {
  gameOverDiv.style.display = "inline";
  box.style.top = "50%";
  box.style.left = "50%";
  box.style.backgroundColor = "white";

  setTimeout(() => {
    timer.textContent = 0;
    points.textContent = 0;
    gameOverDiv.style.display = "none";
  }, 3000);
}

function triggerTick() {
  randomPosition();
  randomColor();
  updateTimer();
  isClicked = true;
}

startBtn.addEventListener("click", (event) => {
  clearInterval(interval);
  clearTimeout(gameTimeout);
  time = 0;
  score = 0;
  points.textContent = 0;
  timer.textContent = 0;

  interval = setInterval(() => {
    triggerTick();
  }, 1 * 1000);

  gameTimeout = setTimeout(() => {
    clearInterval(interval);
    isClicked = false;
    gameOver();
  }, 11000);
});

box.addEventListener("click", () => {
  if (isClicked) {
    score++;
    points.textContent = score;
  }
  isClicked = false;
});
