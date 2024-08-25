function findFactorial() {
    const num = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');

    if (num === '' || num < 0) {
        resultElement.innerHTML = 'Please enter a valid number.';
        return;
    }

    let factorial = BigInt(1);

    for (let i = BigInt(2); i <= BigInt(num); i++) {
        factorial *= i;
    }

    resultElement.innerHTML = `Factorial of ${num} is: <br>${factorial.toString()}`;
}
