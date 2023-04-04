// eslint-disable-next-line
import { Block } from '../../utils/Block';
import signinTpl from './signin.hbs';
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
      id: 'login-signin',
      type: 'login',
      placeholder: 'Логин',
      events: { click: () => {} },
    });
    this.children.inputPassword = new Input({
      id: 'password-signin',
      type: 'password',
      placeholder: 'Пароль',
      events: { click: () => {} },
    });
  }

  render() {
    return this.compile(signinTpl, this.props);
  }
}
