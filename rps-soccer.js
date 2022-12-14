let alienSelection;
let humanSelection;
let humanScore = 0;
let alienScore = 0;

let button = document.querySelectorAll('.btn');
const body = document.querySelector('body');
const main = document.querySelector('main');
const commentary = document.getElementById('comments');
const goal = document.getElementById('goal');
const crossBar = document.getElementById('cross-bar');
const gkSave = document.getElementById('gk-save');
const announce = document.getElementById('announcemnet');
const retry = document.getElementById('retry-btn');
const playerScore = document.getElementById('humanScore');
const computerScore = document.getElementById('alienScore');


button.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        humanSelection = img.alt.toLowerCase();

        playRound (humanSelection, alienSelection);

        if (humanScore === 5 || alienScore === 5) {
            declareWinner();
        }
    });
});

const myArray = ["goal", "crossBar", "gkSave"];

function alienPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

function playRound(humanSelection, alienSelection) {
    alienSelection = alienPlay().toLowerCase();
    humanSelection = humanSelection.toLowerCase();
    if (humanSelection == alienSelection) {
        displayResults("That's a Draw!");
    } else if (
        (alienSelection == "goal" && humanSelection == "gkSave") ||
        (alienSelection == "gkSave" && humanSelection == "crossBar") ||
        (alienSelection == "crossBar" && humanSelection == "goal")
    ) {
    alienScore = ++alienScore;
    keepAlienScore();
    if (alienScore === 1) {
        displayResults(
            'one up! aliens take the lead'
        );
    } else if (alienScore === 2) {
        displayResults(
            'oh no, the aliens nets again!'
        );
    } else if (alienScore === 3) {
        displayResults (
            'another one, trouble for the humans? '
        );
    } else if (alienScore === 4) {
        displayResults (
            'unbelievable, trouble for the humans now'
        );
    } else {
        displayResults (
            'aliens take the lead and are looking strong'
        );
    }
    } else {
        humanScore = ++humanScore;
        keepHumanScore();
        if (humanScore === 1) {
            displayResults (
                'goal! nice shot!!'
            );
        } else if (humanScore === 2) {
            displayResults (
                'another one! the alien skipper was sent the wrong way!'
            );
        } else if (humanScore === 3) {
            displayResults (
                'great shot, nicely placed in the top corner. Alien keeper had no chance'
            );
        } else if (humanScore === 4) {
            displayResults (
                'oh beautiful! just wonderful! the team spirit is high!'
            );
        } else {
            displayResults (
                'wonderful! humans put another one past to seal the win!!'
            );
        }
    }
}

function displayResults (str) {
    commentary.textContent = str;
}

function declareWinner() {
    if (humanScore > alienScore) {
      announce.textContent= "You win! Mankind lives another day!!";
      retry.innerText = "Play Again";
    } else {
      announce.textContent= "You lost...who will save mankind now?";
      retry.innerText = "Try Again?";
    }
}

function resetGame() {
    commentary.textContent = "";
    humanScore = 0;
    alienScore = 0;
    keepHumanScore();
    keepAlienScore();
}

function keepHumanScore() {
    let humanScoreBox = document.querySelector("#humanScore");
  
    humanScoreBox.textContent = humanScore;
}

function keepAlienScore() {
    let alienScoreBox = document.querySelector("#alienScore");
  
    alienScoreBox.textContent = alienScore;
}