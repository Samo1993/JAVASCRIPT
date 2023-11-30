function performOperation(a, b, callback) {
    const result = (a + b);
    callback(result);
}

function displayResult(result) {
    console.log(result);
}

performOperation(5, 3, displayResult);
