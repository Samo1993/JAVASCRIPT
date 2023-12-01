const succes= Math.random() * 0.5;

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (succes < 0.5) {
                resolve(`Data retrieved successfully`);
            } else {
                reject(new Error(`Error: Failed to fetch data`));
            }
        }, 2000);
    });

}

fetchDataFromAPI().then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
})

// non capisco perché 10 volte su 10 in console esce sempre "Data retrieved successfully"
