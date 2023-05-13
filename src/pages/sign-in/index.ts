/* eslint-disable */
import { Block } from '../../utils/Block';
import { InputValidator } from '../../utils/InputValidator';
const signinTpl = require("./signin.hbs");
import { Button } from '../../partials/button/index';
import { Input } from '../../partials/input/index';
import { Error } from '../../partials/error/index';
import AuthController from '../../controllers/AuthController';
/* eslint-enable */

interface signinProps {

}
// eslint-disable-next-line
export class Signin extends Block<signinProps>{
  constructor(props: signinProps) {
    super('div', props);
  }

  init() {
    const inputValidator = new InputValidator();
    const validateButton = { input1: true, input2: true };

    function checkBtn(btn:any) {
      if (!validateButton.input1 && !validateButton.input2) {
        btn.setFalse();
      } else {
        btn.setTrue();
      }
    }

    // this.children.headerBlock = new HeaderPage({});
    this.children.inputLogin = new Input({
      name: 'login',
      id: 'login-signin',
      type: 'login',
      placeholder: 'Логин',
      value:'',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputLogin.get(), 'login');
          this.children.errPlaceLogin.setProps({ label: res.message });
          validateButton.input1 = res.err;
          checkBtn(this.children.signInButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputLogin.get(), 'login');
          this.children.errPlaceLogin.setProps({ label: res.message });
          validateButton.input1 = res.err;
          checkBtn(this.children.signInButton);
        },
      },
    });
    this.children.errPlaceLogin = new Error({
      label: '',
      id: 'error-login-signin',
    });

    this.children.inputPassword = new Input({
      name: 'password',
      id: 'password-signin',
      type: 'password',
      placeholder: 'Пароль',
      value:'',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputPassword.get(), 'password');
          this.children.errPlacePassword.setProps({ label: res.message });
          validateButton.input2 = res.err;
          this.children.signInButton.setProps({ active: false });
          checkBtn(this.children.signInButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputPassword.get(), 'password');
          this.children.errPlacePassword.setProps({ label: res.message });
          validateButton.input2 = res.err;
          checkBtn(this.children.signInButton);
        },
      },
    });
    this.children.errPlacePassword = new Error({
      label: '',
      id: 'error-password-signin',
    });

    this.children.signInButton = new Button({
      active: true,
      id: 'popup-button-signin',
      className: 'popup__button-active',
      label: 'Авторизоваться',
      events: {
        click: (event:Event) => {
          event.preventDefault();

          const res1 = inputValidator.regularCheck(this.children.inputLogin.get(), 'login');
          this.children.errPlaceLogin.setProps({ label: res1.message });
          validateButton.input1 = res1.err;

          const res2 = inputValidator.regularCheck(this.children.inputPassword.get(), 'password');
          this.children.errPlacePassword.setProps({ label: res2.message });
          validateButton.input2 = res2.err;

          checkBtn(this.children.signInButton);

          if (!validateButton.input1 && !validateButton.input2) {
            this.onSubmit();
            // console.log({
            //   login: this.children.inputLogin.get(),
            //   password: this.children.inputPassword.get(),
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

    AuthController.signin(data);
  }

  render() {
    return this.compile(signinTpl, this.props);
  }
}
