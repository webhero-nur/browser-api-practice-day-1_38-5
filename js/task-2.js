// 1.
const clearLS = () => {
    localStorage.clear();
}

// 2, 3
const getValueById = id => {
    const field = document.getElementById(id);
    const fieldValue = field.value;
    field.value = '';
    return fieldValue;
}

const addNameToLS = () => {
    const name = getValueById('name-input-field');
    localStorage.setItem('name', name);
}

const addAgeToLS = () => {
    const age = getValueById('age-input-field');
    localStorage.setItem('age', age);
}

// 4.
const showSaved = () => {
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');
    const alertMsg = `Name: ${name} and Age: ${age}`;
    alert(alertMsg);
}

// 5.
const removeNameFromLS = () => {
    localStorage.removeItem('name');
}

const removeAgeFromLS = () => {
    localStorage.removeItem('age');
}

// 6.
const addObjToLS = () => {
    const firstName = getValueById('first-name');
    const lastName = getValueById('last-name');
    const data = {};
    data.firstName = firstName;
    data.lastName = lastName;
    localStorage.setItem('data', JSON.stringify(data));
}