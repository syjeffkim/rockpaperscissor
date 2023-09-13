const choices = ["rock", "paper", "scissor"]

function computerChoice() {
  return [Math.floor(Math.random() * choices.length)]

  /* allows you to pick a random number from 0 to > 1 and multiply it by 3 while rounding down. Forces number to be 0, 1, or 2 which will
  be 0 = rock, 1 = paper, 2 = scissor */

}

console.log(computerChoice());