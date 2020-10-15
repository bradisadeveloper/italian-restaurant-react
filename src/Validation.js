import validator from 'validator';

const form = document.getElementById('form');
    const firstName = document.getElementById('first');
    const lastName = document.getElementById('last');
    const phoneNumber = document.getElementById('phone');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
    });

    function checkInputs() {
        
        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const phoneNumberValue = phoneNumber.value.trim();

        if(firstNameValue === '') {
            // show error and adding error class
            setErrorFor(firstName, 'First name cannot be blank');
        } else {
            // correct input value
            setSuccessFor(firstName);
        }

        if(lastNameValue === '') {
            // show error and adding error class
            setErrorFor(lastName, 'Last name cannot be blank');
        } else {
            // correct input value
            setSuccessFor(lastName);
        }

        if(!phoneNumberValue) {
            // show error and adding error class
            setErrorFor(phoneNumberValue, 'invalid number');
        } else {
            // correct input value
            setSuccessFor(phoneNumberValue);
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
	    formControl.className = 'form-control error';
	    small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
    