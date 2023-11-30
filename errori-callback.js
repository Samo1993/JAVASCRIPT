unction performOperation(a, b, callback) {
    try {
        const result = (a + b);
        callback(null, result);
    } catch (error) {
        callback(error)
    };
};

function displayResult(error, result) {
    try {
        if (error) {
            throw error;
        }
         console.log(`Risultato:`, result);
    } catch (error) {
        console.error(`Si è verificato un errore:`,  error);
    }    
};

performOperation(5, 3, displayResult);

/* non ho ben capito come far risultare l'errore. So che devo aggiungere una funzione, ma non ho capito dove e penso di aver usato anche la formula sbagliata per l'esercizio*/
