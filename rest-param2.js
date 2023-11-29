function filterOutOdds(...numbers) {
    return numbers.filter(number => number % 2 === 0)
}

const filteredArray = filterOutOdds(5, 2, 15, 25, 86, 6, 30);

console.log(filteredArray);
