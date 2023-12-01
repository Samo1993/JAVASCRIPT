function caricaModulo(modulo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Il modulo ${modulo} è stato caricato.`);
        }, 2000);
    });
}

async function lanciaVeicoloSpaziale() {
    try {
        const moduloA = await caricaModulo(`A`);
        console.log(moduloA);

        const moduloB = await caricaModulo(`B`);
        console.log(moduloB);

        const moduloC = await caricaModulo(`C`);
        console.log(moduloC);
        console.log(`Veicolo spaziale pronto per il lancio!`)
    } catch (error) {
        console.log(error)
    }
}

lanciaVeicoloSpaziale();
