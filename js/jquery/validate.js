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
        case 'date--month': className = 'cards__card--date';
        break;
        case 'cvc': className = 'cards__card--cvc';
        break;
    } 
  
    document.querySelector(`.${className}`).innerHTML = currentInput.value;
}

const deleteMessage = (currentInput) => {
    currentInput.parentNode.querySelector('p').style.display = "none";
}

const toggleFocus = (currentInput) => {
							const minLength = 16,
                                  maxLength = 19;
                           if (currentInput.value.lenght >= minLength && currentInput.value.lenght <= maxLength) {
                               currentInput.blur();
        						currentInput.nextChild.focus();
                           };
      
}

window.addEventListener('load', addStartFocus);
form.addEventListener('submit', checkEmptyFields);
form.addEventListener('input', validate);
