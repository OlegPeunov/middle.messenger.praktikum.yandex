// eslint-disable-next-line
export class FormValidator {
  private formEvent: any;

  private res: {'err': boolean, 'message': string | null} = { err: false, message: null };

  constructor(formEvent: unknown) {
    this.formEvent = formEvent;
  }

  regularCheck(inputField) {
    const checkType = inputField.name;
    const checkValue = inputField.value;

    const regexSpace = /^\S*$/gi;
    const regexMail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    const regexTel = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;
    const regexCapital = /^[A-ZА-Я]/;
    const regexNums = /^[0-9]*$/;
    const regexOneCap = /([A-Z].*[0-9])|([0-9].*[A-Z])/;
    const regexLang1 = /^[a-zа-яё-]*$/gi;
    const regexLang2 = /^[\w_-]*$/gi;

    if (checkType === 'login' && inputField.value.length !== 0) {
      if (!regexSpace.test(checkValue)) {
        this.res.message = 'Здесь не должно быть пробелов';
        this.res.err = true;
        return this.res;
      }

      if (!regexLang2.test(checkValue)) {
        this.res.message = 'Принимается только латиница и цифры';
        this.res.err = true;
        return this.res;
      }

      if (regexNums.test(checkValue)) {
        this.res.message = 'Логин не может состоять из одних цифр';
        this.res.err = true;
        return this.res;
      }

      if (inputField.value.length < 3 || inputField.value.length > 20) {
        this.res.message = 'Должно быть от 3 до 20 символов';
        this.res.err = true;
        return this.res;
      }
    } else {
      this.res.err = false;
    }

    if ((checkType === 'second_name' || checkType === 'first_name')
       && inputField.value.length !== 0) {
      if (!regexSpace.test(checkValue)) {
        this.res.message = 'Здесь не должно быть пробелов';
        this.res.err = true;
        return this.res;
      }

      if (!regexCapital.test(checkValue)) {
        this.res.message = 'Первая буква должна быть заглавной';
        this.res.err = true;
        return this.res;
      }

      if (!regexLang1.test(checkValue)) {
        this.res.message = 'Принимается только латиница и кириллица';
        this.res.err = true;
        return this.res;
      }

      if (inputField.value.length < 3 || inputField.value.length > 20) {
        this.res.message = 'Должно быть от 3 до 20 символов';
        this.res.err = true;
        return this.res;
      }
    } else {
      this.res.err = false;
    }

    if ((checkType === 'password' || checkType === 'password_one' || checkType === 'password_two')
      && inputField.value.length !== 0) {
      if (!regexSpace.test(checkValue)) {
        this.res.message = 'Здесь не должно быть пробелов';
        this.res.err = true;
        return this.res;
      }

      if (!regexOneCap.test(checkValue)) {
        this.res.message = 'Обязательна хотя бы одна заглавная буква и цифра';
        this.res.err = true;
        return this.res;
      }

      if (inputField.value.length < 8 || inputField.value.length > 40) {
        this.res.message = 'Должно быть от 8 до 40 символов';
        this.res.err = true;
        return this.res;
      }

      if (checkType === 'password_two') {
        const passOne = this.formEvent.querySelector('#password_one').value;
        if (checkValue !== passOne && passOne.length !== 0) {
          this.res.message = 'Пароли не свопадают';
          this.res.err = true;
          return this.res;
        }
      }

      if (checkType === 'password_one') {
        const passTwo = this.formEvent.querySelector('#password_two').value;
        if (checkValue !== passTwo && passTwo.length !== 0) {
          this.res.message = 'Пароли не свопадают';
          this.res.err = true;
          return this.res;
        }
      }
    } else {
      this.res.err = false;
    }

    if (checkType === 'email' && inputField.value.length !== 0) {
      if (!regexMail.test(checkValue)) {
        this.res.message = 'Здесь должен быть имейл';
        this.res.err = true;
        return this.res;
      }
    } else {
      this.res.err = false;
    }

    if (checkType === 'phone' && inputField.value.length !== 0) {
      if (inputField.value.length < 10 || inputField.value.length > 15) {
        this.res.message = 'Должно быть от 10 до 15 символов';
        this.res.err = true;
        return this.res;
      }

      if (!regexTel.test(checkValue)) {
        this.res.message = 'Укажите ваш телефон';
        this.res.err = true;
        return this.res;
      }
    } else {
      this.res.err = false;
    }
    return this.res;
  }

  checkInputValidity(event) {
    const errorElement: any = this.formEvent.querySelector(`#error-${event.id}`);
    const regExp = this.regularCheck(event);

    if (regExp.err) {
      errorElement.textContent = regExp.message;

      return false;
    }
    errorElement.textContent = '';
    return true;
  }
  // eslint-disable-next-line
  setSubmitButtonState(submitButton:any, isValid:any):void {
    if (!isValid) {
      submitButton.classList.remove('button-active');
      submitButton.setAttribute('disabled', 'true');
    } else {
      submitButton.classList.add('button-active');
      submitButton.removeAttribute('disabled');
    }
  }

  validateForm(event:any, submitButton:any) {
    const inputs = Array.from(event.currentTarget.querySelectorAll('input'));
    this.checkInputValidity(event.target);
    const isValid = inputs.every((input: any) => input.validity.valid && !this.res.err);
    this.setSubmitButtonState(submitButton, isValid);
  }

  setEventListeners() {
    const submitButton = this.formEvent.querySelector('button');

    this.formEvent.addEventListener('input', (evt) => {
      this.validateForm(evt, submitButton);
    });
  }
}
// test
