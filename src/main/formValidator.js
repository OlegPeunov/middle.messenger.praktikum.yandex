export default class FormValidator{
  constructor(formEvent) {
    this.formEvent = formEvent;
    this.res = {err: false, message: null}

  }

  regularCheck(inputField){
    const checkType = inputField.name;
    const checkValue = inputField.value;

    let regexSpace = /^\S*$/gi;
    let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    let regexCapital = /^[A-ZА-Я]/;
    let regexNums = /^[0-9]*$/;
    let regexOneCap = /([A-Z].*[0-9])|([0-9].*[A-Z])/;
    let regexLang1 = /^[a-zа-яё\-]*$/gi;
    let regexLang2 = /^[\w\_\-]*$/gi;
    

    if(checkType === 'login' && inputField.value.length !== 0){
      if(!regexSpace.test(checkValue)){
        this.res.message = 'Здесь не должно быть пробелов'
        this.res.err = true
        return this.res
      }

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


    if((checkType === 'second_name' || checkType === 'first_name') && inputField.value.length !== 0){
      if(!regexSpace.test(checkValue)){
        this.res.message = 'Здесь не должно быть пробелов'
        this.res.err = true
        return this.res
      }

      if(!regexCapital.test(checkValue)){
        this.res.message = 'Первая буква должна быть заглавной'
        this.res.err = true
        return this.res
      }

      if(!regexLang1.test(checkValue)){
        this.res.message = 'Принимается только латиница и кириллица'
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

    if((checkType === 'password'||checkType === 'password-one'|checkType === 'password-two') && inputField.value.length !== 0){      
      
      if(!regexSpace.test(checkValue)){
        this.res.message = 'Здесь не должно быть пробелов'
        this.res.err = true
        return this.res
      }
      
      if(!regexOneCap.test(checkValue)){
        this.res.message = 'Обязательна хотя бы одна заглавная буква и цифра'
        this.res.err = true
        return this.res
      }

      if(inputField.value.length < 8 || inputField.value.length > 40){
        this.res.message = 'Должно быть от 8 до 40 символов'
        this.res.err = true
        return this.res
      }

      if(checkType === 'password-two'){
        const passOne = this.formEvent.querySelector('#password-one-signup').value
        if(checkValue !== passOne){
          this.res.message = 'Пароли не свопадают'
          this.res.err = true
          return this.res
        }
      }

    }else{
      this.res.err = false
    }

    
    if(checkType === 'email' && inputField.value.length !== 0){
      if(!regexMail.test(checkValue)){
        this.res.message = 'Здесь должен быть имейл'
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
    const isValid = inputs.every((input) => input.validity.valid && !this.res.err);
    this.setSubmitButtonState(submitButton, isValid);
  }

  setEventListeners(){
    const submitButton = this.formEvent.querySelector('button');

    this.formEvent.addEventListener('input', (evt) => {
      this.validateForm(evt, submitButton);
    });
  }
}
