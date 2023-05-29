console.log('JS OK')

// PHASE 1

// Link to elements
const nameInput = document.getElementById('name');
const km_amount = document.getElementById('km');
const calcButton = document.getElementById('calc-btn');
const eraseButton = document.getElementById('erase-btn');
const ageInput = document.getElementById('age-select');

// Declare calc variables
let discount;
const costXkm = 0.21;

console.log(discount, costXkm);

// # PHASE 2

// User Input
calcButton.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const km = km_amount.value;
    const age = ageInput.value;
    console.log(name, km, age);

    // Discount Access
    if ((age !== 'under18') && (age !== 'over65')) {
        discount = 0;
        console.log("Non hai diritto allo sconto");

    } else if (age === 'under18') {
        discount = 20;
        console.log("Sei ggggiovane, hai uno sconto del " + discount + "%!");

    } else {
        discount = 40;
        console.log("Sei vecio!, hai uno sconto del " + discount + "%!");
    }
    console.log(discount);
})

