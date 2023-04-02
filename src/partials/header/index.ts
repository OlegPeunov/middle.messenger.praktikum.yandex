import { Block } from '../../utils/Block';
import { Button } from '../../partials/button/index'
import headerTpl from './header.hbs';

interface HeaderProps {

}

export class HeaderPage extends Block<HeaderProps>{
  constructor(props: HeaderProps){
    super('div', props)
  }

  init() {
    this.children.loginButton1 = new Button({ 
      label: 'Вход',
      events: {click: () => {}} 
    });
    this.children.loginButton2 = new Button({ 
      label: 'Регистрация',
      events: {click: () => {}} 
    });
    this.children.loginButton3 = new Button({ 
      label: 'Профиль',
      events: {click: () => {}} 
    });
    this.children.loginButton4 = new Button({ 
      label: 'Редактивровать профиль',
      events: {click: () => {}} 
    });
    this.children.loginButton5 = new Button({ 
      label: '404',
      events: {click: () => {}} 
    });
    this.children.loginButton6 = new Button({ 
      label: '500',
      events: {click: () => {}} 
    });
  }

  render() {
    return this.compile(headerTpl, this.props);
  }
}
