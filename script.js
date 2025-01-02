document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        if (answer.classList.contains('active')) {
            // Zamykanie
            answer.style.maxHeight = answer.scrollHeight + 'px'; // Resetujemy wysokość, aby uniknąć przeskoków
            setTimeout(() => {
                answer.style.maxHeight = '0'; // Zmniejszamy wysokość
                answer.style.opacity = '0';  // Stopniowo ukrywamy
            }, 10);

            answer.addEventListener('transitionend', () => {
                answer.classList.remove('active'); // Po zakończeniu animacji usuwamy klasę
            }, { once: true });
        } else {
            // Otwieranie
            answer.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.opacity = '1';
        }
    });
});


async function readPlayerCount() {
    try {
        // Wersja lokalna bez użycia fetch (symulacja danych)
        const data = { value: 1 }; // Przykładowe dane
        return data.value;
    } catch (err) {
        console.error(`Error reading file: ${err}`);
        return '0';
    }
}

async function displayPlayerCount() {
    const playerCountElement = document.getElementById('playerCount');
    setInterval(async () => {
        const playerCount = await readPlayerCount();
        playerCountElement.textContent = `${playerCount} / 100 players`;
    }, 10000); // Co 10 sekund
}

// Start skryptu
displayPlayerCount();