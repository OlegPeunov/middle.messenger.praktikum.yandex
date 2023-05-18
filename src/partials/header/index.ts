// eslint-disable-next-line
import { Block } from '../../utils/Block';
// eslint-disable-next-line
import { Button } from '../../partials/button/index';
const headerTpl = require("./header.hbs");


interface HeaderProps {

}
// eslint-disable-next-line
export class HeaderPage extends Block<HeaderProps> {
  constructor(props: HeaderProps) {
    super('header', props);
  }

  init() {
    this.children.loginButton1 = new Button({
      active: false,
      id: '',
      className: 'button-nav',
      label: 'Вход',
      events: { click: () => {} },
    });
    this.children.loginButton2 = new Button({
      active: false,
      id: '',
      className: 'button-nav',
      label: 'Регистрация',
      events: { click: () => {} },
    });
    this.children.loginButton3 = new Button({
      active: false,
      id: '',
      className: 'button-nav',
      label: 'Профиль',
      events: { click: () => {} },
    });
    this.children.loginButton4 = new Button({
      active: false,
      id: '',
      className: 'button-nav',
      label: 'Редактивровать профиль',
      events: { click: () => {} },
    });
    this.children.loginButton5 = new Button({
      active: false,
      id: '',
      className: 'button-nav',
      label: '404',
      events: { click: () => {} },
    });
    this.children.loginButton6 = new Button({
      active: false,
      id: '',
      className: 'button-nav',
      label: '500',
      events: { click: () => {} },
    });
  }

  render() {
    return this.compile(headerTpl, this.props);
  }
}
