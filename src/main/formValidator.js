export default class FormValidator{
  constructor(formEvent) {
    this.formEvent = formEvent;

  }

  regularCheck(inputField){
    const res = {err: false, message: null}
    const checkType = inputField.name;
    const checkValue = inputField.value;

    let regexSpace = /^\S*$/gi;
    let regexLang = /^[a-zа-яё\-]*$/gi;

    if(checkType === 'login'){
      if(!regexSpace.test(checkValue)){
        console.log('ошибка')
        res.message = 'Здесь не должно быть пробелов'
        res.err = true
        return res
      }
    }else{
      res.err = false
    }

    return res
  }

  checkInputValidity(inputField){
    const errorElement = document.querySelector(`#error-${event.target.id}`);

    const regExp = this.regularCheck(inputField)

    console.log()
    if (regExp.err){
      errorElement.textContent = regExp.message
      // if()
      // if(inputField.validity.typeMismatch){
      //   errorElement.textContent = 'Здесь должен быть имейл';

      // } else if (inputField.value.length===0&& inputField.name == 'password'){
      //   errorElement.textContent = 'Это обязательное поле';


      // } else if ( inputField.value.length<8 && inputField.name == 'password'){
      //   errorElement.textContent = 'Должно быть не менее 8 символов'

      // }
      // if(inputField.value.length<2 && inputField.name == 'login'){
      //   errorElement.textContent = 'Должно быть от 3 до 20 символов'
      // }

      return false;
    } else {
      errorElement.textContent = ''
      return true;
    }
  }
  setSubmitButtonState(submitButton, isValid){
    if (!isValid) {
      submitButton.classList.remove('button-active')
      submitButton.setAttribute('disabled', 'true')
    } else {
      submitButton.classList.add('button-active')
      submitButton.removeAttribute('disabled')
    }
  }
  validateForm(event, submitButton){
    const inputs = Array.from(event.currentTarget.querySelectorAll('input'))
    const isValid = inputs.every((input) => input.validity.valid);
    this.checkInputValidity(event.target);
    this.setSubmitButtonState(submitButton, isValid);
  }

  setEventListeners(){
    const submitButton = this.formEvent.querySelector('button');

    this.formEvent.addEventListener('input', (evt) => {
      this.validateForm(evt, submitButton);
    });
  }
}
