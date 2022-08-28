const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

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


form.addEventListener('submit', checkEmptyFields);
