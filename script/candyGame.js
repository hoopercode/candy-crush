const candyReset = document.querySelector(".candy__reset");
const grid = document.querySelector(".grid");
const scoreTrack = document.querySelector(".scoreContainer__scoreText")
const width = 8;//To use later on to make things easier to understand
const squares = []
const candyColors = [
  "#241E4E",
  "#960200",
  "#CE6C47",
  "#FFD046",
  "#EADAA2",
  "F5F474"

]
let score = 0;
  scoreTrack.style.display = "none"
setTimeout(function(){ //Have to delay due to game lagging setting up
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

//Drag the candies
let homeColor
let destinationColor
let homeId
let destinationId

//"dragging event listeners "
squares.forEach(square => square.addEventListener("dragstart", dragStart))
squares.forEach(square => square.addEventListener("dragend", dragEnd))
squares.forEach(square => square.addEventListener("dragover", dragOver))
squares.forEach(square => square.addEventListener("dragenter", dragEnter))
squares.forEach(square => square.addEventListener("drop", dragDrop))

function dragStart () {
  homeColor = this.style.backgroundColor
  homeId = parseInt(this.id)//takes the ID of whatever is being parsed into this function. e.g. (id: 01)


}

function dragOver (e) {
  e.preventDefault()//allows something to be dragged over
  
}

function dragEnter (e) {
  e.preventDefault()
  //Nothing else necessary here because the actions come when the item is going to be 'dropped' in the function below.
  
}



function dragDrop () {//This function applies to whatever is being landed on.  'this' relates to the item being landed on.  It gives us a chance to steal the color and ID of that square so we can swap them out.

  destinationColor = this.style.backgroundColor//color of square that is being replaced
  destinationId = parseInt(this.id)//id of square being replaced
  this.style.backgroundColor = homeColor // changes color of destinationination background to that of the one being dragged
  squares[homeId].style.backgroundColor = destinationColor //changes the background color of the square being dragged to that of the one dragged on top of it
  

}

function dragEnd () {
  
//what is a valid move? //Think of this as a big cross with -1 and +1 going left and right and the -width and +width being up and down a row.
let validMoves = [
  homeId -1,
  homeId -width,
  homeId +1,
  homeId +width
]

let validMove = validMoves.includes(destinationId) //This looks at the above in terms of numbers e.g. if the square had an ID of 6, does that number match up with the above rules?

if (destinationId && validMove) {
  destinationId = null;//Giving the square an ID of null.  Resetting that value for a fresh start because that ID is no longer associated to that square.

} else if (destinationId && !validMove) {
  squares[destinationId].style.backgroundColor = destinationColor
  squares[homeId].style.backgroundColor = homeColor;
  //assigning colors back to the squares because not a valid move.

} else squares[homeId].style.backgroundColor = homeColor;//square is somewhere random so just give it back its original color
}
//How to get candies down

function moveDown() {
  for (let i=0; i < 56; i++) {//56 because of the one row less than 64
   if(squares[i+width].style.backgroundColor === "") {//if row below is blank
     squares[i+width].style.backgroundColor = squares[i].style.backgroundColor;//change background color of i+width to whatever color i was
     squares[i].style.backgroundColor = "";//change background color of i to blank to finish off the fall down
   } 
  }
}

//Checking for Matches
//check for row of Three

function checkRowForThree () {
for (let i =0; i <= 61; i++) {
  let rowThree = [i, i+1, i+2];
  let matchedColor = squares[i].style.backgroundColor;
  const isBlank = squares[i].style.backgroundColor === "";
  const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38 ,39, 46, 47, 54, 55];

  if (notValid.includes(i)) continue //like a break but it gets me out of the loop JUST in this iteration

  if (rowThree.every(index => squares[index].style.backgroundColor === matchedColor && !isBlank)) {
    score += 3
    scoreTrack.innerHTML=score;
    rowThree.forEach(index => {
      squares[index].style.backgroundColor = ""
    })
  }

}

}
checkRowForThree()

//Check for Column of Three
function checkColumnForThree () {
for (let i =0; i <= 47; i++) {
  let columnThree = [i, i+width, i+(width*2)]
  let matchedColor = squares[i].style.backgroundColor
  const isBlank = squares[i].style.backgroundColor === ""

  if (columnThree.every(index => squares[index].style.backgroundColor === matchedColor && !isBlank)) {
    score += 3
    scoreTrack.innerHTML=score;
    columnThree.forEach(index => {
      squares[index].style.backgroundColor = "";
    })
  }

}

}
checkColumnForThree()

//check for row of Four

function checkRowForFour () {
for (let i =0; i <= 61; i++) {
  let rowFour = [i, i+1, i+2, i+3];
  let matchedColor = squares[i].style.backgroundColor;
  const isBlank = squares[i].style.backgroundColor === "";
  const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38 ,39, 45, 46, 47, 53, 54, 55];

  if (notValid.includes(i)) continue //learn about continue function

  if (rowFour.every(index => squares[index].style.backgroundColor === matchedColor && !isBlank)) {
    score += 4
    scoreTrack.innerHTML=score;
    rowFour.forEach(index => {
      squares[index].style.backgroundColor = "";
    })
  }

}

}
checkRowForFour()

//Check for Column of Four
function checkColumnForFour () {
for (let i =0; i < 39; i++) {
  let columnFour = [i, i+width, i+(width*2), i+(width*3)]
  let matchedColor = squares[i].style.backgroundColor
  const isBlank = squares[i].style.backgroundColor === ""

  if (columnFour.every(index => squares[index].style.backgroundColor === matchedColor && !isBlank)) {
    score += 4;
    console.log(score)
    scoreTrack.innerHTML=score;
    columnFour.forEach(index => {
    squares[index].style.backgroundColor = "";

    })
  }

}
}
checkColumnForFour()


function clearGameGrid () {
  for (let i=0; i < 64; i++) {
    let randomColor = Math.floor(Math.random()* candyColors.length)
    squares[i].style.background = candyColors[randomColor]
    
  }
  setTimeout(function(){ //Have to delay due to game lagging setting up
    scoreTrack.innerHTML = 0;
    score = 0;
  }, 500);
}

candyReset.addEventListener("click", clearGameGrid)

// function gameOver () {
//   const firstColor = []
//   const secondColor = []
//   const thirdColor = []
//   const fourthColor = []
//   const fifthColor = []
//   const sixthColor = []
  

//   for (let i=0; i < 64; i++) {
//     if (squares[i].style.background =  "#241E4E") {
//      firstColor.push(squares[i])
//     }else if (squares[i].style.background =  "#960200"){
//       secondColor.push(squares[i])

//     }else if (squares[i].style.background =  "#CE6C47") {
//       thirdColor.push(squares[i])

//     }else if (squares[i].style.background =  "#FFD046") {
//       fourthColor.push(squares[i])

//     }else if (squares[i].style.background =  "#EADAA2") {
//       fifthColor.push(squares[i])

//     }else if (squares[i].style.background =  "#008f96") {
//       sixthColor.push(squares[i])

//     }
    
//   }

  
// }



window.setInterval(function() {
moveDown() 
checkColumnForFour()
checkRowForFour()
checkColumnForThree()
checkRowForThree()
},100)
