const sendAllToLS = () => {
    const name = getValueById('name-input-field');
    const email = getValueById('email-input-field');
    const message = getValueById('msg-input-field');
    const info = {};
    info.name = name;
    info.email = email;
    info.message = message;
    localStorage.setItem('info', JSON.stringify(info));
}

const displayDataFromLS = () => {
    const dataInLS = localStorage.getItem('info');
    const objectInLS = JSON.parse(dataInLS);
    document.getElementById('name-input-field').value = objectInLS?.name ? objectInLS.name : "";
    document.getElementById('email-input-field').value = objectInLS?.email ? objectInLS.email : "";
    document.getElementById('msg-input-field').value = objectInLS?.message ? objectInLS.message : "";
}

displayDataFromLS()