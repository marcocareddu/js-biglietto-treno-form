<!-- DESCRIZIONE:
Scrivere un programma che chieda all’utente:
- Il proprio nome
- Il numero di chilometri da percorrere
- Età del passeggero
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form (non tag <form>) in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Nota:
Se non vi sentite particolarmente creativi, ispiratevi all'immagine in allegato. Potete scegliere di implementare una soluzione completamente diversa oppure simile.
Potete usare il CSS di Bootstrap (MA SOLO IL CSS) 

BONUS
Randomizzare un numero per la carrozza dell'utente
Randomizzare un numero per il codice del biglietto
Utilizzare una <select> invece di un <input> per determinare l'età dell'utente
Implementare il reset del form tramite un bottone di reset -->

# Ticket Calculator 2 - La vendetta

## Fasi preliminari
- Creo le variabili collegate agli elementi del DOM, input e button
- Credo le variabili per il calcolo

## Svolgimento
### Milestone 1
- Chiedere il nome all'utente
- Chiedere i km da percorrere
- Chiedere se l'utente è <18, adulto o >65
- Calcolare il prezzo del biglietto
- Verificare se va applicato uno sconto
- SE si ha diritto allo sconto, calcolare il netto del biglietto
- Stampare risultato su console
### Milestone 2
- Stampare i dati specifici quali, sconto, % scontata ecc, per i prezzi: Max 2 decimali
- Validazione
- Abbellimenti con CSS
### Bonus
- Creare un variabile con numero random per la carrozza
- Creare un variabile con numero random per il N° del biglietto
- Utilizzare una select invece di un input per la richiesta dell'età
- Rendere funzionante il tasto annulla che pulisce i campi input

