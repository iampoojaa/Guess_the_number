"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        displayMessage("⛔️ No Number!");
    } else if (guess < 0) {
        displayMessage("❌ Invalid Number!");
    } // When player wins
    else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#56C67A";
        document.querySelector(".number").style.width = "25rem";
        // document.querySelector(".guess").style.backgroundColor = "white";
        // document.querySelector(".guess").style.color = "black";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("💥 You lost the game!");
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing...🤔");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#f58598";
    document.querySelector(".number").style.width = "15rem";
});
