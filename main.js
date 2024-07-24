//CARD NAME
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#cardholder');
let nameError = document.querySelector('.form__cardholder--error');


//CARD NUMBER
let numberCard = document.querySelector('.card__number');
let numberInput = document.querySelector('#cardNumber');
let numberError = document.querySelector('.form__inputNumber--error');

//MM
let monthCard = document.querySelector('.card__month');
let monthInput = document.querySelector('#cardMonth');
let monthError = document.querySelector('.form__input-mm--error');

//YY

let yearsCard = document.querySelector('.card__years');
let yearsInput = document.querySelector('#cardYear');
let yearsError = document.querySelector('.form__input-yy--error');

//CVC

let cvcCard = document.querySelector('.card-back__cvc');
let cvcInput = document.querySelector('#cardCvc');
let cvcError = document.querySelector('.form__input-cvc--error');


//INGRESO NAMECARD
nameInput.addEventListener('input', ()=> {
    if (nameInput.value == '') {
        nameCard.innerText = 'JANE APPLESEED'
    }else {
        nameCard.innerText = nameInput.value;
    }
})

//INGRESO NUMBERCARD

numberInput.addEventListener('input', event=> {
    let inputValue = event.target.value;

    //MOSTRAR LOS 0S POR DEFECTO
    if (numberInput.value == '') {
        numberCard.innerText = '0000 0000 0000 0000'
    }else {
        numberCard.innerText = numberInput.value;
    }
    //VALIDANDO QUE HAYA UNA LETRA
    let regExp = /[A-z]/g;
    if (regExp.test(numberInput.value)) {
        showError(numberInput, numberError, 'Wrong format, numbers only');
    }else {
        numberInput.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        hideError(numberInput, numberError);
    }
})

//Ingreso de mes

monthInput.addEventListener('input', ()=> {

    //MOSTRANDO 00 POR DEFECTO

    if (monthInput.value == '') {
        monthCard.innerText = '00'
    }else {
        monthCard.innerText = monthInput.value;
    }

    //VALIDANDO QUE HAYA UNA LETRA
    let regExp = /[A-z]/g;

    if (regExp.test(monthInput.value)) {
        showError(monthInput, monthError, 'Month incorrect');
    }else {
        hideError(monthInput, monthError);
    }
})

//Ingreso de año

yearsInput.addEventListener('input', ()=> {

    //MOSTRANDO 00 POR DEFECTO

    if (yearsInput.value == '') {
        yearsCard.innerText = '00'
    }else {
        yearsCard.innerText = yearsInput.value;
    }

    //VALIDANDO QUE HAYA UNA LETRA
    let regExp = /[A-z]/g;

    if (regExp.test(yearsInput.value)) {
        showError(yearsInput, yearsError, 'Year incorrect');
    }else {
        hideError(yearsInput, yearsError);
    }
})

//Ingreso CVC

cvcInput.addEventListener('input', ()=> {

    //MOSTRANDO 0S POR DEFECTO

    if (cvcInput.value == '') {
        cvcCard.innerText = '000'
    }else {
        cvcCard.innerHTML = cvcInput.value;
    }
})



//Button Confirm

let confirmBtn = document.querySelector('.form__submit');

let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvcValidation = false;

//SECCIONES FORMULARIO Y THANKS
let formSection = document.querySelector('.form');
let thanksSection = document.querySelector('.thanks-section');

confirmBtn.addEventListener('click', event=> {
    event.preventDefault();

    //VALIDAR NAME

    if (verifyIsFilled(nameInput, nameError)) {
        nameValidation = true;
    };

    //VALIDAR NUMERO

    if (verifyIsFilled(numberInput, numberError) == true) {
        if (numberInput.value.length == 19) {
            hideError(numberInput, numberError, '');
            numberValidation = true;
        }else {
            showError(numberInput, numberError, 'Wrong number');
            numberValidation = false;
        }
    };
    

    //VALIDAR MES

    if (verifyIsFilled(monthInput, monthError)) {
        if (parseInt(monthInput.value) >0 && parseInt(monthInput.value) <=12) {
            hideError(monthInput, monthError, '');
            monthValidation = true;
        }else {
            showError(monthInput, monthError, 'Wrong Month');
            monthValidation = false;

        }
    }

    //VALIDAR AÑO

    if (verifyIsFilled(yearsInput, yearsError)) {
        if (parseInt(yearsInput.value) >22 && parseInt(yearsInput.value) <=27) {
            hideError(yearsInput, yearsError, '');
            yearValidation = true;

        }else {
            showError(yearsInput, yearsError, 'Wrong Year');
            yearValidation = false;

        }
    };

    //VALIDAR CVC

    if (verifyIsFilled(cvcInput, cvcError)) {
        if(cvcInput.value.length <3) {
            showError(cvcInput, cvcError, 'Wrong CVC');
            cvcValidation = false;

        }else {
            hideError(cvcInput, cvcError, '');
            cvcValidation = true;

        }
    }

    //MOSTRAR MENSAJE THANK YOU

    if (nameValidation == true && numberValidation == true && monthValidation == true && yearValidation == true && cvcValidation == true) {
        formSection.style.display = 'none';
        thanksSection.style.display = 'block'
    }

})

//FUNCIONES

function showError(divInput, divError, msgError) {
    divError.innerText = msgError;
    divInput.style.borderColor = '#FF0000';
}

function hideError(divInput, divError) {
    divError.innerText = '';
    divInput.style.borderColor = 'hsl(270, 3%, 87%)';
}

function verifyIsFilled(divInput, divError) {
    if(divInput.value.length >0) {
        hideError(divInput, divError, "");
        return true;
    }else {
        showError(divInput, divError, "Can't be blank");
        return false;
    }


}


