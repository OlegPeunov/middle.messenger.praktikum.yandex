/* eslint-disable */
import { Block } from '../../utils/Block';
import { InputValidator } from '../../utils/InputValidator';
const signinTpl = require("./avatar_form.hbs");
import './avatar_form.pcss';
import { Button } from '../../partials/button/index';
import router from '../../utils/Router';
import { Input } from '../../partials/input/index';
import { Error } from '../../partials/error/index';
import AuthController from '../../controllers/AuthController';
/* eslint-enable */

interface editAvatarProps {}
// eslint-disable-next-line
export class EditAvatar extends Block<editAvatarProps>{
  constructor(props: editAvatarProps) {
    super('div', props);
  }

  init() {
    AuthController.fetchUser();

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
    
    this.children.inputAvatar = new Input({
      name: 'file',
      id: 'avatar-input',
      type: 'file',
      placeholder: 'Ссылка',
      value:'',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputAvatar.get(), 'file');
          this.children.errPlaceAvatar.setProps({ label: res.message });
          validateButton.input1 = res.err;
          this.children.avatarButton.setProps({ active: false });
          checkBtn(this.children.avatarButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputAvatar.get(), 'file');
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

          const res2 = inputValidator.regularCheck(this.children.inputAvatar.get(), 'file');
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

    const avatar:any = document.getElementById('avatar-input');
    const form = new FormData();
    form.append('avatar', avatar.files[0])

    fetch(`https://ya-praktikum.tech/api/v2/user/profile/avatar`, {
      method: 'PUT',
      credentials: 'include',
      mode: 'cors',
      body: form,
    })
      .then(response => {
        response.json();
        router.go('/profile');
      })
      .then(data => {
        console.log(data);
        return data;
      });
  }

  render() {
    return this.compile(signinTpl, this.props);
  }
}
