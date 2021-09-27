const refresh = document.addEventListener('DOMContentLoaded', () => {
  


const candyReset = document.querySelector(".candy__reset");
const grid = document.querySelector(".grid");
const scoreTrack = document.querySelector(".score")
const width = 8;
const squares = []
const candyColors = [
  "#241E4E",
  "#960200",
  "#CE6C47",
  "#FFD046",
  "#EADAA2",
  "#008f96"

]
let score = 0;
  scoreTrack.style.display = "none"
setTimeout(function(){
  scoreTrack.style.display = "block"
  scoreTrack.innerHTML = 0
}, 1000);

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

function clearBoard() {
  grid.innerHTML = "";
  for (let i = 0;  i < width*width; i++) {
    const square = document.createElement('div'); //Talk about this
    square.setAttribute('draggable', true) //Talk about this
    square.setAttribute("id", i)
    let randomColor = Math.floor(Math.random()* candyColors.length)
    square.style.background = candyColors[randomColor]
    grid.appendChild(square) //Talk about this
    squares.push(square);
    squares.forEach(square => square.addEventListener("dragstart", dragStart))
squares.forEach(square => square.addEventListener("dragend", dragEnd))
squares.forEach(square => square.addEventListener("dragover", dragOver))
squares.forEach(square => square.addEventListener("dragenter", dragEnter))
squares.forEach(square => square.addEventListener("dragleave", dragLeave))
squares.forEach(square => square.addEventListener("drop", dragDrop))  
  }
  
}

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
  squareIdBeingDragged = parseInt(this.id)//takes the ID of whatever is being parsed into this function. e.g. (id: 01)


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
  colorBeingReplaced = this.style.backgroundColor//color of square that is being replaced
  squareIdBeingReplaced = parseInt(this.id)//id of square being replaced
  this.style.backgroundColor = colorBeingDragged // changes color of destination background to that of the one being dragged
  squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced //changes the background color of the square being dragged to that of the one dragged on top of it
  

}

function dragEnd () {
  
//what is a valid move? //Think of this as a big cross with -1 and +1 going left and right and the -width and +width being up and down a row.
let validMoves = [
  squareIdBeingDragged -1,
  squareIdBeingDragged -width,
  squareIdBeingDragged +1,
  squareIdBeingDragged +width
]

let validMove = validMoves.includes(squareIdBeingReplaced) //This looks at the above in terms of numbers e.g. if the square had an ID of 6, does that number match up with the above rules?

if (squareIdBeingReplaced && validMove) {
  squareIdBeingReplaced = null;//Giving the square an ID of null?

} else if (squareIdBeingReplaced && !validMove) {
  squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
  squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;

} else squares[squareIdBeingDragged].style.backgroundColor = colorBeingdragged
}
//How to get candies down

function moveDown() {
  for (i=0; i < 56; i++) {//56 because of the one row less than 64
   if(squares[i+width].style.backgroundColor === "") {//if row below is blank
     squares[i+width].style.backgroundColor = squares[i].style.backgroundColor;//change background color of i+width to whatever color i was
     squares[i].style.backgroundColor = "";//change background color of i to blank to finish off the fall down
   } 
  }
}
//Checking for Matches
//check for row of Three

function checkRowForThree () {
for (i =0; i <= 61; i++) {
  let rowOfThree = [i, i+1, i+2];
  let decidedColor = squares[i].style.backgroundColor;
  const isBlank = squares[i].style.backgroundColor === "";
  const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38 ,39, 46, 47, 54, 55];

  if (notValid.includes(i)) continue //learn about continue function

  if (rowOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
    score += 3
    scoreTrack.innerHTML=score;
    rowOfThree.forEach(index => {
      squares[index].style.backgroundColor = ""
    })
  }

}

}
checkRowForThree()

//Check for Column of Three
function checkColumnForThree () {
for (i =0; i <= 47; i++) {
  let columnOfThree = [i, i+width, i+(width*2)]
  let decidedColor = squares[i].style.backgroundColor
  const isBlank = squares[i].style.backgroundColor === ""

  if (columnOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
    score += 3
    scoreTrack.innerHTML=score;
    columnOfThree.forEach(index => {
      squares[index].style.backgroundColor = "";
    })
  }

}

}
checkColumnForThree()

//check for row of Four

function checkRowForFour () {
for (i =0; i <= 61; i++) {
  let rowOfFour = [i, i+1, i+2, i+3];
  let decidedColor = squares[i].style.backgroundColor;
  const isBlank = squares[i].style.backgroundColor === "";
  const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38 ,39, 45, 46, 47, 53, 54, 55];

  if (notValid.includes(i)) continue //learn about continue function

  if (rowOfFour.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
    score += 4
    scoreTrack.innerHTML=score;
    rowOfFour.forEach(index => {
      squares[index].style.backgroundColor = "";
    })
  }

}

}
checkRowForFour()

//Check for Column of Four
function checkColumnForFour () {
for (i =0; i < 39; i++) {
  let columnOfFour = [i, i+width, i+(width*2), i+(width*3)]
  let decidedColor = squares[i].style.backgroundColor
  const isBlank = squares[i].style.backgroundColor === ""

  if (columnOfFour.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
    score += 4
    scoreTrack.innerHTML=score;
    columnOfFour.forEach(index => {
      squares[index].style.backgroundColor = "";

    })
  }

}
// candyReset.addEventListener("click", clearBoard)
}
checkColumnForFour()

window.setInterval(function() {
moveDown() 
checkColumnForFour()
checkRowForFour()
checkColumnForThree()
checkRowForThree()
},100)


})


