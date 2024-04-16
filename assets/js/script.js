//Set a tracker for player's remaining lives(attempts) and where they are in the game
let tracker = {
    lives: 3, //default/max lives
    progress: 'Welcome', //first step of flowchart
}

//Function to handle player choices and update progress tracker
function playerChoice(option) {
    switch(option){
        //First choice
        case 'continue':
            tracker.progress = 'continue';
            break;
        case 'retreat':
            tracker.progress = 'retreat';
            break;
        //Second choice
        case 'left':
            tracker.progress = 'left';
            break;
        case 'right':
            tracker.progress = 'right';
            break;
        //Third choice
        case 'potion':
            tracker.progress = 'potion';
            break;
        case 'sword':
            tracker.progress = 'sword';
            break;
        //Fourth choice
        case 'keepPet':
            tracker.progress = 'keepPet';
            break;
        case 'goOn':
            tracker.progress = 'goOn';
            break;
        //Fifth choice
        case 'cucumber':
            tracker.progress = 'cucumber';
            break;
        case 'meow':
            tracker.progress = 'meow';
            break;
    }
    updateGame();
}


//Function to update game text

//Function to launch the game when the player presses the start button
