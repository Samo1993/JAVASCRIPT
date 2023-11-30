function fetchDataFromAPI(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000)
}

function handleData(data) {
     console.log(`Dati recuperati:`, data);
}

fetchDataFromAPI(handleData);
