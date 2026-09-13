function calculate(operation) {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let result = 0;

    if (operation === 'add') {
        result = a + b;
    } else if (operation === 'sub') {
        result = a - b;
    } else if (operation === 'multiply') {
        result = a * b;
    } else if (operation === 'divide') {
        result = b !== 0 ? a / b : 'Cannot divide by zero';
    }

    document.getElementById('c').innerText = "c = " + result;
}