
let timer, timeLeft = 420;
let score = 0;

function startGame() {
  score = 0;
  timeLeft = 420;
  document.getElementById('score').textContent = score;
  document.getElementById('timer').textContent = formatTime(timeLeft);
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = formatTime(timeLeft);
    if (timeLeft <= 0) endGame();
  }, 1000);
  document.getElementById('bg-music').play();
}

function pauseGame() {
  clearInterval(timer);
  document.getElementById('bg-music').pause();
}

function restartGame() {
  clearInterval(timer);
  document.getElementById('score').textContent = '0';
  document.getElementById('timer').textContent = '07:00';
}

function endGame() {
  clearInterval(timer);
  document.getElementById('bg-music').pause();
  alert("Tempo esgotado! Você fez " + score + " ponto(s).");
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

document.getElementById('start-btn').onclick = startGame;
document.getElementById('pause-btn').onclick = pauseGame;
document.getElementById('restart-btn').onclick = restartGame;
