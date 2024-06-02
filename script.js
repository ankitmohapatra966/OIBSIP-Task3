const converter = document.querySelector('#converter');
const result = document.querySelector('.resultOfcoversion');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
const C = document.querySelector('.C')
const F = document.querySelector('.F')

const change = () => {
    if (C.innerHTML === '°C') {
        C.innerHTML = '°F';
        F.innerHTML = '°C';
        converter.placeholder = "Temperature in °F";
    }else {
        F.innerHTML = '°F';
        C.innerHTML = '°C';
        converter.placeholder = "Temperature in °C";
    };
};

const reset = () => {
    converter.value = '';
    result.innerHTML = '';
}

const convert = () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        result.style.color = "black"
        if (C.innerHTML === '°C') {
            let value = (converter.value * 1.8) + 32;
            result.innerHTML = `${converter.value}°C is in Fahrenheit ${value.toFixed(2)}°F`;
        } else {
            let value = (converter.value - 32) / 1.8;
            result.innerHTML = `${converter.value}°F is in Celcius ${value.toFixed(2)}°C`;
        }
    } else if (converter.value == '') {
        result.style.color = "#254663"
        result.innerHTML = 'Please enter any number !!!';
    } else {
        result.style.color = "#993300"
        result.innerHTML = 'Warning: Enter only numbers!!!';
    }
}

changeButton.addEventListener('click', change);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);