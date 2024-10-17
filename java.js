let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uscore = document.getElementById('user');
let cscore = document.getElementById('comp');

let userscore = 0;
let compscore = 0;

const genchoice = () => {
    let comp_choice_array = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * 3);
    let comp_choice = comp_choice_array[index];
    return comp_choice;
}

const Drawgame = (comp_choicee, userchoice) => {
    console.log("draw");
    msg.innerText = `Match Draw. ${comp_choicee} equals ${userchoice}`;
    msg.style.backgroundColor = "yellow";
}

const checkWinner = (userWin, userchoice, comp_choicee) => {
    if (userWin) {
        userscore++;
        uscore.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${comp_choicee}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        cscore.innerText = compscore;
        msg.innerText = `You lost. ${comp_choicee} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

function playGame(userchoice) {
    // generate comp choice
    let comp_choicee = genchoice();

    if (comp_choicee == userchoice) {
        Drawgame(comp_choicee, userchoice);
    } else {
        let userWin = true;

        if (userchoice == "rock") {
            // paper, scissor
            userWin = comp_choicee === "paper" ? false : true;
        } else if (userchoice == "paper") {
            // rock, scissors
            userWin = comp_choicee === "scissor" ? false : true;
        } else if (userchoice == "scissor") {
            userWin = comp_choicee === "rock" ? false : true;
        }
        checkWinner(userWin, userchoice, comp_choicee);
    }
}

choices.forEach(function (choice) {
    choice.addEventListener("click", () => {
        console.log("user selected a choice");
        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});













