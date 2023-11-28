let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s")

function getcomputerChoice(){
    const choices = ['r', 'p', 's'];
    const computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];

}

function conversion(letter){
    if(letter === "r") return "Rock";
    if(letter === "s") return "Scissor";
    if(letter === "p") return "Paper";
}

function win(userChoice,computerChoice){
    userScore++;
    // console.log("win");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    const userWord = "(user)".fontsize(3).sup();
    const compWord = "(comp)".fontsize(3).sub();

    result.innerHTML = `${conversion(userChoice)}${userWord}  beats  ${conversion(computerChoice)}${compWord}  You Win!!  `
    
}
function lose(userChoice,computerChoice){
    computerScore++;
    // console.log("win");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    const userWord = "(user)".fontsize(3).sup();
    const compWord = "(comp)".fontsize(3).sub();

    result.innerHTML = `${conversion(userChoice)}${userWord}  loses to ${conversion(computerChoice)}${compWord}  You lost!!  `
   

}
function Tie(userChoice,computerChoice){
    
    // console.log("win");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    const userWord = "(user)".fontsize(3).sup();
    const compWord = "(comp)".fontsize(3).sub();

    result.innerHTML = `${conversion(userChoice)}${userWord}  Match ${conversion(computerChoice)}${compWord}  Tied!!  `

}



function game(userChoice){
    const computerChoice = getcomputerChoice();
    // console.log("User choice => " +  userChoice)
    // console.log("Computer choice => " + computerChoice);

    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;    
            
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "ss":
        case "pp":
        case "rr":
            Tie(userChoice,computerChoice);
            break;

    }

   

}


function main(){

rock.addEventListener('click', function(){
  game("r")
  
});

paper.addEventListener('click', function(){
game("p")
});
scissor.addEventListener('click', function(){
 game("s")    
});

}
 main();
 3