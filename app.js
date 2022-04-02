const p1Games = document.querySelector( '#p1-games' );
const p1Points = document.querySelector( '#p1-points' );

const p2Games = document.querySelector( '#p2-games' );
const p2Points = document.querySelector( '#p2-points' );

const servicePlayer = document.querySelector( '#service-player');

const btnPlayerOne = document.querySelector( '#btn-playerOne' );
const btnPlayerTwo = document.querySelector( '#btn-playerTwo' );

let p1PointsScore = 0;
let p2PointsScore = 0;

let serviceCount = 1;
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

btnPlayerOne.addEventListener( 'click', (evt) => {
    // Are we serving or returning?
    if ( serviceIsWith === 1 ) {
        if ( rallyCount === 0 ) {
            if ( serviceCount === 1 ) {
                console.log('Player One: First Service...');
                serviceCount++;
            } else {
                console.log('Player One: Second Service...');
            }
            btnPlayerOne.disabled = true;
            btnPlayerTwo.disabled = false;    
            btnPlayerOne.classList.remove( 'is-success' );
            btnPlayerTwo.classList.add( 'is-success' );
        } else {
            returnsBall = Math.floor(Math.random() * 2) + 1;
            if ( returnsBall === 1 ) {
                console.log('Player One: Ball missed...');
                console.log('Point to Player Two...');
                rallyCount = 0;
                p2PointsScore++;

            } else {
                console.log('Player One: Returns ball...[I am currently server]');
                rallyCount++;
                btnPlayerOne.disabled = true;
                btnPlayerTwo.disabled = false;    
                btnPlayerOne.classList.remove( 'is-success' );
                btnPlayerTwo.classList.add( 'is-success' );
            }
        }
    } else {
        console.log('Player One: Returns ball...[Im not server]');
        rallyCount++; 
        btnPlayerOne.disabled = true;
        btnPlayerTwo.disabled = false;    
        btnPlayerOne.classList.remove( 'is-success' );
        btnPlayerTwo.classList.add( 'is-success' );       
    }
})
   

// player Two actions

btnPlayerTwo.addEventListener( 'click', (evt) => {
    rallyCount++;
    console.log('Player Two: Returns ball...')
    btnPlayerTwo.disabled = true;
    btnPlayerOne.disabled = false;
    btnPlayerTwo.classList.remove( 'is-success' );
    btnPlayerOne.classList.add( 'is-success' );
})
