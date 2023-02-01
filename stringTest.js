//replacing a string
// let firstName = "John";
// let lastName = "Doe";
//
// let test = `welcome ${firstName}, ${lastName}`;

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;

document.getElementById("一个小段落").innerHTML = html;

const cars = ["Saab", "Volvo", "BMW"];
const cars1 = [];
cars1[0] = "saab";
cars1[1] = "mime";

// functions to manipulate arrays
cars.length;
cars.sort();

// looping thru an array
const fruits = ["banana", 'orange'];

let type = typeof fruits;//this should return the type of fruits, an object
let x;
if (fruits instanceof Array){
    x = 1;
}else{x = 0}

let text = "<ul>";
fruits.forEach(Fun);
text +="</ul>"
document.getElementById("小水果").innerHTML = text;

function Fun(fruit){
    text += `<li>${fruit}</li>`;
}
//creating array with length 40
const points = new Array(40);

// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);