function fetchUserData() {
    return new Promise((resolve, reject) => {
        const user = { name: `Sabrina`, lastname: `Moccia`, age: 30};
        setTimeout(() => {
            if (user !== 1) {  //!== => "Error: User not found" | === => "User name: undefined User lastname: undefined User age: undefined"
                resolve(`User found`);
            } else {
                reject(new Error(`User not found`))
            };
        }, 1000);
    });
}

fetchUserData().then(user => {
    console.log(`User name:`, user.name);
    console.log(`User lastname:`, user.lastname);
    console.log(`User age:`, user.age);
}).catch((error) => {
    console.log(error);
});
