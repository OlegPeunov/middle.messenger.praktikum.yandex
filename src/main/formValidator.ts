export default class FormValidator{
  private _formEvent: unknown;
  private _res: {'err': boolean, 'message': string | null} = {err: false, message: null};;
  
  constructor(formEvent: unknown) {
    this._formEvent = formEvent;
    
  }
  
  regularCheck (inputField) {
    const checkType = inputField.name;
    const checkValue = inputField.value;

    let regexSpace = /^\S*$/gi;
    let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    let regexTel = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;
    let regexCapital = /^[A-ZА-Я]/;
    let regexNums = /^[0-9]*$/;
    let regexOneCap = /([A-Z].*[0-9])|([0-9].*[A-Z])/;
    let regexLang1 = /^[a-zа-яё\-]*$/gi;
    let regexLang2 = /^[\w\_\-]*$/gi;

    if(checkType === 'login' && inputField.value.length !== 0){
      if(!regexSpace.test(checkValue)){
        this._res.message = 'Здесь не должно быть пробелов'
        this._res.err = true
        return this._res
      }

      if(!regexLang2.test(checkValue)){
        this._res.message = 'Принимается только латиница и цифры'
        this._res.err = true
        return this._res
      }

      if(regexNums.test(checkValue)){
        this._res.message = 'Логин не может состоять из одних цифр'
        this._res.err = true
        return this._res
      }

      if(inputField.value.length < 3 || inputField.value.length > 20){
        this._res.message = 'Должно быть от 3 до 20 символов'
        this._res.err = true
        return this._res
      }
    }else{
      this._res.err = false
    }


    if((checkType === 'second_name' || checkType === 'first_name') && inputField.value.length !== 0){
      if(!regexSpace.test(checkValue)){
        this._res.message = 'Здесь не должно быть пробелов'
        this._res.err = true
        return this._res
      }

      if(!regexCapital.test(checkValue)){
        this._res.message = 'Первая буква должна быть заглавной'
        this._res.err = true
        return this._res
      }

      if(!regexLang1.test(checkValue)){
        this._res.message = 'Принимается только латиница и кириллица'
        this._res.err = true
        return this._res
      }

      if(inputField.value.length < 3 || inputField.value.length > 20){
        this._res.message = 'Должно быть от 3 до 20 символов'
        this._res.err = true
        return this._res
      }
    }else{
      this._res.err = false
    }

    if((checkType === 'password'|| checkType === 'password_one' || checkType === 'password_two') && inputField.value.length !== 0){      
      
      if(!regexSpace.test(checkValue)){
        this._res.message = 'Здесь не должно быть пробелов'
        this._res.err = true
        return this._res
      }
      
      if(!regexOneCap.test(checkValue)){
        this._res.message = 'Обязательна хотя бы одна заглавная буква и цифра'
        this._res.err = true
        return this._res
      }

      if(inputField.value.length < 8 || inputField.value.length > 40){
        this._res.message = 'Должно быть от 8 до 40 символов'
        this._res.err = true
        return this._res
      }

      if(checkType === 'password_two'){
        const passOne = this._formEvent.querySelector('#password_one').value
        if(checkValue !== passOne){
          this._res.message = 'Пароли не свопадают'
          this._res.err = true
          return this._res
        }
      }

    }else{
      this._res.err = false
    }

    if(checkType === 'email' && inputField.value.length !== 0){
      if(!regexMail.test(checkValue)){
        this._res.message = 'Здесь должен быть имейл'
        this._res.err = true
        return this._res
      } 
    }else{
      this._res.err = false
    }

    if(checkType === 'phone' && inputField.value.length !== 0){
      if(inputField.value.length < 10 || inputField.value.length > 15){
        this._res.message = 'Должно быть от 10 до 15 символов'
        this._res.err = true
        return this._res
      }

      if(!regexTel.test(checkValue)){
        this._res.message = 'Укажите ваш телефон'
        this._res.err = true
        return this._res
      } 
    }else{
      this._res.err = false
    }
    return this._res
  }

  checkInputValidity (inputField, event:any) {
    const errorElement: any = document.querySelector(`#error-${event.target.id}`);
    const regExp = this.regularCheck(inputField)

    if (regExp.err){
      errorElement.textContent = regExp.message

      return false;
    } else {

      errorElement.textContent = ''
      return true;
    }
  }
  
  setSubmitButtonState(submitButton, isValid) {
    if (!isValid) {
      submitButton.classList.remove('button-active')
      submitButton.setAttribute('disabled', 'true')
    } else {
      submitButton.classList.add('button-active')
      submitButton.removeAttribute('disabled')
    }
  }
  
  validateForm(event:Event, submitButton) {
    const inputs = Array.from(event.currentTarget.querySelectorAll('input'))
    this.checkInputValidity(event.target);
    const isValid = inputs.every((input: any) => input.validity.valid && !this._res.err);
    this.setSubmitButtonState(submitButton, isValid);
  }

  setEventListeners () {
    const submitButton = this._formEvent.querySelector('button');

    this._formEvent.addEventListener('input', (evt) => {
      this.validateForm(evt, submitButton);
    });
  }
};
