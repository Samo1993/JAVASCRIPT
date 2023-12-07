function checkAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve("ok");
            } else {
                reject("ko");
            }
        });
    }, 2000);

}

const check = checkAge(16).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

/* ho preferito semplificarla e seguire quella dell'esempio nel video */
