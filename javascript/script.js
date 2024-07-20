let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const messageDiv = document.getElementById("msg");

// Select all elements with classes .rock, .paper, .scissor
let content = document.querySelectorAll(".rock, .paper, .scissor");

const choices = ["rock", "paper", "scissor"];

// Function to get computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    }
    if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        return "user";
    }
    return "computer";
}

// Iterate over each element
content.forEach(element => {
    element.addEventListener("click", () => {
        const userChoice = element.classList[0]; // Get the choice based on class name
        const computerChoice = getComputerChoice();
        const winner = determineWinner(userChoice, computerChoice);

        if (winner === "user") {
            userScore++;
            messageDiv.textContent = `You win! ${userChoice} beats ${computerChoice}`;
            messageDiv.style.backgroundColor = "green";
        } else if (winner === "computer") {
            compScore++;
            messageDiv.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
            messageDiv.style.backgroundColor = "red";
        } else {
            messageDiv.textContent = `It's a draw! You both chose ${userChoice}`;
            messageDiv.style.backgroundColor = "gray";
        }

        userScoreSpan.textContent = userScore;
        compScoreSpan.textContent = compScore;
    });
});
