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