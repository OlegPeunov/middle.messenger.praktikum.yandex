/* eslint-disable */
import { Block } from '../../utils/Block';
import { InputValidator } from '../../utils/InputValidator';
var chatAdd = require("./add_chat.hbs");
import { Button } from '../../partials/button/index';
import { Input } from '../../partials/input/index';
import { Error } from '../../partials/error/index';
import ChatsController from '../../controllers/ChatsController';
import router from '../../utils/Router';
import './add_chat.pcss';

/* eslint-enable */
interface addChatProps {}

// eslint-disable-next-line
export class ChatAdd extends Block<addChatProps>{
  constructor(props: addChatProps) {
    super('div', props);
  }

  init() {
    const inputValidator = new InputValidator();
    const validateButton = { input1: true };

    function checkBtn(btn:any) {
      if (!validateButton.input1) {
        btn.setFalse();
      } else {
        btn.setTrue();
      }
    }

    // this.children.headerBlock = new HeaderPage({});

    this.children.inputPassword = new Input({
      name: 'title',
      id: 'password-signin',
      type: 'login',
      placeholder: 'Название',
      value: '',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputPassword.get(), 'title');
          this.children.errPlacePassword.setProps({ label: res.message });
          validateButton.input1 = res.err;
          this.children.passwordButton.setProps({ active: false });
          checkBtn(this.children.passwordButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputPassword.get(), 'title');
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
          }
        },
      },
    });
  }

  async onSubmit() {
    const values = Object
      .values(this.children)
      .filter(child => child instanceof Input)
      .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

    const data = Object.fromEntries(values);

    try {
      await ChatsController.create(data.title)
        .then(()=>{
          router.go('/');
        })
    } catch (e: any) {
      console.error(e);
    }
  }

  render() {
    return this.compile(chatAdd, this.props);
  }
}
