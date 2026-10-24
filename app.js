let user_score = 0;
let computer_score = 0;
const choices = document.querySelectorAll(".choice");
let scoreBoard= document.querySelector(".score-board");
let score= document.querySelector(".score");
let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let msg_container=document.querySelector(".msg-container");
let msg=document.getElementById("msg");
let resetBtn=document.getElementById("reset-btn");


const computerPlay = () => {
    const choices= ["rock", "paper", "scissors"];
    // get random values from rock, paper, scissors
    const compChoice= choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
};

const playGame = (user_choice) => {
    console.log(user_choice);
    
    const computer_choice = computerPlay();
    console.log(computer_choice);
    if (user_choice === computer_choice) {
        console.log("It's a tie!");
        msg.innerText = "It's a tie!";
    } else if (
        (user_choice === "rock" && computer_choice === "scissors") ||
        (user_choice === "paper" && computer_choice === "rock") ||
        (user_choice === "scissors" && computer_choice === "paper")
    ) {
        console.log("You win!");
        user_score++;
        userScore.innerText = user_score;
        msg.innerText = "You win!";
    } else {
        console.log("Computer wins!");
        computer_score++;
        computerScore.innerText = computer_score;
        msg.innerText = "Computer wins!";
    }

    console.log(`User Score: ${user_score}, Computer Score: ${computer_score}`);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.id;
        playGame(user_choice);
    });
});

resetBtn.addEventListener("click", () => {
    user_score = 0;
    computer_score = 0;
    userScore.innerText = user_score;
    computerScore.innerText = computer_score;
    msg.innerText = "Play Again!";
});