const getValueById = id => {
    const inputField = document.getElementById(id);
    const fieldValue = inputField.value;
    inputField.value = '';
    return fieldValue;
}

/* const setNameToLS = () => {
    const name = getValueById('name-input-field');
    localStorage.setItem('name', name);
}

const setEmailToLS = () => {
    const email = getValueById('email-input-field');
    localStorage.setItem('email', email);
}

const setMsgToLS = () => {
    const msg = getValueById('msg-input-field');
    localStorage.setItem('message', msg);
} */

const setToLS = propertyToSet => {
    let value = '';
    if (propertyToSet === 'name') {
        value = getValueById('name-input-field');
    }
    else if (propertyToSet === 'email') {
        value = getValueById('email-input-field');
    }
    else if (propertyToSet === 'message') {
        value = getValueById('msg-input-field');
    }
    localStorage.setItem(propertyToSet, value);
}

const deleteFromLS = propertyToDelete => {
    localStorage.removeItem(propertyToDelete);
}

const clearLS = () => {
    localStorage.clear()
}