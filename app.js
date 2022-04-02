const p1Games = document.querySelector( '#p1-games' );
const p1Points = document.querySelector( '#p1-points' );

const p2Games = document.querySelector( '#p2-games' );
const p2Points = document.querySelector( '#p2-points' );

const servicePlayer = document.querySelector( '#service-player');

const btnPlayerOne = document.querySelector( '#btn-playerOne' );
const btnPlayerTwo = document.querySelector( '#btn-playerTwo' );

let p1PointsScore = 0;
let p2PointsScore = 0;

let serviceCount = 0;
let rallyCount = 0;

let serviceIsWith = 0;
let returnsBall = 0;

window.onload = (event) => {
    // Lets set up for a new game
    p1Games.outerHTML = "0";
    p1Points.outerHTML = "0";
    p2Games.outerHTML = "0";
    p2Points.outerHTML = "0";

    serviceIsWith = Math.floor(Math.random() * 2) + 1;
    if ( serviceIsWith === 1 ) {
        servicePlayer.outerHTML = 'One';
        btnPlayerTwo.disabled = true;
        btnPlayerOne.classList.add( 'is-success' );
    } else {
        servicePlayer.outerHTML = 'Two';
        btnPlayerOne.disabled = true;
        btnPlayerTwo.classList.add( 'is-success' );
    }
};

// player One actions
btnPlayerOne.addEventListener( 'click', (evt) => {
    // Lets hit the ball
    hitsBall( 1 );
})

// player Two actions
btnPlayerTwo.addEventListener( 'click', (evt) => {
    // Lets hit the ball
    hitsBall( 2 );
})

function hitsBall ( player ) {
// Determine if player is serving or returning
// If serving then return directly TRUE
// Otherwise decide if a successful hit or not
    swapPlayer ( player );
    if ( serviceIsWith === player ) {
        console.log(`[${serviceCount}] Player ${player} serves....`);
        return true;
    } else {
        if ( (Math.floor(Math.random() * 2) + 1) === 1 ) {
            console.log(`Player ${player} fails to return the ball....`);
            return false;
        } else {
            console.log(`Player ${player} returns the ball successfully....`);
            return true;
        }
    }
}

function swapPlayer ( player) {
    if ( player === 1 ) {
        btnPlayerOne.disabled = true;
        btnPlayerOne.classList.remove( 'is-success' );
        btnPlayerTwo.disabled = false;
        btnPlayerTwo.classList.add( 'is-success' );
    } else {
        btnPlayerTwo.disabled = true;
        btnPlayerTwo.classList.remove( 'is-success' );
        btnPlayerOne.disabled = false;
        btnPlayerOne.classList.add( 'is-success' );
    }
}