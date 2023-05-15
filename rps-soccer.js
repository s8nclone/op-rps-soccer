let alienSelection;
let humanSelection;
let humanScore = 0;
let alienScore = 0;

let button = document.querySelectorAll('.btn');
const commentary = document.getElementById('comments');
const goal = document.getElementById('goal');
const crossBar = document.getElementById('cross-bar');
const gkSave = document.getElementById('gk-save');
const announce = document.getElementById('announcement');
const retry = document.getElementById('retry-btn');
const playerScore = document.getElementById('humanScore');
const computerScore = document.getElementById('alienScore');


// button.forEach((button) => {
//     button.addEventListener("click", () => {
//         const img = button.querySelector("img");
//         humanSelection = img.alt.toLowerCase();

//         playRound (humanSelection, alienSelection);

//         if (humanScore === 5 || alienScore === 5) {
//             declareWinner();
//         }
//     });
// });

const myArray = ["goal", "crossBar", "gkSave"];

function alienPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

let alienScore = 0;
let humanScore = 0;

// Increase either alienScore or humanScore randomly
if (Math.random() < 0.5) {
  alienScore++;
} else {
  humanScore++;
}


// function playRound(humanSelection, alienSelection) {
//     humanSelection = humanSelection.toLowerCase();
//     if (humanSelection == alienSelection) {
//         displayResults("That's a Draw!");
//     } else if (
//         (humanSelection == "goal" && alienSelection == "gkSave") ||
//         (humanSelection == "gkSave" && alienSelection == "crossBar") ||
//         (humanSelection == "crossBar" && alienSelection == "goal")
//     ) {
//         humanScore = ++humanScore;
//         keepHumanScore();
//         displayResults("You Win!");
//     } else {
//         alienScore = ++alienScore;
//         keepAlienScore();
//         displayResults("Alien Wins!");
//     }
// }

function playRound(humanSelection, alienSelection) {
    if (humanScore === 5 || alienScore === 5) {
        return;
    }

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
                'oh no, the aliens are running away with it'
            );
        } else {
            displayResults(
                'alien scores! they are unstoppable'
            );
        }
    } else {
        humanScore = ++humanScore;
        keepHumanScore();
        if (humanScore === 1) {
            displayResults(
                'you score! we are in it to win it'
            );
        } else if (humanScore === 2) {
            displayResults(
                'come on! we can still win this'
            );
        } else {
            displayResults(
                'you score! what a comeback'
            );
        }
    }

    if (humanScore === 5 || alienScore === 5) {
        declareWinner();
    }
}


// function playRound(humanSelection, alienSelection) {
//     humanSelection = humanSelection.toLowerCase();
//     if (humanSelection == alienSelection) {
//         displayResults("That's a Draw!");
//     } else if (
//         (alienSelection == "goal" && humanSelection == "gkSave") ||
//         (alienSelection == "gkSave" && humanSelection == "crossBar") ||
//         (alienSelection == "crossBar" && humanSelection == "goal")
//     ) {
//         alienScore = ++alienScore;
//         keepAlienScore();
//         if (alienScore === 1) {
//             displayResults(
//                 'one up! aliens take the lead'
//             );
//         } else if (alienScore === 2) {
//             displayResults(
//                 'oh no, the aliens nets again!'
//             );
//         } else if (alienScore === 3) {
//             displayResults (
//                 'another one, trouble for the humans? '
//             );
//         } else if (alienScore === 4) {
//             displayResults (
//                 'unbelievable, trouble for the humans now'
//             );
//         } else {
//             displayResults (
//                 'aliens take the lead and are looking strong'
//             );
//         }
//     } else {
//         humanScore = ++humanScore;
//         keepHumanScore();
//         if (humanScore === 1) {
//             displayResults (
//                 'goal! nice shot!!'
//             );
//         } else if (humanScore === 2) {
//             displayResults (
//                 'another one! the alien skipper was sent the wrong way!'
//             );
//         } else if (humanScore === 3) {
//             displayResults (
//                 'great shot, nicely placed in the top corner. Alien keeper had no chance'
//             );
//         } else if (humanScore === 4) {
//             displayResults (
//                 'oh beautiful! just wonderful! the team spirit is high!'
//             );
//         } else {
//             displayResults (
//                 'wonderful! humans put another one past to seal the win!!'
//             );
//         }
//     }
// }

button.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        humanSelection = img.alt.toLowerCase();
        alienSelection = alienPlay().toLowerCase();

        playRound(humanSelection, alienSelection);

        if (humanScore === 5 || alienScore === 5) {
            declareWinner();
        }
    });
});

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
    if (humanScore === 5 || alienScore === 5) {
        declareWinner();
    }
}

function keepAlienScore() {
    let alienScoreBox = document.querySelector("#alienScore");
    alienScoreBox.textContent = alienScore;
    if (humanScore === 5 || alienScore === 5) {
        declareWinner();
    }
}
