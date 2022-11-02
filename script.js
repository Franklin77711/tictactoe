const playarea = document.getElementById("playare");
const squares = document.querySelectorAll(".square");
const restartBtn = document.getElementById("reset");

//user input X
for (const square of squares) {
    square.addEventListener("click", function addX(){
        square.textContent = "X";
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