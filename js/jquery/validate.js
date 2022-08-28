const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

const checkEmptyFields = (event) => {
    event.preventDefault();

    inputs.forEach( (e) => {

        let message = e.parentNode.querySelector('p');

        e.nextElementSibling.innerHTML = "Can’t be blank";

        if (e.value == '') {
            e.style.border = '1px solid #FF5050';
            message.style.display = "block";
        } else {
            e.style.border = '1px solid #DFDEE0';
            message.style.display = "none";
        };
    })
}


form.addEventListener('submit', checkEmptyFields);
