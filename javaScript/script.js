

// Funny story set
const storySet1 = [
    ["The dog", "My teacher", "A monkey", "The cat", "Dad"],
    ["ate", "found", "kissed", "saw", "chased"],
    ["a funny", "a scary", "a slimy", "a fat", "a tiny"],
    ["frog", "worm", "goat", "fish", "bug"],
    ["in my shoes", "on the moon", "on the grass", "in my soup", "on the chair"]
];

// Adventure story set
const storySet2 = [
    ["Captain Max", "The astronaut", "A brave knight", "The explorer", "The robot"],
    ["discovered", "fought", "rescued", "built", "explored"],
    ["a mysterious", "a glowing", "an ancient", "a hidden", "a magical"],
    ["treasure", "planet", "castle", "dragon", "machine"],
    ["in the jungle", "on Mars", "inside a cave", "under the sea", "in the future"]
];

let currentSet = storySet1;

let indexes = [0,0,0,0,0];
let selections = ["","","","",""];



for (let i = 0; i < 5; i++) {
    document.getElementById("part" + (i+1)).addEventListener("click", function() {
        selections[i] = currentSet[i][indexes[i]];
        this.textContent = selections[i];
        indexes[i] = (indexes[i] + 1) % currentSet[i].length;
    });
}



document.getElementById("generate").addEventListener("click", function() {

    if (selections.includes("")) {
        document.getElementById("output").textContent =
            "Please choose all 5 parts first!";
        speak("Please choose all five parts first!");
        return;
    }

    const sentence = selections.join(" ") + ".";
    displayStory(sentence);
});

// this to generate random value between 0 to 5

document.getElementById("random").addEventListener("click", function() {

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * currentSet[i].length);
        selections[i] = currentSet[i][randomIndex];
        document.getElementById("part" + (i+1)).textContent = selections[i];
    }

    const sentence = selections.join(" ") + ".";
    displayStory(sentence);
});

//this to initialising reset buttom 

document.getElementById("reset").addEventListener("click", function() {

    selections = ["","","","",""];
    indexes = [0,0,0,0,0];

    for (let i = 0; i < 5; i++) {
        document.getElementById("part" + (i+1)).textContent = "Choose";
    }

    document.getElementById("output").textContent = "";
});

//this to generate storybook

document.getElementById("mode").addEventListener("click", function() {

    if (currentSet === storySet1) {
        currentSet = storySet2;
        alert("Adventure Mode Activated!");
        speak("Adventure mode activated!");
    } else {
        currentSet = storySet1;
        alert("Funny Mode Activated!");
        speak("Funny mode activated!");
    }

    // Reset selections when switching mode
    document.getElementById("reset").click();
});


// this to DISPLAY + SPEAK functionallty

function displayStory(sentence) {
    document.getElementById("output").textContent = sentence;
    speak(sentence);
}


// this to TEXT TO SPEECH functionallty

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.9;
    speech.pitch = 1.2;
    speech.volume = 1;
    window.speechSynthesis.cancel(); // stop previous speech
    window.speechSynthesis.speak(speech);
}
