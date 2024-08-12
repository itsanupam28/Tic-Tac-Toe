let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-game")
let gameBoard = document.querySelector(".game-board")
let gameContainer = document.querySelector(".game-container")

let winner = document.createElement("div")
winner.className = "winner"


let turnX = true;

const winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let count = 0;

reset.addEventListener("click", () => {
    console.log("reset is clicked")
    resetGame()
})

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.style.color = "rgb(235, 94, 40)"
            box.textContent = "X";
            turnX = false;
        }
        else {
            box.style.color = "rgb(64, 61, 57)"
            box.textContent = "O";
            turnX = true;
        }
        box.disabled = true;
        count++;

        if (count >= 5) {
            checkWinner();
        }

    });
});


const checkWinner = () => {
    winningArray.forEach((array) => {
        let a = boxes[array[0]].textContent;
        let b = boxes[array[1]].textContent;
        let c = boxes[array[2]].textContent;
        if (a === b && b === c && a !== "") {
            
            winner.innerHTML = `Congratulations, Winner is ${a}!!!`;
            winner.style.display = 'flex';
            gameBoard.replaceWith(winner);
            setTimeout(() => {
                
                resetGame();
            }, 2000);
        }
        else {
            if (count >= 9) {
                alert("It's a tie!");
                resetGame();
            }
        }
    });
}

const resetGame = () => {
    boxes.forEach((box) => {
        winner.replaceWith(gameBoard);
        box.textContent = "";
        box.disabled = false;
        turnX = true;
        count = 0;
    });
}