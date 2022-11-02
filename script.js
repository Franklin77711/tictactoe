const playarea = document.getElementById("playare");
const squares = document.querySelectorAll(".square");
const restartBtn = document.getElementById("reset");
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

//user input X
for (const square of squares) {
    square.addEventListener("click", function addX(){
        if(square.textContent == ""){
        square.textContent = "X";
        square.setAttribute("class", "X square");
    }
})

}
function addO(){
    
}

//clear
function clear(){
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent="";  
    } 
}
restartBtn.addEventListener("click", clear);
//check win
function checkWin() {
    return winCondition.some(combination => {
      return combination.every(index => {
        return (squares[index].classList.contains("X"))
      }
    )})
    }