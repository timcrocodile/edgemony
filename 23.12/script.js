import dataSet from "./data.js";

const { personages } = dataSet;
const { enemies } = dataSet;

console.log(enemies);

const addPlayer = (sprites) => {
  const pg = document.createElement("img");

  pg.classList.add("pg");
  pg.setAttribute("src", sprites.warOstrich.walking);

  wrapper.appendChild(pg);
  playerJump();
};

const playerJump = () => {
  const pg = document.querySelector(".pg");
  const pgWalk = personages.warOstrich.walking;
  const pgJump = personages.warOstrich.jumping;

  document.body.addEventListener("keypress", (event) => {
    if (event.key === "w") {
      pg.setAttribute("src", pgJump);
      pg.style.top = `100px`;
    }

    setTimeout(() => {
      pg.setAttribute("src", pgWalk);
      pg.style.top = `188px`;
    }, 1000);
  });
};

const addEnemy = (sprites) => {
  const enemy = document.createElement("img");

  enemy.setAttribute("src", sprites.mummy.walking);
  enemy.classList.add("mummy");

  wrapper.append(enemy);
  moveEnemy("mummy");
};

const moveEnemy = (enemyName) => {
  let posX = 300;
  const enemy = document.querySelector(`.${enemyName}`);
  const player = document.querySelector(".pg");
  player.style.top = "188px"; // Set the style dynamically (JS)

  const enemyWalkingX = setInterval(() => {
    posX -= 30;
    enemy.style.left = `${posX}px`;

    console.log(posX);
    console.log(player.style.top);
    if (posX === -120 && player.style.top !== "100px") {
      clearInterval(enemyWalkingX);
      endGame();
      scorePoints.style.display = "none";
    }

    if (posX <= -200) enemy.style.opacity = 0;
    if (posX <= -300) {
      posX = 480;
      setTimeout(() => {
        enemy.style.opacity = 1;
      }, 2000);
    }
  }, 300);
};

const bgAnimation = () => {
  let axisX = 0;

  setInterval(() => {
    axisX += 0.3;
    wrapper.style.backgroundPosition = `${axisX}% 100%`;
  }, 60);
};

const endGame = () => {
  wrapper.style.opacity = 0;

  setTimeout(() => {
    wrapper.remove();
    const newWrapper = document.createElement("div");
    const gameOverTitle = document.createElement("h1");

    gameOverTitle.textContent = "GAME OVER";
    newWrapper.className = "game-over";
    newWrapper.append(gameOverTitle);
    document.body.append(newWrapper);
  }, 1000);
};

const startGame = () => {
  bgAnimation();
  addPlayer(personages);
  addEnemy(enemies);
  addScorePoints();
};

const addScorePoints = () => {
  let game = true;

  if (game === true) {
    setInterval(() => {
      scorePoints.textContent = totalScore;
      totalScore++;
    }, 500);
  }
};

// Game start from here
const wrapper = document.querySelector(".wrapper");
const scorePoints = document.querySelector("h2");
const h3PressEnter = document.querySelector("h3");
let totalScore = 0;

wrapper.style.opacity = 0;
document.body.addEventListener(
  "keypress",
  (e) => {
    if (e.key === "Enter") {
      wrapper.style.opacity = 1;
      h3PressEnter.style.display = "none";
      startGame();
    }
  },
  { once: true }
);
