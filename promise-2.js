function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'John' })
        }, 1000);
    });
}

function fetchUserPosts(userId, userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve(['']);  // qui l'ho lasciato vuoto perché volevo "creare" l'errore di non trovare l'id utente (Error(`User not found!`)), ma in console mi stampa comunque l'user name e mi segnala [''] invece dei post (giustamente). Se inserisco ['Post 1', 'Post 2', 'Post 3'] è tutto regolare.
            } else { (userName === 1)
                reject(new Error(`User not found!`));
            };
        }, 2000);
    });
}

fetchUserData().then(user => {
    console.log(`User name:`, user.name);
    return fetchUserPosts(user.id, user.name);
}).then(posts => {
    console.log(`User posts:`, posts);
}).catch(error => {
    console.error(`Error!`, error);
})
