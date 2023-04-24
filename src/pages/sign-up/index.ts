/* eslint-disable */
import { Block } from '../../utils/Block';
import signupTpl from './signup.hbs';
import { InputValidator } from '../../utils/InputValidator';
import { Input } from '../../partials/input/index';
import { Error } from '../../partials/error/index';
import { Button } from '../../partials/button/index';
import { HeaderPage } from '../../partials/header/index';
import { SignupData } from '../../api/AuthAPI';
import AuthController from '../../controllers/AuthController';
/* eslint-enable */

interface signupProps {

}
// eslint-disable-next-line
export class Signup extends Block<signupProps> {
  constructor(props: signupProps) {
    super('div', props);
  }

  init() {
    const inputValidator = new InputValidator('');
    const validateButton = {
      input1: true,
      input2: true,
      input3: true,
      input4: true,
      input5: true,
      input6: true,
      input7: true,
    };

    function checkBtn(btn) {
      if (!validateButton.input1 && !validateButton.input2) {
        btn.setFalse();
      } else {
        btn.setTrue();
      }
    }

    this.children.headerBlock = new HeaderPage({});
    this.children.inputFirst = new Input({
      name: 'first_name',
      id: 'first_name-signup',
      type: 'login',
      placeholder: 'Имя',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputFirst.get(), 'first_name');
          this.children.errPlaceFirst.setProps({ label: res.message });
          validateButton.input3 = res.err;
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputFirst.get(), 'first_name');
          this.children.errPlaceFirst.setProps({ label: res.message });
          validateButton.input3 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlaceFirst = new Error({
      label: '',
      id: 'error-first_name-signup',
    });

    this.children.inputSecond = new Input({
      name: 'second_name',
      id: 'second_name-signup',
      type: 'login',
      placeholder: 'Фамилия',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputSecond.get(), 'second_name');
          this.children.errPlaceSecond.setProps({ label: res.message });
          validateButton.input4 = res.err;
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputSecond.get(), 'second_name');
          this.children.errPlaceSecond.setProps({ label: res.message });
          validateButton.input4 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlaceSecond = new Error({
      label: '',
      id: 'error-second_name-signup',
    });

    this.children.inputLogin = new Input({
      name: 'login',
      id: 'login-signin',
      type: 'login',
      placeholder: 'Логин',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputLogin.get(), 'login');
          this.children.errPlaceLogin.setProps({ label: res.message });
          validateButton.input2 = res.err;
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputLogin.get(), 'login');
          this.children.errPlaceLogin.setProps({ label: res.message });
          validateButton.input2 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlaceLogin = new Error({
      label: '',
      id: 'error-login-signup',
    });

    this.children.inputMail = new Input({
      name: 'email',
      id: 'email-signup',
      type: 'email',
      placeholder: 'Почта',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputMail.get(), 'email');
          this.children.errPlaceMail.setProps({ label: res.message });
          validateButton.input1 = res.err;
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputMail.get(), 'email');
          this.children.errPlaceMail.setProps({ label: res.message });
          validateButton.input1 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlaceMail = new Error({
      label: '',
      id: 'error-email-signup',
    });

    this.children.inputPassOne = new Input({
      name: 'password',
      id: 'password_one',
      type: 'password',
      placeholder: 'Пароль',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputPassOne.get(), 'password_one');
          this.children.errPlacePassOne.setProps({ label: res.message });
          validateButton.input6 = res.err;
          this.children.signUpButton.setProps({ active: false });
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputPassOne.get(), 'password_one');
          this.children.errPlacePassOne.setProps({ label: res.message });
          validateButton.input6 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlacePassOne = new Error({
      label: '',
      id: 'error-password_one',
    });

    this.children.inputTel = new Input({
      name: 'phone',
      id: 'phone-signup',
      type: 'tel',
      placeholder: 'Телефон',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputTel.get(), 'phone');
          this.children.errPlaceTel.setProps({ label: res.message });
          validateButton.input5 = res.err;
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputTel.get(), 'phone');
          this.children.errPlaceTel.setProps({ label: res.message });
          validateButton.input5 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlaceTel = new Error({
      label: '',
      id: 'error-phone-signup',
    });

    

    this.children.signUpButton = new Button({
      active: true,
      id: 'popup-button-signup',
      className: 'popup__button-active',
      label: 'Авторизоваться',
      events: {
        click: (event:Event) => {
          event.preventDefault();
          
          // eslint-disable-next-line
          const btnToEnable = (!validateButton.input1 && !validateButton.input2 && !validateButton.input3 && !validateButton.input4 && !validateButton.input5 && !validateButton.input6);

          if (btnToEnable) {
            this.onSubmit()
            // console.log({
            //   inputMail: this.children.inputMail.get(),
            //   login: this.children.inputLogin.get(),
            //   inputFirst: this.children.inputFirst.get(),
            //   inputSecond: this.children.inputSecond.get(),
            //   inputTel: this.children.inputTel.get(),
            //   inputPassOne: this.children.inputPassOne.get(),
            // });
          }
        },
      },
    });
  }

  onSubmit() {
    const values = Object
      .values(this.children)
      .filter(child => child instanceof Input)
      .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

    const data = Object.fromEntries(values);

    AuthController.signup(data as SignupData);
  }

  render() {
    return this.compile(signupTpl, this.props);
  }
}
