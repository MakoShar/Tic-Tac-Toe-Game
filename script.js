let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");

// Box IDS
let b0 = document.getElementById("0");
let b1 = document.getElementById("1");
let b2 = document.getElementById("2");

let b3 = document.getElementById("3");
let b4 = document.getElementById("4");
let b5 = document.getElementById("5");

let b6 = document.getElementById("6");
let b7 = document.getElementById("7");  
let b8 = document.getElementById("8");

let turnX = true;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX === true){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const checkWinner = () => {
    if (winningCombinations.some((combination) => combination.every((boxId) => boxes[boxId].innerText === "X"))) {
        alert("X wins");
        boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnX = true;
    
    }
    else if (winningCombinations.some((combination) => combination.every((boxId) => boxes[boxId].innerText === "O"))) {
        alert("O wins");
        boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnX = true;
};
}
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnX = true;
});