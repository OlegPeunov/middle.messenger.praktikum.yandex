export default class FormValidator{
  constructor(formEvent) {
    this.formEvent = formEvent;
    this.res = {err: false, message: null}

  }

  regularCheck(inputField){
    const checkType = inputField.name;
    const checkValue = inputField.value;

    let regexSpace = /^\S*$/gi;
    let regexCapital = /^[A-ZА-Я]/;
    let regexNums = /^[0-9]*$/;
    // let regexLang1 = /^[a-zа-яё\-]*$/gi; first_name
    let regexLang2 = /^[\w\_\-]*$/gi;
    

    if(checkType === 'login' && inputField.value.length !== 0){
      if(!regexSpace.test(checkValue)){
        this.res.message = 'Здесь не должно быть пробелов'
        this.res.err = true
        return this.res
      }


      // if(!regexCapital.test(checkValue)){
      //   this.res.message = 'Первая буква должна быть заглавной'
      //   this.res.err = true
      //   return this.res
      // }

      if(!regexLang2.test(checkValue)){
        this.res.message = 'Принимается только латиница и цифры'
        this.res.err = true
        return this.res
      }

      if(regexNums.test(checkValue)){
        this.res.message = 'Логин не может состоять из одних цифр'
        this.res.err = true
        return this.res
      }

      if(inputField.value.length < 3 || inputField.value.length > 20){
        this.res.message = 'Должно быть от 3 до 20 символов'
        this.res.err = true
        return this.res
      }
    }else{
      this.res.err = false
    }

    if(checkType === 'password' && inputField.value.length !== 0){
      if(!regexSpace.test(checkValue)){
        this.res.message = 'Здесь не должно быть пробелов'
        this.res.err = true
        return this.res
      }

      // if(!regexCapital.test(checkValue) && inputField.value.length !== 0){
      //   this.res.message = 'Первая буква должна быть заглавной'
      //   this.res.err = true
      //   return this.res
      // }

      if(!regexLang2.test(checkValue)){
        this.res.message = 'Принимается только кириллица или латиница'
        this.res.err = true
        return this.res
      }

      if(inputField.value.length < 8 || inputField.value.length > 40){
        this.res.message = 'Должно быть от 8 до 40 символов'
        this.res.err = true
        return this.res
      }
    }else{
      this.res.err = false
    }

    return this.res
  }

  checkInputValidity(inputField){
    const errorElement = document.querySelector(`#error-${event.target.id}`);

    const regExp = this.regularCheck(inputField)

    console.log()
    if (regExp.err){
      errorElement.textContent = regExp.message

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
    this.checkInputValidity(event.target);
    const isValid = inputs.every((input) => input.validity.valid && this.res);
    this.setSubmitButtonState(submitButton, isValid);
  }

  setEventListeners(){
    const submitButton = this.formEvent.querySelector('button');

    this.formEvent.addEventListener('input', (evt) => {
      this.validateForm(evt, submitButton);
    });
  }
}
