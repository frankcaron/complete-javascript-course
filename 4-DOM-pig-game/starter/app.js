/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Vars

const winScore = 100;
const diceSides = 6;
const losingRoll = 1;

var scores, roundScore, activePlayer, currentRoll;

//Roll die

function init(event) {
    reset();
    draw();
    currentRoll = 0;
}

function reset () {

    //Reset vars
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0; //0 = player 1, 1 = player 2
    currentRoll = -1;

    //Reset visuals
    document.querySelector('img.dice').src = "dice-6.png";

    //Add event listeners
    document.querySelector('.btn-new').addEventListener('click',init);
    document.querySelector('.btn-roll').addEventListener('click',doRoll);
    document.querySelector('.btn-hold').addEventListener('click',doHold);
}

function doRoll(event) {

    //Roll
    currentRoll = Math.floor(Math.random() * 6) + 1;
    document.querySelector('img.dice').src = "dice-" + currentRoll + ".png"; 

    //Handle roll
    if(currentRoll !== 1) { 
        roundScore += currentRoll;
    } else {
        //Round over; switch player
        togglePlayer();
    }

    //Draw
    draw();
}

function doHold(event) {
    //Bank score
    scores[activePlayer] += roundScore;

    //Switch player
    togglePlayer();

    //Draw
    draw();
}

function togglePlayer() {
    //Toggle active css
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");

    //Redraw
    roundScore = 0;
    draw();

    //Switch active
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}

function draw() {

    //Update global scores
    document.querySelector('#score-0').textContent = scores[0];
    document.querySelector('#score-1').textContent = scores[1];

    //Update current scores
    if (currentRoll === -1 ) {
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
    } else {
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }

    //Console
    console.log("Active player is " + activePlayer);

}

// Game
init();



/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
