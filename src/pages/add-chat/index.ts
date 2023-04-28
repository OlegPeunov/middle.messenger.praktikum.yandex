/* eslint-disable */
import { Block } from '../../utils/Block';
import { InputValidator } from '../../utils/InputValidator';
import chatAdd from './add_chat.hbs';
import { Button } from '../../partials/button/index';
import { HeaderPage } from '../../partials/header/index';
import { Input } from '../../partials/input/index';
import { Error } from '../../partials/error/index';
import AuthController from '../../controllers/AuthController';
import { UpdatePasswordData } from '../../api/AuthAPI';
/* eslint-enable */

interface addChatProps {}

// eslint-disable-next-line
export class ChatAdd extends Block<addChatProps>{
  constructor(props: addChatProps) {
    super('div', props);
  }

  init() {
    const inputValidator = new InputValidator('');
    const validateButton = { input1: true };

    function checkBtn(btn) {
      if (!validateButton.input1) {
        btn.setFalse();
      } else {
        btn.setTrue();
      }
    }

    this.children.headerBlock = new HeaderPage({});

    this.children.inputPassword = new Input({
      name: 'new-chat',
      id: 'password-signin',
      type: 'text',
      placeholder: 'Название',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputPassword.get(), 'new-chat');
          this.children.errPlacePassword.setProps({ label: res.message });
          validateButton.input1 = res.err;
          this.children.passwordButton.setProps({ active: false });
          checkBtn(this.children.passwordButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputPassword.get(), 'new-chat');
          this.children.errPlacePassword.setProps({ label: res.message });
          validateButton.input1 = res.err;
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
      label: 'Добавить',
      events: {
        click: (event:Event) => {
          event.preventDefault()

          checkBtn(this.children.passwordButton);

          if ( !validateButton.input1) {
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
    // const values = Object
    //   .values(this.children)
    //   .filter(child => child instanceof Input)
    //   .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

    // const data = Object.fromEntries(values);

    // AuthController.updateUserPassword(data as UpdatePasswordData);
  }

  render() {
    return this.compile(chatAdd, this.props);
  }
}
