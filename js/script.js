console.log('JS OK')

// PHASE 1

// Link to elements
const nameInput = document.getElementById('name');
const km_amount = document.getElementById('km');
const calcButton = document.getElementById('calc-btn');
const eraseButton = document.getElementById('erase-btn');
const ageInput = document.getElementById('age-select');

// Declare calc variables
const under18 = 19;
const senior = 64;
let discount;
const costXkm = 0.21;

console.log(under18, senior, discount, costXkm);

// # PHASE 2

// User Input
calcButton.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const km = km_amount.value;
    const age = ageInput.value;
    console.log(name, km, age);
})