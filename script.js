
function getComputerChoice() {
    let number = Math.floor(Math.random() * 100 + 1);
    console.log(number);
 /*   if (number < 33) {
        console.log("rock"); 
    }
    if (66 > number > 33) {
    console.log("scissor");
    }
    if (number > 66) {
    console.log("paper");
    }
*/
    if (number < 33) {
        console.log("rock"); ;
      } else if (number < 66) {
        console.log("scissor");
      } else {
        console.log("paper");
      }
}

/* 
input rock, paper, scissor here
give out put, "win" or "lose" (determined by player choice)
*/

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

getComputerChoice();

// 9/13 practice git commit 2 //
// 9/13 practice git commit last round//