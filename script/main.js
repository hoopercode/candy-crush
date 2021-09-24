document.addEventListener('DOMContentLoaded', () => {


let score = 0;
const grid = document.querySelector(".grid");
const width = 8;
const squares = []
const candyColors = [
  "red",
  "yellow",
  "orange",
  "purple",
  "green",
  "blue"

]

//Creating the Board
function createBoard() {
  for (let i = 0;  i < width*width; i++) {
    const square = document.createElement('div'); //Talk about this
    square.setAttribute('draggable', true) //Talk about this
    square.setAttribute("id", i)
    let randomColor = Math.floor(Math.random()* candyColors.length)
    square.style.background = candyColors[randomColor]
    grid.appendChild(square) //Talk about this
    squares.push(square);
    
  }
}
createBoard()


})
