let user_Score = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreText = document.querySelector("#userScore");
const compScoreText = document.querySelector("#compScore");

const gencompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const gameDraw = () => {
  msg.innerText = "It's a Draw!";
  msg.style.backgroundColor = "black";
};
const showWinner = (userWin, compChoice) => {
  if (userWin) {
    user_Score++;
    userScoreText.innerText = user_Score;
    msg.innerText = `Computer chose ${compChoice}, You Won!`;
    msg.style.backgroundColor = "rgb(0, 90, 0)";
  } else {
    compScore++;
    compScoreText.innerText = compScore;
    msg.innerText = `Computer chose ${compChoice}, Computer Won!`;
    msg.style.backgroundColor = "rgb(84, 0, 0)";
  }
};

const playGame = (userChoice) => {
  const compChoice = gencompChoice();

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
