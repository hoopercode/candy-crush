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



//Drag the candies
let colorBeingDragged
let colorBeingReplaced
let squareIdBeingDragged
let squareIdBeingReplaced

squares.forEach(square => square.addEventListener("dragstart", dragStart))
squares.forEach(square => square.addEventListener("dragend", dragEnd))
squares.forEach(square => square.addEventListener("dragover", dragOver))
squares.forEach(square => square.addEventListener("dragenter", dragEnter))
squares.forEach(square => square.addEventListener("dragleave", dragLeave))
squares.forEach(square => square.addEventListener("drop", dragDrop))

function dragStart () {
  colorBeingDragged = this.style.backgroundColor
  squareIdBeingDragged = parseInt(this.id)


}

function dragOver (e) {
  e.preventDefault()
  
}

function dragEnter (e) {
  e.preventDefault()
  
}

function dragLeave () {
  
}



function dragDrop () {
  colorBeingReplaced = this.style.backgroundColor
  squareIdBeingReplaced = parseInt(this.id)
  this.style.backgroundColor = colorBeingDragged
  squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
  

}

function dragEnd () {
  
}
})
