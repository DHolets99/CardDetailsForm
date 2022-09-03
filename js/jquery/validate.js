const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const cardHolderName = document.getElementById('cardHolderName');
const cardNumber = document.getElementById('cardNumber');
const month = document.getElementById('date--month');
const year = document.getElementById('date--year');
const cvc = document.getElementById('cvc');
const brandLogo = document.querySelector('brandLogo');



cardHolderNameMask = IMask(cardHolderName, {
    mask: /^([а-яё\s]+|[a-z\s]+)$/iu,
    prepare: function (str) {
        return str.toUpperCase();
    },
})

cardNumberMask = IMask(cardNumber, {
    mask: '0000 0000 0000 0000',
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

        let errorMessage = e.parentNode.querySelector('p');

        e.nextElementSibling.innerHTML = "Can’t be blank";

        if (e.value == '') {
            e.classList.add('error');
            errorMessage.style.display = "block";
        } else {
            if (e['#date--month'] == '' || e['#date--year'] == '') {
                e.classList.add('error');
                errorMessage.style.display = "block";
            }
            e.classList.remove('error');
            errorMessage.style.display = "none";
        };
    })
}

const validate = (e) => {
    let currentInput = e.target;

    showOnCard(currentInput);
    deleteMessage(currentInput);
}

const showOnCard = (currentInput) => {
    let className;
    switch (currentInput.id) {
        case 'cardHolderName': className = 'cards__card--name';
        break;
        case 'cardNumber': className = 'cards__card--number';            
        break;
        case 'date--month': className = 'cards__card--month';
        break;
        case 'date--year': className = 'cards__card--year';
        break;
        case 'cvc': className = 'cards__card--cvc';
        break;
    } 
  
    document.querySelector(`.${className}`).innerHTML = currentInput.value;
}

const deleteMessage = (currentInput) => {
    currentInput.parentNode.querySelector('p').style.display = "none";
}

const checkCorrectValue = () => {

    let errorMessage = cardNumber.parentNode.querySelector('p');
    cardNumber.nextElementSibling.innerHTML = "Wrong format";

    if (cardNumber.value.length < 16 && cardNumber.value.length > 0) {
        cardNumber.classList.add('error');
        errorMessage.style.display = "block";
    } else {
        cardNumber.classList.remove('error');
        errorMessage.style.display = "none";
    };
}

window.addEventListener('load', addStartFocus);
form.addEventListener('submit', checkEmptyFields);
form.addEventListener('input', validate);
cardNumber.addEventListener('blur', checkCorrectValue);
