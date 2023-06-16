// VUE JS
console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            nome: '',
            km: 0,
            age: 'empty',
            discount: 0,
            ticketNumMin: 20000,
            ticketNumMax: 90000,
            carriageMax: 6,
            isValid: true,
            costXkm: 0.21,
            carriageAssign: 0,
            ticketNumAssign: 0,
            ticket: 0,
            ticketNet: 0,
            display: 'd-none'
        }
    },
    methods: {
        // Erasa button
        eraseField() {
            this.nome = '';
            this.km = '';
            this.age = 'empty';
            this.display = '';
        },

        // Create ticket @ click
        createTicket() {

            // Validation
            if ((this.name === '') || (this.km < 1 || !this.km) || (this.age === 'empty')) {
                this.isValid = false;
                alert("Controlla di aver inserito i dati richiesti!");
            }

            // Start Program
            if (this.isValid) {

                // Declare Ticket & Ticket_net
                this.ticket = (this.km * this.costXkm);

                // Discount Access
                if ((this.age !== 'Minorenne') && (this.age !== 'Senior')) {
                    this.discount = 0;
                } else if (this.age === 'Minorenne') {
                    this.discount = 20;
                } else {
                    this.discount = 40;
                }

                // Calc Discount
                if (this.discount === 0) {
                    this.ticketNet = this.ticket;
                } else if (this.discount === 20) {
                    this.ticketNet = this.ticket - ((this.ticket * this.discount) / 100);
                } else {
                    this.ticketNet = this.ticket - ((this.ticket * this.discount) / 100);
                }

                // Crate Random ticket & Display
                this.carriageAssign = Math.floor(Math.random() * this.carriageMax) + 1;
                this.ticketNumAssign = Math.floor(Math.random() * (this.ticketNumMax - this.ticketNumMin) + this.ticketNumMin);
                this.display = '';
            }
        }
    }
});

// mount
app.mount('#root');