const ul = document.querySelector("ul");
const li = ul.children[2];
// sembra che il children 2 non esiste. se metto 0, prende in considerazione l'1, se metto 2, prende in considerazione comunque l'1.

const myIl = li.nextElementSibling;
const myIl2 = li.previousElementSibling;

console.log(ul.parentElement);
console.log(ul.firstElementChild);
console.log(myIl);
console.log(myIl2);


/* stampa:  > body
            > li
            > null
            > li */
