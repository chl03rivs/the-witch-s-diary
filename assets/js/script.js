/*Set a tracker for player's remaining lives(attempts)
And where they are in the game*/
let tracker = {
    lives: 3, // default/max lives
    progress: 'welcome', // first step of flowchart
}
//Name generator
let firstNames = ['Fiery', 'Burnt', 'Fluffy', 'Dark', 'Lost', 'Wandering', 'Ethereal', 'Fuzzy', 'Wild', 'Calm', 'Unknown', 'Lilac'];
let lastNames = ['Fairy', 'Cauldron', 'Bunny', 'Oak', 'Pentacle', 'Storm', 'Trumpet', 'Curse', 'Owl', 'Cotton'];
function generateName() {
    for (let x=0; x < firstNames.length; x++) {
        for (let y=0; y < lastNames.length; y++){
            console.log('Player\'s witch name: ' + firstNames[x] + ' ' + lastNames[y]);
            document.getElementById('witchName').value = firstNames[x] + ' ' + lastNames[y];
        }
    }
}
//Function to update game text
function updateGame() {
    const gameContainer = document.getElementById('game-container');

    switch (tracker.progress) {
        case 'welcome':
            gameContainer.innerHTML = `
            <h2> Welcome to the Witch\'s Diary </h2>
            <p>Before this enchanted journal allows you in, tell it your name:</p>
            <input type="text" id="witchName" placeholder="Enter your witch name..." required>
            <br>
            <button id="generator" onclick="generateName()"><span class="fa">&#xf074</span> or click here to generate one</button>
            <br>
            <button class="button-green"  onclick="startGame()">Play!</button>
            `;
        break;
        case 'start':
            gameContainer.innerHTML = `
            <p>
                <em>It was a day much like any other for ${tracker.witchName}, except for one small fluffy detail...</em>
            </p>
            <p>
                I woke up that morning feeling refreshed but it wasn't before long that the serenity in my heart was flushed away. On my usual happy stroll to the kitchen, something felt amiss. My house was indeed very quiet and the silence threatened to deafen me.
            </p>
            <p>
                Kayla! I was missing the sound of her little fluffy footsteps following behind mine. I almost lost my mind looking for her. I called out her name, looked over, under, inside and even behind every possible hiding spot in the house... Nothing.
            </p>
            <p>
                And then I noticed: the window above her bed was open...
            </p>
            <button class="button-animated"  onclick="playerChoice('goOut')">Play!</button>
            `;
            break;
    }
}

/*Function to handle player choices
And update progress tracker*/
function playerChoice(option) {
    switch(option) {
        case 'goOut':
            tracker.progress = 'goOut';
            break;
        // First choice
        case 'continue':
            tracker.progress = 'continue';
            break;
        case 'retreat':
            tracker.progress = 'retreat';
            break;
        // Second choice
        case 'left':
            tracker.progress = 'left';
            break;
        case 'right':
            tracker.progress = 'right';
            break;
        // Third choice
        case 'potion':
            tracker.progress = 'potion';
            break;
        case 'sword':
            tracker.progress = 'sword';
            break;
        // Fourth choice
        case 'keepPet':
            tracker.progress = 'keepPet';
            break;
        case 'goOn':
            tracker.progress = 'goOn';
            break;
        // Fifth choice
        case 'cucumber':
            tracker.progress = 'cucumber';
            break;
        case 'meow':
            tracker.progress = 'meow';
            break;
    }
    updateGame();
}

/*Function to launch the game when
The player presses the start button*/
function startGame() {
    const witchName = document.getElementById('witchName').value;
    tracker.witchName = witchName;
    tracker.progress = 'start';
    console.log('Game has started!');
    updateGame();
}
//Calling the function so the content loads on the first visit
updateGame();