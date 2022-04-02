
const tossOutcome = document.querySelector( "#tossOutcome" );

const btnPlayer1 = document.querySelector( "#btnPlayer1" );
const btnPlayer2 = document.querySelector( "#btnPlayer2" );

const btnPlayer1Bat = document.querySelector( "#btnPlayer1Bat" );
const btnPlayer2Bat = document.querySelector( "#btnPlayer2Bat" );

btnPlayer1.addEventListener( 'click', (evt) => {
    console.log('Player One chooses HEADs...');
    let randNum = Math.random();
    if ( randNum < 0.5 ) {
        tossOutcome.innerHTML= 'Coin landed HEADs side up!, Player One gets to serve First!!';
        btnPlayer1Bat.classList.add( 'is-info' );
        btnPlayer2Bat.disabled = true;
    } else {
        tossOutcome.innerHTML = `Coin landed TAILs side up!, Player Two gets to serve First!!`;  
        btnPlayer2Bat.classList.add( 'is-info' );
        btnPlayer1Bat.disabled = true;    
    }
})

btnPlayer2.addEventListener( 'click', (evt) => {
    console.log('Player Two chooses HEADs...'); 
    let randNum = Math.random();
    if ( randNum < 0.5 ) {
        tossOutcome.innerHTML= 'Coin landed HEADs side up!, Player Two gets to serve First!!';
        btnPlayer2Bat.classList.add( 'is-info' );
        btnPlayer1Bat.disabled = true;
    } else {
        tossOutcome.innerHTML = `Coin landed TAILs side up!, Player One gets to serve First!!`;  
        btnPlayer1Bat.classList.add( 'is-info' );
        btnPlayer2Bat.disabled = true;    
    }  
})




