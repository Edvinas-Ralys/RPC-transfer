        // adding buttons

//player buttons

let player;
let computer;

const buttonRock = document.querySelector(`#rock`);
buttonRock.addEventListener(`click`, rockFunction );

const buttonPaper = document.querySelector(`#paper`);
buttonPaper.addEventListener(`click`, paperFunction);

const buttonScissors = document.querySelector(`#scissors`);
buttonScissors.addEventListener(`click`, scissorsFunction)

//computer buttons

const buttonGenerate = document.querySelector(`#generate`);
buttonGenerate.addEventListener(`click`, generateFunction);

//play button

const buttonPlay = document.querySelector(`#play`);
buttonPlay.addEventListener(`click`, playGame);

// reset button

const resetButton = document.querySelector(`#reset`);
resetButton.addEventListener(`click`, resetGame)


        //functions to display selections

//player selection

function rockFunction(){
    document.getElementById(`playerSelectBox`).innerHTML = `Rock`;
    player = `Rock`;
};
function paperFunction(){
    document.getElementById(`playerSelectBox`).innerHTML = `Paper`;
    player = `Paper`;
};
function scissorsFunction (){
    document.getElementById(`playerSelectBox`).innerHTML = `Scissors`;
    player = `Scissors`;
};

//computer selection
buttonPlay.disabled = true;
function generateFunction(){
    document.getElementById(`computerSelectBox`).innerHTML = `?????`;
    let random = Math.random();
    if(random <=0.3333){
        computer = `Paper`;
    }
    else if(random >=0.6666){
        computer = `Rock`;
    }
    else{
        computer = `Scissors`;
    }
    console.log(computer);
    buttonPlay.disabled = false;
};
            //game function

let gameCount = document.getElementById(`gameCount`);
let playerScore = document.getElementById(`playerScore`);
let computerScore = document.getElementById(`computerScore`);
let drawGames = document.getElementById(`drawGames`);
let playerSide = document.getElementById(`playerSide`)
let computerSide = document.getElementById(`computerSide`);

let draw = `It's a draw!`;
let playerWin = `Player won this round!`;
let compWin = `Computer won this round!`;
let gameReset = ``;
let i = 0;
let j = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 1;
let playerWinGame = `Player won the game!`;
let computerWinGame = `Computer won the game!`;
let drawGame = `The game is draw!`;
let counter = document.getElementById(`counter`);
let roundCount = document.getElementById(`round`);
roundCount.innerHTML = `Round ` + e;


function playGame(){
    buttonPlay.disabled = true;
    buttonGenerate.disabled = true;
    buttonPaper.disabled = true;
    buttonRock.disabled = true;
    buttonScissors.disabled = true;
    document.getElementById(`computerSelectBox`).innerHTML = computer;
    document.getElementById(`gameResult`).innerHTML;
    gameCount.innerHTML = `Game games played: ` + ++i;
    if(player === computer){
        document.getElementById(`gameResult`).innerHTML = draw;
        console.log(draw);
        drawGames.innerHTML = `Draws: ` + ++j;
        draw;
    }
    else if ((player === `Rock` && computer === `Scissors`)||
            (player === `Paper` && computer === `Rock`)||
            (player === `Scissors` && computer === `Paper`)){
        console.log(playerWin);
        document.getElementById(`gameResult`).innerHTML = playerWin;
        playerScore.innerHTML = `Player: ` + ++a;
        playerWin;
        ++c;
    }
    else {
        console.log(compWin)
        document.getElementById(`gameResult`).innerHTML = compWin;
        computerScore.innerHTML += 1;
        computerScore.innerHTML = `Computer: ` + ++b;
        compWin;
        ++d;
    };

    if((i % 5 === 0) && (c > d)){
        playerSide.style.cssText = `background-color: rgb(150, 229, 148); border: 5px solid rgb(88,151,85);`
        document.getElementById(`gameResult`).innerHTML = playerWinGame;
    }
    else if ((i % 5 === 0) && (c < d)) {
        computerSide.style.cssText = `background-color: rgb(150, 229, 148); border: 5px solid rgb(88,151,85);`
        document.getElementById(`gameResult`).innerHTML = computerWinGame;
    }
    else if ((i % 5 === 0) && (c === d)){
        document.getElementById(`gameResult`).innerHTML = drawGame;
    };
    if(i % 5 === 0){
    e = 0;
    };
    counter.innerHTML = c + ` : ` + d;
};


function resetGame(){
    roundCount.innerHTML = `Round ` + ++e;
    if(i % 5 === 0){
    c = 0;
    d = 0;
    }
    counter.innerHTML = c + ` : ` + d;
    buttonPlay.disabled = false;
    buttonGenerate.disabled = false;
    buttonPaper.disabled = false;
    buttonRock.disabled = false;
    buttonScissors.disabled = false;
    document.getElementById(`gameResult`).innerHTML = gameReset;
    document.getElementById(`computerSelectBox`).innerHTML = gameReset;
    document.getElementById(`playerSelectBox`).innerHTML = gameReset;
    buttonPlay.disabled = true;
    playerSide.style.cssText = `background-color: rgb(25, 31, 87);`;
    computerSide.style.cssText = `background-color: rgb(25, 31, 87);`;
};










































//Plays 5 rounds. Displays score counter, announces round winner.
//After 5 rounds displays winner of the game. End
// for(let i = 1; i < 6; i++){
//     console.log(`Round ` + i)
//     let round = game();
//     if(round === draw){
//         console.log(draw),
//         drawCount++
//     }
//     else if (round === playerWin) {
//         console.log(playerWin),
//         playerScore++
//     }
//     else{
//         console.log(computerWin),
//         computerScore++
//     }
//     console.log(`Draws: ` + drawCount, `Player: ` + playerScore, `Computer: ${computerScore}`);
// }
// if(i = 6 && playerScore > computerScore){
//     console.log(`Player won the game, congratulations!`);
// }
// else if (i = 6 && playerScore < computerScore){
//     console.log(`Computer won the game, you suck!`)
// }
// else{
//     console.log(`The game is a draw`)
