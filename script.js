let userScore = 0;
let compScore = 0;

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg")

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
  //rock,paper,scissor
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText ="IT's a Draw";
  msg.style.backgroundColor= "Black";
  msg.style.color="white";
};

const showWinner=(userWin) => {
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText ="YOU WIN";
        msg.style.backgroundColor= "green";
        msg.style.color="white";

    } else{
        msg.innerText ="YOU LOSE";
        compScore++;
        compScorepara.innerText=compScore;
        msg.style.backgroundColor= "red";
        msg.style.color="black";
    }
}

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice= ", compChoice);

  if (userChoice === compChoice) {
    //Draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      //rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
