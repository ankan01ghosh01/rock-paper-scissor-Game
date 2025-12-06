let yourScore = document.querySelector(".your-score");
let compScore = document.querySelector(".comp-score");
let msg = document.querySelector(".massage");
let userScore = 0;
let computerScore = 0;

const compChoice = () => {
    let compChoice = ["rock", "paper", "scissor"];
    let randomNo = Math.floor(Math.random() * 3);
    return compChoice[randomNo];
}

const drowGame = () => {
    msg.innerHTML = "Game is drow! Try again...";
    msg.style.backgroundColor = "gray";
}


const showWinner = (userWin) => {
    if(userWin){
        msg.innerHTML = "you win !";
        msg.style.backgroundColor = "green";
        userScore ++;
        yourScore.innerHTML = userScore;
    }else{
        msg.innerHTML = "computer wins ..."
        msg.style.backgroundColor = "red";
        computerScore ++;
        compScore.innerHTML = computerScore;
    }
}

const playGame = (userChoice) => {
    const comChoice = compChoice();
    
    if (userChoice === comChoice) {
        drowGame();
    }else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            userWin = comChoice === "scissor" ? true : false;
        }else{
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }

}

const choices = document.querySelectorAll(".choice");

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const currentYear = new Date().getFullYear();
document.querySelector(".currentyear").innerHTML = currentYear;