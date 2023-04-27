/* eslint-disable */
import { Block } from '../../utils/Block';
import { InputValidator } from '../../utils/InputValidator';
import signinTpl from './avatar_form.hbs';
import './avatar_form.pcss';
import { Button } from '../../partials/button/index';
import { HeaderPage } from '../../partials/header/index';
import { Input } from '../../partials/input/index';
import { Error } from '../../partials/error/index';
import store from '../../utils/Store';
import AuthController from '../../controllers/AuthController';
import { UpdateAvatar } from '../../api/AuthAPI';
/* eslint-enable */

interface editAvatarProps {}
// eslint-disable-next-line
export class EditAvatar extends Block<editAvatarProps>{
  constructor(props: editAvatarProps) {
    super('div', props);
  }

  init() {
    AuthController.fetchUser();

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
    
    this.children.inputAvatar = new Input({
      name: 'link',
      id: 'password-signin',
      type: 'file',
      placeholder: 'Ссылка',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputAvatar.get(), 'link');
          this.children.errPlaceAvatar.setProps({ label: res.message });
          validateButton.input1 = res.err;
          this.children.avatarButton.setProps({ active: false });
          checkBtn(this.children.avatarButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputAvatar.get(), 'link');
          this.children.errPlaceAvatar.setProps({ label: res.message });
          validateButton.input1 = res.err;
          checkBtn(this.children.avatarButton);
        },
      },
    });
    this.children.errPlaceAvatar = new Error({
      label: '',
      id: 'error-password-signin',
    });

    this.children.avatarButton = new Button({
      active: true,
      id: 'popup-button-signin',
      className: 'popup__button-active',
      label: 'Сохранить',
      events: {
        click: (event:Event) => {
          event.preventDefault();

          const res2 = inputValidator.regularCheck(this.children.inputAvatar.get(), 'link');
          this.children.errPlaceAvatar.setProps({ label: res2.message });
          validateButton.input1 = res2.err;

          checkBtn(this.children.avatarButton);

          if (!validateButton.input1) {
            this.onSubmit();
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

    const dataLink = Object.fromEntries(values);
    const userData = store.getState().user
    console.log(dataLink);
    userData.avatar = dataLink.link
    console.log(userData);

    AuthController.updateAvatar(userData as UpdateAvatar);
  }

  render() {
    return this.compile(signinTpl, this.props);
  }
}
