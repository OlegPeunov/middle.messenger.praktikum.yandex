// eslint-disable-next-line
import { Block } from '../../utils/Block';
import signinTpl from './signin.hbs';
import { Button } from '../../partials/button/index';
// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index';
import { Input } from '../../partials/input/index';

interface signinProps {

}
// eslint-disable-next-line
export class Signin extends Block<signinProps>{
  constructor(props: signinProps) {
    super('div', props);
  }

  init() {
    this.children.headerBlock = new HeaderPage({});
    this.children.inputLogin = new Input({
      name: 'login',
      id: 'login-signin',
      type: 'login',
      placeholder: 'Логин',
      events: { click: () => {} },
    });
    this.children.inputPassword = new Input({
      name: 'password',
      id: 'password-signin',
      type: 'password',
      placeholder: 'Пароль',
      events: { click: () => {} },
    });
    this.children.signInButton = new Button({
      id: 'popup-button-signin',
      className: 'popup__button',
      label: 'Авторизоваться',
      events: { click: () => {} },
    });
  }

  render() {
    return this.compile(signinTpl, this.props);
  }
}
