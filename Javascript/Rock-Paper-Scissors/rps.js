let output;
let humanChoice;
let computerChoice;

let humanTotal = 0;
let compTotal = 0;

function computerPlay() {
    let choice = Math.round(Math.random() * (3 - 1) + 1);
    if(choice == 1) {
        computerChoice = "Rock";
    } else if(choice == 2) {
        computerChoice = "Paper";
    } else if (choice == 3) {
        computerChoice = "Scissors"
    }

    return choice;
}

function humanPlay(choice) {
    let pcPlay = computerPlay();
    let huPlay;

    if(choice == "R") {
        humanChoice = "Rock";
        huPlay = 1;
    } else if(choice == "P") {
        humanChoice = "Paper";
        huPlay = 2;
    } else if(choice == "S") {
        humanChoice = "Scissors";
        huPlay = 3;
    }

    winnerDecision(huPlay,pcPlay);
}

function winnerDecision(human,comp) {
    if(human == comp) {
        output = "It's a tie";
    } else if(human == 1 && comp == 3) {
        output = "Human Wins";
        humanTotal++;
    } else if(human == 2 && comp == 1) {
        output = "Human Wins";
        humanTotal++;
    } else if(human == 3 && comp == 2) {
        output = "Human Wins";
        humanTotal++;
    } else {
        output = "Computer Wins";
        compTotal++;
    }

    document.getElementById("humanResult").innerHTML = humanChoice;
    document.getElementById("computerResult").innerHTML = computerChoice;
    document.getElementById("result-output").innerHTML = output;

    document.getElementById("humanScore").innerHTML = humanTotal;
    document.getElementById("computerScore").innerHTML = compTotal;
}

function reset() {
    document.getElementById("humanResult").innerHTML = "";
    document.getElementById("computerResult").innerHTML = "";
    document.getElementById("result-output").innerHTML = "";
    humanTotal = 0;
    compTotal = 0;
    document.getElementById("humanScore").innerHTML = humanTotal;
    document.getElementById("computerScore").innerHTML = compTotal;
}
