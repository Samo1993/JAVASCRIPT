let tempoRimanente = 10;

function contoAllaRovescia() {

    console.log(`Conto alla rovescia in corso...`);

    const id = setInterval(() => {
        tempoRimanente--
        if (tempoRimanente > 0) {
            console.log(`Tempo rimanente: ${tempoRimanente}secondi`);
        } else {
            clearInterval(id);
            console.log(`Conto alla rovescia terminato`);
        }
    }, 1000);
}

contoAllaRovescia();
