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
    let randomFirstIndex = Math.floor(Math.random() * firstNames.length);
    let randomLastIndex = Math.floor(Math.random() * lastNames.length);

    let randomFirstName = firstNames[randomFirstIndex];
    let randomLastName = lastNames[randomLastIndex];

    return randomFirstName + ' ' + randomLastName;
}
console.log('Player\'s witch name: ' + generateName());
//Function to update game text
function updateGame() {
    let gameContainer = document.getElementById('game-container');
    let storyContent = {

        'welcome': `
            <h2> Welcome to the Witch\'s Diary </h2>
            <p>Before this enchanted journal allows you in, tell it your name:</p>
            <input type="text" id="witchName" placeholder="Enter your witch name..." required>
            <br>
            <button id="generator" onclick="document.getElementById('witchName').value = generateName();"><span class="fa">&#xf074</span> or click here to generate one</button>
            <br>
            <button class="button-green"  onclick="startGame()">Play!</button>
            `,

        'start': `
            <p>
                <em>It was a day much like any other for ${tracker.witchName}, except for one small fluffy detail...</em>
            </p>
            <button class="button-animated"  onclick="playerChoice('intro')">Next</button>
            `,

            'intro': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch">
            <p>
                I woke up that morning feeling refreshed but it wasn't before long that the serenity in my heart was flushed away. On my usual happy stroll to the kitchen, something felt amiss. My house was indeed very quiet and the silence threatened to deafen me.
            </p>
            <p>
                Kayla! I was missing the sound of her little fluffy footsteps following behind mine. I almost lost my mind looking for her. I called out her name, looked over, under, inside and even behind every possible hiding spot in the house... Nothing.
            </p>
            <p>
                And then I noticed: the window above her bed was open...
            </p>
            <button class="button-animated"  onclick="playerChoice('goOut')">Let's go outside...</button>
            `,

            'goOut': `
                <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch">
                <p>
                    I felt pretty determined when I left the house but, now...
                </p>
                <p>
                    Only a few steps into the woods and I found myself paralysed. The haunting song of the wind, the grass crying under unknown footsteps and glowing eyes lighting a path far from welcoming.
                </p>
                <p>
                    There is no shame in being scared, ${tracker.witchName}, but Time is ticking. What should I do?
                </p>
                <button class="button-animated"  onclick="playerChoice('continue')">Find courage?</button>
                <button class="button2"  onclick="playerChoice('retreat')">Give up</button>
                `,

                'continue': `
                <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch">
                <p>
                    My mama used to tell me that fear is the sister of courage. I've grown to learn that it is somewhat true: wherever I go, courage is always there!
                </p>
                <p>
                    So I turned on my feet and ran straight to her house! Who better to help me brave the dark woods than a strong knight? <img src="./assets/images/knight-animated.webp" alt="animation of the knight holding her sword">
                </p>
                <button class="button-animated"  onclick="playerChoice('next')">Back on track!</button>
                `,

                'retreat': `
                <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch">
                <p>
                    I ran back home...
                </p>
                <p>
                    I guess this is game over, ${tracker.witchName}... I hope Kayla comes back to me soon. :(
                </p>
                <br>
                <p>Would you like to try again?</p>
                <button class="button2"  onclick="playerChoice('goOut')">Turn back time</button>
                <button class="button-animated"  onclick="playerChoice('theEnd')">No, thank you</button>
                `,
            

    }
}

/*Function to handle player choices
And update progress tracker*/
function playerChoice(option) {
    switch(option) {
        //Introduction
        case 'intro':
            tracker.progress = 'intro';
            break;
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
        //Back on track
        case 'next':
            tracker.progress = 'next';
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
        case 'theEnd':
            tracker.progress = 'theEnd';
            break;
    }
    updateGame();
}

/*Function to launch the game when
The player presses the start button*/
function startGame() {
    let witchName = document.getElementById('witchName').value;
    tracker.witchName = witchName;
    tracker.progress = 'start';
    console.log('Game has started!');
    updateGame();
}
//Calling the function so the content loads on the first visit
updateGame();