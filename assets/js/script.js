//Set a tracker for player's progress in the game
let tracker = {
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
            <br>
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
            <br>
            <button class="button-animated"  onclick="playerChoice('intro')">Next</button>
        `,

        'intro': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch">
            <p>
                I woke up that morning feeling refreshed but it wasn't before long that the serenity in my heart was flushed away. On my usual happy stroll to the kitchen, something felt amiss. My house was indeed very quiet and the silence threatened to deafen me.
            </p>
            <br>
            <p>
                Kayla! I was missing the sound of her little fluffy footsteps following behind mine. I almost lost my mind looking for her. I called out her name, looked over, under, inside and even behind every possible hiding spot in the house... Nothing.
            </p>
            <br>
            <p>
                And then I noticed: the window above her bed was open...
            </p>
            <br>
            <button class="button-animated"  onclick="playerChoice('goOut')">Let's go outside...</button>
        `,

        'goOut': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch">
            <p>
                I felt pretty determined when I left the house but, now...
            </p>
            <br>
            <p>
                Only a few steps into the woods and I found myself paralysed. The haunting song of the wind, the grass crying under unknown footsteps and glowing eyes lighting a path far from welcoming.
            </p>
            <br>
            <p>
                There is no shame in being scared, ${tracker.witchName}, but Time is ticking. What should I do?
            </p>
            <br>
            <button class="button-animated"  onclick="playerChoice('continue')">Find courage?</button>
            <br>
            <button class="button2"  onclick="playerChoice('retreat')">Give up</button>
        `,
        
        'continue': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch">
            <p>
                My mama used to tell me that fear is the sister of courage. I've grown to learn that it is somewhat true: wherever I go, courage is always there!
            </p>
            <br>
            <p>
                So I turned on my feet and ran straight to her house! Who better to help me brave the dark woods than a strong knight? <img src="./assets/images/knight-animated.webp" alt="animation of the knight holding her sword">
            </p>
            <br>
            <button class="button-animated"  onclick="playerChoice('next')">Back on track!</button>
        `,

        'retreat': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch">
            <p>
                I ran back home...
            </p>
            <br>
            <p>
                I guess this is game over, ${tracker.witchName}... I hope Kayla comes back to me soon. :(
            </p>
            <br>
            <p>Should I to try again?</p>
            <br>
            <button class="button2"  onclick="playerChoice('goOut')">Turn back time</button>
            <br>
            <button class="button-animated"  onclick="playerChoice('theEnd'); alert('Thank you for playing!')">Not today</button>
        `,

        'next': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch"><img src="./assets/images/knight-portrait.webp" class="portrait" alt="a portrait of the knight">
            <p>
                Having Courage by my side had definitely given me more strength. Walking together through the dark woods was almost enough to make me forget about the eeriness.
            </p>
            <br>
            <p>
                After walking in a straight line for what felt like hours, we came accross a forked path. We looked down both as far as we could, to where they bent into the undergrowths. The right-one had a clear defined path where the grass had learned better and now refused to grow. The left-one was grassy and ominously darker...
            </p>
            <br>
            <p><img src="./assets/images/knight-animated.webp" alt="animation of the knight holding her sword"> "So, which way is your heart begging you to go?", Courage asked me.</p>
            <br>
            <button class="button-animated"  onclick="playerChoice('right')">Turn right?</button>
            <br>
            <button class="button2"  onclick="playerChoice('left')">Turn left?</button>
        `,
        
        'right': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch"><img src="./assets/images/knight-portrait.webp" class="portrait" alt="a portrait of the knight">
            <p>
                Having Courage by my side had definitely given me more strength. Walking together through the dark woods was almost enough to make me forget about the eeriness.
            </p>
            <br>
            <p>
                After walking in a straight line for what felt like hours, we came accross a forked path. We looked down both as far as we could, to where they bent into the undergrowths. The right-one had a clear defined path where the grass had learned better and now refused to grow. The left-one was grassy
            </p>
            <br>
            <p><img src="./assets/images/knight-animated.webp" alt="animation of the knight holding her sword"> "So, which way is your heart begging you to go?", Courage asked me.</p>
            <br>
            <button class="button-animated"  onclick="playerChoice('right')">Turn right?</button>
            <br>
            <button class="button2"  onclick="playerChoice('left')">Turn left?</button>
        `,
            
        'left': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch"><img src="./assets/images/knight-portrait.webp" class="portrait" alt="a portrait of the knight">
            <p>
               We took the road less traveled by and this made all the difference.
            </p>
            <br>
            <p>
                We find ourselves in an even thicker darkness than before. When we looked up, we found the source of this impenetrable darkness: a tall, wide and hungry-looking mountain troll was towering over us.
            </p>
            <br>
            <p>The monster growled. Courage and I exchanged a quick look and...</p>
            <br>
            <button class="button2"  onclick="playerChoice('sword')">Courage drew her sword...</button>
            <br>
            <button class="button-animated"  onclick="playerChoice('potion')">I threw one of my new potions at it...</button>
        `,
            
        'right': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch"><img src="./assets/images/knight-portrait.webp" class="portrait" alt="a portrait of the knight">
            <p>
               We took the right path.
            </p>
            <br>
            <p>
                We walked for a good fifteen minutes until we reached the end of the road? A dead-end in the middle of the woods?
            </p>
            <br>
            <p>This didn't make sense but I had to hurry and find Kayla!</p>
            <br>
            <button class="button-animated"  onclick="playerChoice('left')">Retrace our steps</button>
        `,
            
        'sword': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch"><img src="./assets/images/knight-portrait.webp" class="portrait" alt="a portrait of the knight">
            <p>
               Courage drew her sword and sunk it deep into the troll's chest when it bent down to grab us.
            </p>
            <br>
            <p>
                Nothing happened. The monster was somehow immune to her powerful moon-carved sword...
            </p>
            <br>
            <p>Try again?</p>
            <br>
            <button class="button2"  onclick="playerChoice('left')">Take me back...</button>
            <br>
            <button class="button-animated"  onclick="playerChoice('theEnd'); alert('Thank you for playing!')">Not today...</button>
        `,

        'potion': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch"><img src="./assets/images/knight-portrait.webp" class="portrait" alt="a portrait of the knight">
            <p>
               We took a chance on one of my new potions...
            </p>
            <br>
            <p>
                As a young witch, I was never sure of the outcome of my potions, even when I followed my mother's recipes. In a strange turn of events, when the glass broke, a pink cloud engulfed the troll and...
            </p>
            <br>
            <p>"Purrrr"... The monster was now a gorgeous fluffy calico cat?!</p>
            <br>
            <button class="button2"  onclick="playerChoice('adopt')">Adopt!!!</button>
            <br>
            <button class="button-animated"  onclick="playerChoice('kayla')">Keep searching for Kayla!</button>
        `,

        'adopt': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch"><img src="./assets/images/knight-portrait.webp" class="portrait" alt="a portrait of the knight">
            <p>
               It was impossible to resist this beautiful creature. I had to bring her home!
            </p>
            <br>
            <p>
                I hope that Kayla finds her way back home...
            </p>
            <br>
            <button class="button2"  onclick="playerChoice('start')">Start over?</button>
            <br>
            <button class="button-animated"  onclick="playerChoice('theEnd'); alert('Thank you for playing!')">Bye?</button>
        `,

        'kayla': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch"><img src="./assets/images/knight-portrait.webp" class="portrait" alt="a portrait of the knight">
            <p>
               As irresistible as the troll-cat was, Kayla had been my familiar for years and I couldn't just abandon her. Besides, there was no telling how long the effects of that potion would last...
            </p>
            <br>
            <p>
               As we carried on forward, we heard some faint meowing... "Kayla!"
            </p>
            <br>
            <p>We ran towards the sound and reached yet another forked path, this time with no clear distinction between the two paths. Kayla's voice seemed to come from the left path, while the other path was releasing a strong scent of... cucumbers?</p>
            <br>
            <button class="button2"  onclick="playerChoice('meow')">Go towards the meow</button>
            <br>
            <button class="button-animated"  onclick="playerChoice('cucumber')">Go towards the cucumber scent?</button>
        `,

        'meow': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch"><img src="./assets/images/knight-portrait.webp" class="portrait" alt="a portrait of the knight">
            <p>
               We let our ears be our guides and hoped that the meow would finally bring us to Kayla.
            </p>
            <br>
            <p>
               After a few more steps into the darkness, we were suddenly wrapped in a glowing mist. Once the mist cleared up, we were face to face with the unfathomable...
            </p>
            <br>
            <p>A wide emerald-ornamented door made out of gold stood proud in the middle of the path. We could look behind it and see nothing. Yet, there was a strange glow being emitted from the cracks...</p>
            <br>
            <button class="button2"  onclick="playerChoice('portal'); confirm('"The witch and the knight apprehensively stepped through the portal. Kayla's meow was heard one last time..." *** You have reached the end of the chapter for now. Thanks for playing! Come back later for a longer adventure!')">Step through the portal</button>
            <br>
            <button class="button-animated"  onclick="playerChoice('cucumber')">Go towards the cucumber scent?</button>
        `,
        'cucumbers': `
            <img src="./assets/images/witch-portrait.webp" class="portrait" alt="a portrait of the witch"><img src="./assets/images/knight-portrait.webp" class="portrait" alt="a portrait of the knight">
            <p>
               I had a good feeling about this scent. Kayla had always been weirdly into eating cucumbers since she was a small kitten!
            </p>
            <br>
            <p>
               After a few more steps into the darkness, we were startled by the scene our eyes stumbled upon:
            </p>
            <br>
            <p>Kayla was right there, devouring a larger-than-normal cucumber, the white spots on her face having turned a bright shade of green. And she was sharing it with none other than the troll-cat!</p>
            <br>
            <p><img src="./assets/images/witch-gif.webp" alt="an animation of the witch"> Kayla, come here :\')</p>
            <br>
            <button class="button2"  onclick="playerChoice('reunion'); confirm('"The witch and the knight each carried a cat on their way back to the cinnamon-scented cottage. The end?')">Take both cats...</button>
            <br>
            <button class="button-animated"  onclick="playerChoice('reunion'); confirm('After so much hard work, the witch finally got to bring her familiar back home. The end?')">Bring Kayla home!</button>
        `,
    }
    gameContainer.innerHTML = storyContent[tracker.progress];
}

/*Function to handle player choices
And update progress tracker*/
function playerChoice(option) {
    let options = {
        'start': ['intro'],
        'intro': ['goOut'],
        'goOut': ['continue', 'retreat'],
        'continue': ['next'],
        'retreat': ['goOut', 'theEnd'],
        'next': ['left', 'right'],
        'right': ['left'],
        'left': ['potion', 'sword'],
        'potion': ['adopt', 'kayla'],
        'sword': ['theEnd', 'left'],
        'adopt': ['theEnd', 'potion'],
        'kayla': ['meow', 'cucumbers'],
        'meow': ['portal'],
        'cucumbers': ['reunion'],
    }
    if (options[tracker.progress] && options[tracker.progress].includes(option)) {
        tracker.progress = option;
        updateGame();
    } else {
        console.error('Invald choice');
    }
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