/* eslint-disable */
import { Block } from '../../utils/Block';
import { InputValidator } from '../../utils/InputValidator';
const signinTpl = require("./password_form.hbs");
import { Button } from '../../partials/button/index';
import { Input } from '../../partials/input/index';
import { Error } from '../../partials/error/index';
import AuthController from '../../controllers/AuthController';
import { UpdatePasswordData } from '../../api/AuthAPI';
/* eslint-enable */

interface editPasswordProps {

}
// eslint-disable-next-line
export class EditPassword extends Block<editPasswordProps>{
  constructor(props: editPasswordProps) {
    super('div', props);
  }

  init() {
    const inputValidator = new InputValidator();
    const validateButton = { input2: true, input1: true };

    function checkBtn(btn:any) {
      if (!validateButton.input2 && !validateButton.input1) {
        btn.setFalse();
      } else {
        btn.setTrue();
      }
    }

    // this.children.headerBlock = new HeaderPage({});

    this.children.inputPasswordOld = new Input({
      name: 'oldPassword',
      id: 'password-signin-old',
      type: 'password',
      placeholder: 'Пароль',
      value:'',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputPasswordOld.get(), 'password');
          this.children.errPlacePasswordOld.setProps({ label: res.message });
          validateButton.input1 = res.err;
          this.children.passwordButton.setProps({ active: false });
          checkBtn(this.children.passwordButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputPasswordOld.get(), 'password');
          this.children.errPlacePasswordOld.setProps({ label: res.message });
          validateButton.input1 = res.err;
          checkBtn(this.children.passwordButton);
        },
      },
    });
    this.children.errPlacePasswordOld = new Error({
      label: '',
      id: 'error-password-signin-old',
    });
    
    this.children.inputPassword = new Input({
      name: 'newPassword',
      id: 'password-signin',
      type: 'password',
      placeholder: 'Пароль',
      value:'',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputPassword.get(), 'password');
          this.children.errPlacePassword.setProps({ label: res.message });
          validateButton.input2 = res.err;
          this.children.passwordButton.setProps({ active: false });
          checkBtn(this.children.passwordButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputPassword.get(), 'password');
          this.children.errPlacePassword.setProps({ label: res.message });
          validateButton.input2 = res.err;
          checkBtn(this.children.passwordButton);
        },
      },
    });
    this.children.errPlacePassword = new Error({
      label: '',
      id: 'error-password-signin',
    });

    this.children.passwordButton = new Button({
      active: true,
      id: 'popup-button-signin',
      className: 'popup__button-active',
      label: 'Авторизоваться',
      events: {
        click: (event:Event) => {
          event.preventDefault();

          const res2 = inputValidator.regularCheck(this.children.inputPassword.get(), 'password');
          this.children.errPlacePassword.setProps({ label: res2.message });
          validateButton.input2 = res2.err;

          checkBtn(this.children.passwordButton);

          if (!validateButton.input2 && !validateButton.input1) {
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

    AuthController.updateUserPassword(data as UpdatePasswordData);
  }

  render() {
    return this.compile(signinTpl, this.props);
  }
}
