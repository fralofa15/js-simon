//Recupero dei dati dall'html
const countdownElement = document.getElementById("countdown");
const instructionsElement = document.getElementById("instructions");
const numbersListElement = document.getElementById("numbers-list");
const answersFormElement = document.getElementById("answers-form");
const messageElement = document.getElementById("message");
const inputElements = document.querySelectorAll("#input-group input");

//Richiamo della funzione per generare un gruppo di numeri random
const secretNumbers = getUniqueRandomNumbers(5, 1, 100);

console.log(secretNumbers);

//Creazione di una lista di elementi con all'interno i numeri generati in precedenza
for (let i = 0; i < secretNumbers.length; i++) {
    const li = document.createElement("li");
    li.textContent = secretNumbers[i];
    numbersListElement.appendChild(li);
}