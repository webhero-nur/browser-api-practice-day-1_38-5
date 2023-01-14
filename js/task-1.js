// 1.
console.log('hello');
setTimeout(() => {
    console.log('Hamid');
}, 3500);
console.log('Mr.');

// 2.
const promptFunction = () => {
    const promptValue = prompt('Enter a number');
    const valueNumber = parseFloat(promptValue);
    const result = valueNumber + 250;
    const alertMsg = `Result after adding 250 to given number: ${result}`;
    alert(alertMsg);
}