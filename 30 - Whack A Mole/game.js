const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const gameBoard = document.querySelector('.game');

let moleTimeoutId;

const game = {
    isPLaying: false,
    intervalId: "",
    intervalSec: 2000,
    score: 0,
    addPoint() {
        this.score++;
        scoreBoard.textContent = this.score;
    },
    refreshScoreBoard() {
        scoreBoard.textContent = this.score;
    }
};

const getRandomHole = () => {
    const rndNum = Math.floor(Math.random() * holes.length);
    return holes[rndNum];
};

const getRandomSecs = () => {
    return Math.floor(
        Math.random() * (1000 - 200) + 200
    );
};

const startGame = () => {
    game.isPLaying = true;
    game.score = 0;
    game.refreshScoreBoard();
    clearInterval(game.intervalId);


    game.intervalId = setInterval(() => {
        // Select random hole
        const rndHole = getRandomHole();
        // add class
        rndHole.classList.add('up');
        // set timeout
        setTimeout(() => {
            rndHole.classList.remove('up');
        }, getRandomSecs());

    }, game.intervalSec);

};


const handleClick = ({target: clickMole}) => {

    if (clickMole.classList.contains('mole')) {
        game.addPoint();

        const clickedHole = clickMole.closest('.hole');
        clickedHole.classList.remove('up');
    }


};

gameBoard.addEventListener('click', handleClick);