const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const cardNumber = document.getElementById('#cadrNumber');

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

$(document).ready(function () {

$('#cardhNumber').mask("0000 0000 0000 0000")

});



window.addEventListener('load', addStartFocus);
form.addEventListener('submit', checkEmptyFields);

window.addEventListener('load', mask);
