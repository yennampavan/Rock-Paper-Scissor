let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
// document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
updatescore();
let res = ''
let com = ''

let isautoplay=false;
let intervalid;
function autoplay(){
    if(!isautoplay){
        intervalid = setInterval(function() {
            const move=commove();
            playermove(move);
        },2000);
        isautoplay=true
    }else{
        clearInterval(intervalid);
        isautoplay=true
    }
    
}
function playermove(playermove) {
    const com = commove()
    if (playermove === 'rock') {
        if (com === 'rock') {
            res = 'Tie';
        }
        else if (com === 'paper') {
            res = 'you lose';
        }
        else if (com === 'scissors') {
            res = 'you win'
        }
    } else if (playermove === 'paper') {
        if (com === 'rock') {
            res = 'you win';
        }
        else if (com === 'paper') {
            res = 'Tie';
        }
        else if (com === 'scissors') {
            res = 'you lose'
        }
    } else if (playermove === 'scissors') {
        if (com === 'rock') {
            res = 'you lose';
        }
        else if (com === 'paper') {
            res = 'you win';
        }
        else if (com === 'scissors') {
            res = 'Tie'
        }
    }


    if (res === 'you win') {
        score.wins += 1;
    } else if (res === 'you lose') {
        score.losses += 1;
    } else if (res === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    // alert(`You picked ${playerMove}. Computer picked ${com}. ${res}
    // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    // document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
    updatescore();
    document.querySelector('.js-result').innerHTML=res;
    document.querySelector('.js-move').innerHTML=`You
<img class="move-icon" src="${playermove}.png" alt="">
<img class="move-icon" src="${com}.png" alt=""> 
Computer`
//             alert(`You picked ${playermove}. Computer picked ${com}. ${res}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

}

function updatescore(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`

}


function commove() {
    const randNum = Math.random();

    if (randNum >= 0 && randNum < 1 / 3) {
        com = 'rock';
    }
    else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        com = 'paper';
    } else if (randNum >= 2 / 3 && randNum < 1) {
        com = 'scissors'
    }
    return com
}