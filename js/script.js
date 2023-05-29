console.log('JS OK')

// PHASE 1

// Link to elements
const nameInput = document.getElementById('name');
const kmAmount = document.getElementById('km');
const calcButton = document.getElementById('calc-btn');
const eraseButton = document.getElementById('erase-btn');
const ageInput = document.getElementById('age-select');
// Bonus
const kmDisplay = document.getElementById('km-display');
const ageDisplay = document.getElementById('age-display');
const discountPerc = document.getElementById('discount-perc');
const discountDisplay = document.getElementById('discount-display');
const ticketDisplay = document.getElementById('ticket-display');
const ticketGross = document.getElementById('ticket-gross');
const carriageDisplay = document.getElementById('carriage-display');
const ticketNumber = document.getElementById('ticket-num-display');
const passengerName = document.getElementById('passenger-name');

// Declare calc variables
let discount;
const costXkm = 0.21;

console.log(discount, costXkm);

// # PHASE 2

// User Input
calcButton.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const km = kmAmount.value;
    const age = ageInput.value;
    console.log(name, km, age);

    // !Validation
    let isValid = true;

    if ((km < 1 || km === false) || (age === 'empty') || (name === '')) {
        isValid = false;
        console.log(name, km, age);
        console.log("Non stai inserendo un valore corretto!");
        alert("Controlla di aver inserito i dati richiesti!");
    }
    console.log(isValid);

    if (isValid) {

        // Discount Access
        if ((age !== 'Minorenne') && (age !== 'Senior')) {
            discount = 0;
            console.log("Mi spiace " + name + ", non hai diritto allo sconto");

        } else if (age === 'Minorenne') {
            discount = 20;
            console.log("Congratulazioni " + name + "! Sei giovane, hai uno sconto del " + discount + "%!");

        } else {
            discount = 40;
            console.log("Congratulazioni " + name + "! Sei vecio!, hai uno sconto del " + discount + "%!");
        }

        console.log(discount);

        // Declare Ticket & Ticket_net
        let ticket = (km * costXkm);
        console.log(ticket.toFixed(2));

        let ticketNet;

        // Ticket discounted calc
        if (discount === 0) {
            console.log("Il prezzo del biglietto è di €" + ticket.toFixed(2));
            ticketNet = ticket;

        } else if (discount === 20) {
            ticketNet = ticket - ((ticket * discount) / 100);
            console.log("Il prezzo del biglietto è di €" + ticketNet.toFixed(2));

        } else {
            ticketNet = ticket - ((ticket * discount) / 100);
            console.log("Il prezzo del biglietto è di €" + ticketNet.toFixed(2));
        }

        // Random calc for ticket ID & train carriage
        const random = Math.random();
        const ticketNumMin = 20000;
        const ticketNumMax = 50000;
        const carriageMax = 6;

        const carriageAssign = Math.floor(random * carriageMax) + 1;
        const ticketNumAssign = Math.floor(random * (ticketNumMax - ticketNumMin) + ticketNumMin);


        // Display results in DOM
        // kmDisplay.innerText = km;
        // discountPerc.innerText = discount;
        // ticketGross.innerText = ticket.toFixed(2);
        // discountDisplay.innerText = (ticket - ticketNet).toFixed(2);

        ageDisplay.innerText = age;
        ticketDisplay.innerText = ticketNet.toFixed(2);
        carriageDisplay.innerText = carriageAssign;
        ticketNumber.innerText = ticketNumAssign;
        passengerName.innerText = name;
    }
})


