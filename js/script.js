console.log('JS OK')

// PHASE 1

// Link to elements
const nameInput = document.getElementById('name');
const km_amount = document.getElementById('km');
const calcButton = document.getElementById('calc-btn');
const eraseButton = document.getElementById('erase-btn');
const teen = document.getElementById('under18');
const adult = document.getElementById('adult');
const over65 = document.getElementById('over65');

// Declare calc variables
const under18 = 19;
const senior = 64;
let discount;
const costXkm = 0.21;

console.log(under18, senior, discount, costXkm);

