// bounce.js
const ball = document.getElementById('ball');
let xVelocity = 3;
let yVelocity = 3;

function updateBallPosition() {
  let x = parseInt(ball.style.left, 10) || 0;
  let y = parseInt(ball.style.top, 10) || 0;

  x += xVelocity;
  y += yVelocity;

  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;

  if (x + 50 >= window.innerWidth || x <= 0) {
    xVelocity *= -1;
    ball.style.backgroundColor = getRandomColor();
  }

  if (y + 50 >= window.innerHeight || y <= 0) {
    yVelocity *= -1;
    ball.style.backgroundColor = getRandomColor();
  }

  requestAnimationFrame(updateBallPosition);
}

function getRandomColor() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let color;
  do {
    color = colors[Math.floor(Math.random() * colors.length)];
  } while (color === ball.style.backgroundColor);
  return color;
}

updateBallPosition();
