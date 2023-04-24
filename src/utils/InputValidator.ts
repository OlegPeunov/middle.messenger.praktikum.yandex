// eslint-disable-next-line
export class InputValidator {
  private formEvent: any;

  private res: {'err': boolean, 'message': string | null} = { err: false, message: null };
  private pasWords: {'pass1':string | null, 'pass2': string | null} = { pass1: null, pass2: null };
  constructor(formEvent: unknown) {
    this.formEvent = formEvent;
  }
  
  regularCheck(value, name) {

    const checkType = name;
    const checkValue = value;

    const regexSpace = /^\S*$/gi;
    const regexMail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    const regexTel = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;
    const regexCapital = /^[A-ZА-Я]/;
    const regexNums = /^[0-9]*$/;
    const regexOneCap = /([A-Z].*[0-9])|([0-9].*[A-Z])/;
    const regexLang1 = /^[a-zа-яё-]*$/gi;
    const regexLang2 = /^[\w_-]*$/gi;

    if (checkType === 'login' && value.length !== 0) {
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

      if (value.length < 3 || value.length > 20) {
        this.res.message = 'Должно быть от 3 до 20 символов';
        this.res.err = true;
        return this.res;
      }
    } else {
      this.res.err = false;
    }

    if ((checkType === 'second_name' || checkType === 'first_name' || checkType === 'display_name')
       && value.length !== 0) {
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

      if ( value.length < 3 ||  value.length > 20) {
        this.res.message = 'Должно быть от 3 до 20 символов';
        this.res.err = true;
        return this.res;
      }
    } else {
      this.res.err = false;
    }

    if ((checkType === 'password' || checkType === 'password_one' || checkType === 'password_two')
      &&  value.length !== 0) {
      if(checkType === 'password_one'){
        this.pasWords.pass1 = checkValue
      } else if (checkType === 'password_two'){
        this.pasWords.pass2 = checkValue
      }

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

      if ( value.length < 8 ||  value.length > 40) {
        this.res.message = 'Должно быть от 8 до 40 символов';
        this.res.err = true;
        return this.res;
      }

    } else {
      this.res.err = false;
    }

    if (checkType === 'email' &&  value.length !== 0) {
      if (!regexMail.test(checkValue)) {
        this.res.message = 'Здесь должен быть имейл';
        this.res.err = true;
        return this.res;
      }
    } else {
      this.res.err = false;
    }

    if (checkType === 'phone' &&  value.length !== 0) {
      const truLength = value.split(' ').join('')
      if ( truLength.length < 10 ||  truLength.length > 15) {
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
    this.res.message = '';
    return this.res;
  }
  
}
