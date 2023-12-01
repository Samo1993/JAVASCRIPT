function caricamentoDati() {
    return new Promise((resolve) => {
        setTimeout(() => {
        /* const person = { name: "John", age: 30 };*/
        resolve("Questi sono i dati ottenuti dalla fonte asincrona.", /* person */);
    }, 2000);
  });
}

async function ottieniDati() {
    try {
        const /* [message, person] */  dati = await caricamentoDati();
       /* console.log(message);
        console.log(`User:`, person); */
        console.log(`Dati ottenuti:`, dati);
    } catch (error) {
        console.log(error);
    };
}


ottineniDati();

/* le parti commentate sono le prove che ho fatto, ma in ogni caso, non mi compare nulla in console. */
