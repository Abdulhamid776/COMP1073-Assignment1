// This my story data set 

const storyParts = [
    ["The dog", "My teacher", "A monkey", "The cat", "Dad"],
    ["ate", "found", "kissed", "saw", "chased"],
    ["a funny", "a scary", "a slimy", "a fat", "a tiny"],
    ["frog", "worm", "goat", "fish", "bug"],
    ["in my shoes", "on the moon", "on the grass", "in my soup", "on the chair"]
];

let indexes = [0,0,0,0,0];
let selections = ["","","","",""];

// What this loop function is doing is basically iteratering the data set 

for (let i = 0; i < 5; i++) {
    document.getElementById("part" + (i+1)).addEventListener("click", function() {
        selections[i] = storyParts[i][indexes[i]];
        this.textContent = selections[i];
        indexes[i] = (indexes[i] + 1) % storyParts[i].length;
    });
}

// This DOM operator manpulateing the flow of data 

document.getElementById("generate").addEventListener("click", function() {

    if (selections.includes("")) {
        document.getElementById("output").textContent =
            "Please choose all 5 parts first!";
        return;
    }

    const sentence = selections.join(" ") + ".";
    document.getElementById("output").textContent = sentence;
});
