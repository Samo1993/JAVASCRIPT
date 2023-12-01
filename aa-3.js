function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000;
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
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
        console.log(`Veicolo spaziale pronto per il lancio!`);
    } catch (error) {
        console.log(`Impossibile lanciare il veicolo spaziale a causa di errori nei moduli.`, error);
    }
}

lanciaVeicoloSpaziale()
