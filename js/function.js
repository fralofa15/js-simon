//Funzione per la creazione di numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Funzione per la creazione di 5 numeri casuali 
function getUniqueRandomNumbers(total, min, max) {
    //Creazione di un array per conservare i numeri
    const numbers = [];

    //Ciclo WHILE che genera numeri fino al totale desiderato
    while (numbers.length < total) {
        const randomNumber = getRandomNumber(min, max);

        //Controllo tramite IF per evitare di avere numeri uguali all'interno dell'array
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    return numbers;
}

//funzione per aggiornare il countdown
function updateCountdown() {

    timeLeft--;
    countdownElement.textContent = timeLeft;

    if (timeLeft === 0) {
        clearInterval(countdown);

        //nascondo i numeri
        numbersListElement.classList.add("d-none");

        //metto le istruzioni per inserire i numeri ricordati
        instructionsElement.textContent = "Inserisci i numeri che ricordi";

        //mostro dove inserire i numeri
        answersFormElement.classList.remove("d-none");

        //svuoto countdown
        countdownElement.textContent = "";
    }
}

//funzione per confrontare i numeri segreti con quelli inseriti dall'utente
function getGuessedNumbers(secretNumbers, userNumbers) {

    //Nuovo array per salvare i numeri indovinati
    const guessedNumbers = [];

    //Controllo i numeri inseriti dall'utente
    for (let i = 0; i < userNumbers.length; i++) {

        const currentNumber = userNumbers[i];

        //Controllo se il numero è presente nei numeri segreti
        if (secretNumbers.includes(currentNumber)) {
            guessedNumbers.push(currentNumber);
        }

    }

    //Ritorno l'array dei numeri indovinati
    return guessedNumbers;
}

//funzione che gestisce il submit del form
function handleFormSubmit(event) {
    event.preventDefault();
    const userNumbers = [];

    //recupero i valori degli input
    for (let i = 0; i < inputElements.length; i++) {
        userNumbers.push(Number(inputElements[i].value));
    }

    //confronto con i numeri segreti
    const guessedNumbers = getGuessedNumbers(secretNumbers, userNumbers);

    let resultMessage = guessedNumbers.join(", ");

    //se non indovina nessun numero
    if (guessedNumbers.length === 0) {
        resultMessage = "nessuno";
    }

    //mostro il risultato
    instructionsElement.innerHTML = `
        Hai indovinato ${guessedNumbers.length} numeri: ${resultMessage}
    `;

    //nascondo il form
    answersFormElement.classList.add("d-none");
}