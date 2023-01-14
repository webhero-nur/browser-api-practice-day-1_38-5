const valueIncrease = () => {
    const element = document.getElementById('element');
    const elementValue = element.innerText;
    const value = parseFloat(elementValue);
    const newValue = value + 1;
    element.innerText = newValue;
    localStorage.setItem('value', newValue);
}


const initiallyValueSet = () => {
    const element = document.getElementById('element');
    element.innerText = localStorage.getItem('value');
}
initiallyValueSet();