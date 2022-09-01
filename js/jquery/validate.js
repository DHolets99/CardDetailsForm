const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const cardHolderName = document.getElementById('cardHolderName');
const cardNumber = document.getElementById('cardNumber');
const month = document.getElementById('date--month');
const year = document.getElementById('date--year');
const cvc = document.getElementById('cvc');



cardHolderNameMask = IMask(cardHolderName, {
    mask: /^([а-яё\s]+|[a-z\s]+)$/iu,
    prepare: function (str) {
        return str.toUpperCase();
    },
})

cardNumberMask = IMask(cardNumber, {
    mask: '0000 0000 0000 0000'
})

monthMask = IMask(month, {
    mask: IMask.MaskedRange,
    from: 01,
    to: 12,
    maxLength: 2,
    autofix: true
})

yearMask = IMask(year, {
    mask: '00'
})

cvcMask = IMask(cvc, {
    mask: '000'
})

const addStartFocus = () => {
    inputs[0].focus();
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

const showOnCard = (e) => {
    let input = e.target;
    let className;
    switch (input.id) {
        case 'cardHolderName': className = 'cards__card--name';
        break;
        case 'cardNumber': className = 'cards__card--number';
        break;
        case 'date--month': className = 'cards__card--date';
        break;
        case 'cvc': className = 'cards__card--cvc';
        break;
    } 
  
    document.querySelector(`.${className}`).innerHTML = input.value;
}

window.addEventListener('load', addStartFocus);
form.addEventListener('submit', checkEmptyFields);
form.addEventListener('input', showOnCard);
