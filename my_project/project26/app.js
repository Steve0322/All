const grid = document.querySelector('.grid');
const howButton = document.querySelector('.howBtn');
const startButton = document.querySelector('.startBtn');
const doodler = document.createElement('div');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.closeBtn');

let isGameOver = false;
let isJumping = true;
let isGoingLeft = false;
let isGoingRight = false;
let score = 0;
let platforms = [];
let startPoint = 150;
let doodlerLeftSpace = 50;
let doodlerBottomSpace = startPoint;
let platformTimerId;
let upTimerId;
let downTimerId;
let leftTimerId;
let rightTimerId;
const platformCount = 5;

function init() {
  isGameOver = false;
  isJumping = true;
  isGoingLeft = false;
  isGoingRight = false;
  score = 0;
  platforms = [];
  startPoint = 150;
  doodlerLeftSpace = 50;
}

function createDoodler() {
  grid.appendChild(doodler);
  doodler.classList.add('doodler');
  doodlerLeftSpace = platforms[0].left;
  doodler.style.left = doodlerLeftSpace + 'px';
  doodler.style.bottom = doodlerBottomSpace + 'px';
}

class Platform {
  constructor(newplatBottom) {
    this.bottom = newplatBottom;
    this.left = Math.random() * 315;

    this.visual = document.createElement('div');

    const visual = this.visual;
    visual.classList.add('platform');
    visual.style.left = this.left + 'px';
    visual.style.bottom = this.bottom + 'px';
    grid.appendChild(visual);
  }
}

function createPlatforms() {
  for (let i = 0; i < platformCount; i++) {
    let platGap = 600 / platformCount;
    let newplatBottom = 100 + i * platGap;
    let newPlatform = new Platform(newplatBottom);
    platforms.push(newPlatform);
  }
}

function movePlatforms() {
  if (doodlerBottomSpace > 200) {
    platforms.forEach((platform) => {
      platform.bottom -= 4;
      let visual = platform.visual;
      visual.style.bottom = platform.bottom + 'px';

      if (platform.bottom < 10) {
        let firstPlatform = platforms[0].visual;
        firstPlatform.classList.remove('platform');

        platforms.shift();
        score++;

        const newPlatform = new Platform(600);
        platforms.push(newPlatform);
      }
    });
  }
}

function jump() {
  clearInterval(downTimerId);

  upTimerId = setInterval(function () {
    doodlerBottomSpace += 20;
    doodler.style.bottom = doodlerBottomSpace + 'px';
    if (doodlerBottomSpace > startPoint + 200) {
      fall();
      isJumping = false;
    }
  }, 30);
}

function fall() {
  clearInterval(upTimerId);

  downTimerId = setInterval(function () {
    doodlerBottomSpace -= 5;
    doodler.style.bottom = doodlerBottomSpace + 'px';
    if (doodlerBottomSpace <= 0) {
      gameOver();
    }

    platforms.forEach((platform) => {
      if (
        doodlerBottomSpace >= platform.bottom &&
        doodlerBottomSpace <= platform.bottom + 15 &&
        doodlerLeftSpace + 60 >= platform.left &&
        doodlerLeftSpace <= platform.left + 85 &&
        !isJumping
      ) {
        startPoint = doodlerBottomSpace;
        jump();
      }
    });
  }, 20);
}

function moveLeft() {
  if (isGoingRight) {
    clearInterval(rightTimerId);
    isGoingRight = false;
  }

  isGoingLeft = true;

  leftTimerId = setInterval(function () {
    if (doodlerLeftSpace >= 0) {
      doodlerLeftSpace -= 5;
      doodler.style.left = doodlerLeftSpace + 'px';
    } else {
      moveRight();
    }
  }, 20);
}

function moveRight() {
  if (isGoingLeft) {
    clearInterval(leftTimerId);
    isGoingLeft = false;
  }

  isGoingRight = true;

  rightTimerId = setInterval(function () {
    if (doodlerLeftSpace <= 340) {
      doodlerLeftSpace += 5;
      doodler.style.left = doodlerLeftSpace + 'px';
    } else {
      moveLeft();
    }
  }, 20);
}

function moveStraight() {
  clearInterval(leftTimerId);
  clearInterval(rightTimerId);
  isGoingLeft = false;
  isGoingRight = false;
}

function control(e) {
  doodler.style.bottom = doodlerBottomSpace + 'px';
  if (e.key === 'ArrowLeft') {
    moveLeft();
  } else if (e.key === 'ArrowRight') {
    moveRight();
  } else if (e.key === 'ArrowUp') {
    moveStraight();
  }
}

function gameOver() {
  isGameOver = true;

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  const scoreBox = document.createElement('h2');
  scoreBox.className = 'title';
  scoreBox.innerHTML = `Your score <br/> ${score}`;

  const retryButton = document.createElement('div');
  retryButton.className = 'retryBtn';
  retryButton.innerHTML =
    '<p>Retry</p><button class="btn"><i class="fas fa-undo"></i></button>';
  
  grid.append(scoreBox, retryButton);

  retryButton.addEventListener('click', function () {
    init();
    clearInterval(platformTimerId);
    start();
  });

  clearInterval(upTimerId);
  clearInterval(downTimerId);
  clearInterval(leftTimerId);
  clearInterval(rightTimerId);
}

function start() {
  grid.innerHTML = '';
  if (!isGameOver) {
    createPlatforms();
    createDoodler();
    platformTimerId = setInterval(movePlatforms, 30);
    jump();
    document.addEventListener('keyup', control);
  }
}

startButton.addEventListener('click', start);

howButton.addEventListener('click', () => {
  modal.classList.add('shown');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('shown');
});

window.addEventListener('click', (e) => {
  e.target === modal ? modal.classList.remove('shown') : false;
});