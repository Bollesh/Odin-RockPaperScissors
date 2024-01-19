let computerChoice = document.querySelector(".computerChoice");
let playerChoice = document.querySelector(".playerChoice");
let choices = document.querySelectorAll(".choice");
let playerPoints = 0;
let compPoints = 0;
let playerPointsDisplay = document.querySelector(".playerPoints");
let compPointsDisplay = document.querySelector(".computerPoints");
let infoDisplay = document.querySelector(".info");
let bigDisplay = document.querySelector(".choiceInfo");

let rock = `<i class="fa-solid fa-hand-fist"></i>`;
let paper = `<i class="fa-solid fa-hand"></i>`;
let scissors = `<i class="fa-solid fa-hand-scissors"></i>`;
let randomChoice = `?`;

for(let i = 0; i < choices.length; i++){
    choices[i].addEventListener("click", () => {
        playerChoice.innerHTML = `<i class="fa-solid fa-hand-fist" style="transform: rotate(60deg)"></i>`;
        computerChoice.innerHTML = `<i class="fa-solid fa-hand-fist" style="transform: rotateY(180deg) rotate(60deg)"></i>`;
        infoDisplay.innerHTML = `First to 5 points wins.`;
        bigDisplay.innerHTML = `Choose carefully!`

        computerChoice.classList.add("animation");
        playerChoice.classList.add("animation");

        let randomNumber = Math.floor(Math.random() * 3);
        randomCompChoice(randomNumber);

        choices.forEach(choice => {
            choice.disabled = true;
        });

        setTimeout(() =>{
            if(i === 0){
                playerChoice.innerHTML = rock;
                choiceRock(randomNumber);
            }
            if(i === 1){
                playerChoice.innerHTML = paper;        
                choicePaper(randomNumber);
            }
            if(i === 2){
                playerChoice.innerHTML = scissors;
                choiceScissors(randomNumber);
            }

            bigDisplay.innerHTML = `SHOOT!`

            computerChoice.innerHTML = randomChoice;
            playerPointsDisplay.innerHTML = `player: ${playerPoints}`;
            compPointsDisplay.innerHTML = `Computer: ${compPoints}`

            computerChoice.classList.remove("animation");
            playerChoice.classList.remove("animation");

            choices.forEach(choice => {
                choice.disabled = false;
            });
        }, 1000);
    });
}

function randomCompChoice(num){
    if(num === 0){
        randomChoice = rock;
    }
    if(num === 1){
        randomChoice = paper;
    }
    if(num === 2){
        randomChoice = scissors;
    }
}

function choiceRock(compNum){
    if(compNum === 0){
        infoDisplay.innerHTML = `Rock and Rock is a tie`;
    }
    if(compNum === 1){
        compPoints++;
        infoDisplay.innerHTML = `Paper beats Rock`;
    }
    if(compNum === 2){
        playerPoints++;
        infoDisplay.innerHTML = `Rock beats Scissors`;
    }

    reset();
}

function choicePaper(compNum){
    if(compNum === 0){
        infoDisplay.innerHTML = `Paper beats Rock`;
        playerPoints++;
    }
    if(compNum === 1){
        infoDisplay.innerHTML = `Paper and Paper is a tie`;
    }
    if(compNum === 2){
        infoDisplay.innerHTML = `Scissors beat Paper`;
        compPoints++;
    }

    reset()
}

function choiceScissors(compNum){
    if(compNum === 0){
        infoDisplay.innerHTML = `Rock beats Scissors`;
        compPoints++;
    }
    if(compNum === 1){
        infoDisplay.innerHTML = `Scissors beat Paper`;
        playerPoints++;
    }
    if(compNum === 2){
        infoDisplay.innerHTML = `Scissors and Scissors is a tie`
    }

    reset();
}

if(playerPoints === 5){
    let end = document.getElementById("end");
    end.classList.remove("block");
    end.style.animation = "expand 0.4s";

    let dark = document.getElementById("dark");
    dark.classList.remove("block");
    dark.style.animation = "blurEffect 0.4s";
    console.log(playerPoints);
}

function reset(){
    if(playerPoints === 5 || compPoints === 5){
        let end = document.getElementById("end");
        end.classList.remove("block");
        end.style.animation = "expand 0.4s";
    
        let dark = document.getElementById("dark");
        dark.classList.remove("block");
        dark.style.animation = "blurEffect 0.4s";
        console.log(playerPoints);

        if(playerPoints === 5){
            document.querySelector(".result").innerHTML = `You Won!`;
        }

        if(compPoints === 5){
            document.querySelector(".result").innerHTML = `You lost...`;
        }
    }
}
let resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", ()=>{
    location.reload();
});