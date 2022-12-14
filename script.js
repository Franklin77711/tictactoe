const playarea = document.getElementById("playarea");
const squares = document.querySelectorAll(".square");
const restartBtn = document.getElementById("restart");
const anotherRound = document.getElementById("reset");
const popUp = document.getElementById("popup");
const overlay = document.querySelector(".overlay");
const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const human = "X";
const AI = "O";

/*let board;

startGame();

function startGame(){
    for (const square of squares) {
        square.textContent="";
        board = Array.from(Array(9).keys());
    }
}*/

//user input X with winner Check
for (const square of squares) {
    square.addEventListener("click", function addX(){
        if(square.textContent == ""){
        square.textContent = "X";
            if (checkWinPlayer() == true){
                popUp.style.visibility = "visible";
                overlay.classList.add("active")
        }
    }
})
}


//clear and restart
function clear(){
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent="";
    } 
    popUp.style.visibility = "hidden";
    overlay.classList.remove("active");
}
restartBtn.addEventListener("click", clear);
anotherRound.addEventListener("click", clear);


//check win
function checkWinPlayer() {
    return winCondition.some(combination => {
        return combination.every(index => {
            return (squares[index].textContent=="X")
            }
        )})
    }
function checkWinAI() {
    return winCondition.some(combination => {
        return combination.every(index => {
            return (squares[index].textContent=="O")
            }
        )})
    }

//AI

/*function emptyIndex(emptyIndex){
    for (let i = 0; i < squares.length; i++) {
        let emptyIndex = squares[i].textContent="";
    } 
}

function addO(){
    for(const square of squares){
        if(square != "X" || square !="O")
        square.textContent="O"
            if(checkWinAI()==true){
                popUp.style.visibility = "visible";
                overlay.classList.add("active")
            }
    }
 }*/
