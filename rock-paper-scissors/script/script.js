const score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
};

updateScoreElement();

//Method -->1
/*if(score === null){
  score = {
    wins:0,
    losses:0,
    ties:0
  }
}*/
//Method-->2
/*if(score === null){
  score = {
    wins:0,
    losses:0,
    ties:0
  }
}*/

function autoPlay(){
  setInterval(function(){
    playGame();
  },1000);
}

let isAutoPlaying = true;
let intervalId ;
function autoPlay(){
  if(isAutoPlaying){
   intervalId =  setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = false ; 
  }else{
    clearInterval(intervalId);
    isAutoPlaying = true;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  })

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  })

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });
document.querySelector('.js-reset-score-button')  
  .addEventListener('click', () => {
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updateScoreElement();
  });
document.querySelector('.js-autoplay-button')
  .addEventListener('click', () =>{
    autoPlay();
  })

document.body.addEventListener('keydown', (event)=>{
  if(event.key === 'r'){
    playGame('rock');
  }

  else if(event.key === 'p'){
    playGame('paper');
  }

  else if(event.key === 's'){
    playGame('scissors');
  }
  else if(event.key === 'c'){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updateScoreElement();
  }
  else if(event.key === 'a'){
    autoPlay();
  }
  
})

function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result;

    if(playerMove === 'scissors'){
        if (computerMove === 'scissors'){
      result = 'Tie'
      }
    else if (computerMove === 'rock'){
      result = 'You Lose'
      }
    else if (computerMove === 'paper'){
      result = 'You Won' 
      }
    }

    else if(playerMove === 'paper') {
        if (computerMove === 'paper'){
    result = 'Tie'
    }
  else if (computerMove === 'scissors'){
    result = 'You Lose'
    }
  else if (computerMove === 'rock'){
    result = 'You Won'
    }
    }
    
    else if (playerMove === 'rock'){
        if (computerMove === 'rock'){
      result = 'Tie'
    }
    else if (computerMove === 'paper'){
      result = 'You Lose'
    }
    else if (computerMove === 'scissors'){
      result = 'You Won'
    }
    }

    if(result === 'You Won'){
      score.wins ++ ;
    } else if(result === 'You Lose'){
      score.losses++ ;
    }else if(result === 'Tie'){
      score.ties++;
    }

    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.js-result').
  innerHTML = `${result}.`;
document.querySelector('.js-moves').
  innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;

    updateScoreElement();
  }

function updateScoreElement(){
  document.querySelector('.js-score').
  innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  
}


function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';
  if(randomNumber >= 0 && randomNumber <1/3){
  computerMove = 'rock';
  } else if (randomNumber >=1/3 && randomNumber <= 2/3){
  computerMove = 'paper';
  }else if(randomNumber >= 2/3 && randomNumber < 1){
  computerMove = 'scissors';
  }
  return computerMove;//The code ended here successfully 
  console.log('hello')// This code will not run.
  }