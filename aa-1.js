const users = [
    { id: 1, name: "Mario", lastname: "Rossi", username: "marossi", password: "s3cr3t"},
    { id: 2, name: "Sabrina", lastname: "Moccia", username: "sabmoccia", password: "priv4t3"},
];

function caricamentoDati(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user) => user.username === username && user.password === password);
            if (user) {
                resolve(user);
            } else {
                reject(`User with ID ${id} is lonely :/`)
            }
        }, 2000);
    });
}

async function ottieniDati() {
    try {
        const data = await caricamentoDati("marossi", "s3cr3t");  /* devo inserire i dati di users, altrimenti mi segna errore nella console */
        console.log("Dati ottenuti:", data);
    } catch (error) {
        console.log(error);
    };
}

ottieniDati();
