const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const cardNumber = document.getElementById('cardNumber');

const addStartFocus = () => {
    inputs[0].focus();
}

const checkValidity = (e) => {
    let input = e.target;
    console.log(input);
}

const checkEmptyFields = (event) => {
    event.preventDefault();

    inputs.forEach( (e) => {

        let message = e.parentNode.querySelector('p');

        e.nextElementSibling.innerHTML = "Can’t be blank";

        if (e.value == '') {
            e.classList.add('error');
            message.style.display = "block";
        } else {
            e.classList.remove('error');
            message.style.display = "none";
        };
    })
}

const maskX = () => {
const maskOptions = {
  mask: '0000 0000 0000 0000'
};
let mask = IMask(cardNumber, maskOptions);
}

window.addEventListener('load', addStartFocus);
form.addEventListener('submit', checkEmptyFields);
cardNumber.addEventListener('input', maskX);