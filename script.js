let choices = document.body.querySelectorAll(".choice");

let playerChoice = document.body.querySelector("#playerChoice");
let computerChoice = document.body.querySelector("#computerChoice");

let playerScore = parseInt(
  document.body.querySelector(".playerScore").innerHTML
);
let computerScore = parseInt(
  document.body.querySelector(".computerScore").innerHTML
);

let reload = document.body.querySelector(".reload");
reload.addEventListener("click", () => {
  location.reload();
});

if (document.querySelector(".message").innerHTML === "") {
  document.body.querySelector(".message").innerHTML = "Click your choice";
}

let randomChoice = () => {
  let random = Math.floor(Math.random() * 3);
  return choices[random];
};

let checkWinner = (player, computer) => {
  if (player === computer) {
    document.body.querySelector(".message").innerHTML = "Tie";
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    document.body.querySelector(".message").innerHTML = "You win";
    playerScore++;
    document.body.querySelector(".playerScore").innerHTML = playerScore;
  } else {
    document.body.querySelector(".message").innerHTML = "You lose";
    computerScore++;
    document.body.querySelector(".computerScore").innerHTML = computerScore;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    choices.forEach((choice) => choice.classList.add("disabled"));

    playerChoice.innerHTML = choice.querySelector(".choiceText").innerHTML;

    let loadingText = ".";

    let loadingInterval = setInterval(() => {
      computerChoice.innerHTML = loadingText;
      loadingText = loadingText.length < 3 ? loadingText + "." : ".";
    }, 500);

    setTimeout(() => {
      clearInterval(loadingInterval);

      computerChoice.innerHTML =
        randomChoice().querySelector(".choiceText").innerHTML;

      checkWinner(playerChoice.innerHTML, computerChoice.innerHTML);

      choices.forEach((choice) => choice.classList.remove("disabled"));
    }, Math.random() * 1000 + 1000);
  });
});
