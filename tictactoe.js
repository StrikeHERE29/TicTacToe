let statusText = document.querySelector(".statusText");
let cells = document.querySelectorAll(".cell");
let resetBtn = document.querySelector(".reset");

let winConditions = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let options = ["","","","","","","","","",];
let currentPlayer = "X";
let running = false;


initializeGame();

function initializeGame(){
cells.forEach(cell => cell.addEventListener("click", cellClicked));
resetBtn.addEventListener("click", restartGame);
statusText.textContent = `${currentPlayer}'s turn`
}

function cellClicked(){
const cellIndex = this.getAttribute("cellIndex");
}

function updateCell(cell, index){

}

function changePlayer(){

}

function checkWinner(){

}

function restartGame(){
    
}