const choices = document.querySelectorAll('.choice');
const score = document.querySelector('#score');
const result = document.querySelector('#result');
const restart = document.querySelector('#restart');
const modal = document.querySelector('.modal');

const scoreboard = {
    player: 0,
    comp: 0
}

function play(e) {
    restart.style.visibility = 'visible';

    const playerChoice = e.target.id;
    const compChoice = getCompChoice();

    const winner = getWinner(playerChoice, compChoice);

    showWinner(winner, compChoice);
}

function getCompChoice() {
    const randomChoice = Math.random();
    
    if (randomChoice < 0.3333) {
        return 'rock';
    }
    if (randomChoice <+ 0.6667) {
        return 'paper';

    }
    else {
        return 'scissors';

    }
}

function getWinner(plyr, comp) {
    if (plyr === comp) {
        return 'draw';
    }
    else if (plyr === 'rock') {
        if (comp === 'paper') {
            return 'computer';
        }
        else {
            return 'player';
        }
    }
    else if (plyr === 'paper') {
        if (comp === 'scissors') {
            return 'computer';
        }
        else {
            return 'player';
        }
    }
    else if (plyr === 'scissors') {
        if (comp === 'rock') {
            return 'computer';
        }
        else {
            return 'player';
        }
    }
}

function showWinner(winner, compChoice) {
    if (winner === 'player') {
        // increase scoreboard count
        scoreboard.player++;

        // show result in modal
        result.innerHTML = `
            <h1 class="text-win">You Win!</h1>
            <i class="fas fa-hand-${compChoice} fa-5x"></i>
            <p>Comp chose <strong>${compChoice}</strong></p>
        `;
    }
    else if (winner === 'computer') {
        // increase scoreboard count
        scoreboard.comp++;

        // show result in modal
        result.innerHTML = `
            <h1 class="text-lose">You Lose!</h1>
            <i class="fas fa-hand-${compChoice} fa-5x"></i>
            <p>Comp chose <strong>${compChoice}</strong></p>
        `;
    }
    else {
        result.innerHTML = `
            <h1 class="text-draw">It's a Draw!</h1>
            <i class="fas fa-hand-${compChoice} fa-5x"></i>
            <p>Comp chose <strong>${compChoice}</strong></p>
        `;
    }

    // show score
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Comp: ${scoreboard.comp}</p>
    `;

    modal.style.display = 'block';
}

function restartGame() {
    scoreboard.player = 0;
    scoreboard.comp = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Comp: 0</p>
    `;

    restart.style.visibility = 'hidden';
}

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

choices.forEach(choice => choice.addEventListener('click', play));

window.addEventListener('click', clearModal);

restart.addEventListener('click', restartGame);