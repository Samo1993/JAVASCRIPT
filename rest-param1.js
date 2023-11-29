function somma(...numbers) {
    return numbers.reduce((a, number) => a + number, 0);
}

const mySum = somma(5, 2, 15, 25, 86, 6, 30);

console.log(mySum);
