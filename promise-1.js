function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            if (data === true) {
                resolve(`Ok`);
            } else {
                reject(`Ko`);
            }
        }, 1000);
    });
}

function handleData(data) {
    console.log(`Dati recuperati:`, data);
};

const check = fetchDataFromAPI(`John`, 30).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
