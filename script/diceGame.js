const playerOneShakeButton = document.querySelector("#shakePlayerOne");
const playerTwoShakeButton = document.querySelector("#shakePlayerTwo");
const cb02 = document.getElementById('cb02');
const playerOneChecks = document.querySelectorAll(".playerOneChecks")
const playerOneChecksArray = Array.from(playerOneChecks)
const playerTwoChecks = document.querySelectorAll(".playerTwoChecks")
const playerTwoChecksArray = Array.from(playerTwoChecks)
const changePlayerNamesButton = document.querySelector(".playerInput__enter-button")



playerOneShakeButton.addEventListener(('click'), () => rollPlayerOne());
let images =[
  "assets/dice-01.svg",
  "assets/dice-02.svg",
  "assets/dice-03.svg",
  "assets/dice-04.svg",
  "assets/dice-05.svg",
  "assets/dice-06.svg"];



let dice = document.querySelectorAll("img");

const rollPlayerOne = () => {
  dice.forEach((die) => {
    die.classList.add("shake");
  });
  setTimeout(function() {
    dice.forEach(function(die) {
      die.classList.remove("shake");
    });
    let dieOneValue = Math.floor((Math.random()*6))
    ;
    let dieTwoValue = Math.floor((Math.random()*6))
    ;
    let dieThreeValue = Math.floor((Math.random()*6))
    ;
    let dieFourValue = Math.floor((Math.random()*6))
    ;
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    document.querySelector("#die-3").setAttribute("src", images[dieThreeValue]);
    document.querySelector("#die-4").setAttribute("src", images[dieFourValue]);
    const playerOneTotal = ((dieOneValue +1) + (dieTwoValue +1))
    const playerTwoTotal = ((dieThreeValue +1) + (dieFourValue +1))
    document.querySelector("#playOneTotal").innerHTML = "Your roll is " + ((dieOneValue +1) + (dieTwoValue +1))
    document.querySelector("#playTwoTotal").innerHTML = "Your roll is " + ((dieThreeValue +1) + (dieFourValue +1))
  
    switch (playerOneTotal) {
      case 2: 
      playerOneChecksArray[0].checked= true;
      break
      case 3: 
      playerOneChecksArray[1].checked = true;
      break
      case 4: 
      playerOneChecksArray[2].checked = true;
      break
      case 5: 
      playerOneChecksArray[3].checked = true;
      break
      case 6: 
      playerOneChecksArray[4].checked = true;
      break
      case 7: 
      playerOneChecksArray[5].checked = true;
      break
      case 8: 
      playerOneChecksArray[6].checked = true;
      break
      case 9: 
      playerOneChecksArray[7].checked = true;
      break
      case 10: 
      playerOneChecksArray[8].checked = true;
      break
      case 11: 
      playerOneChecksArray[9].checked = true;
      break
      case 12: 
      playerOneChecksArray[10].checked = true;
      break
    }

    switch (playerTwoTotal) {
      case 2: 
      playerTwoChecksArray[0].checked= true;
      break
      case 3: 
      playerTwoChecksArray[1].checked = true;
      break
      case 4: 
      playerTwoChecksArray[2].checked = true;
      break
      case 5: 
      playerTwoChecksArray[3].checked = true;
      break
      case 6: 
      playerTwoChecksArray[4].checked = true;
      break
      case 7: 
      playerTwoChecksArray[5].checked = true;
      break
      case 8: 
      playerTwoChecksArray[6].checked = true;
      break
      case 9: 
      playerTwoChecksArray[7].checked = true;
      break
      case 10: 
      playerTwoChecksArray[8].checked = true;
      break
      case 11: 
      playerTwoChecksArray[9].checked = true;
      break
      case 12: 
      playerTwoChecksArray[10].checked = true;
      break
    }
  },
  1000
  );
  
}
// playerOneShakeButton.addEventListener("click", () => roll());
// playerTwoShakeButton.addEventListener("click", () => roll());

