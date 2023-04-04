// eslint-disable-next-line
import { Block } from '../../utils/Block';
// eslint-disable-next-line
import { InputValidator } from '../../utils/InputValidator';
import signinTpl from './signin.hbs';
import { Button } from '../../partials/button/index';
// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index';
import { Input } from '../../partials/input/index';
import { Error } from '../../partials/error/index';

interface signinProps {

}
// eslint-disable-next-line
export class Signin extends Block<signinProps>{
  constructor(props: signinProps) {
    super('div', props);
  }

  init() {
    const inputValidator = new InputValidator('');
    const validateButton = {input1: true, input2: true}

    function setButton(){ 
      if(validateButton.input1 === true && validateButton.input2 === true){
        return false
      }else {
        return true
      }
    }
    
    this.children.headerBlock = new HeaderPage({});
    this.children.inputLogin = new Input({
      name: 'login',
      id: 'login-signin',
      type: 'login',
      placeholder: 'Логин',
      events: { focus: () => {
        const res = inputValidator.regularCheck(this.children.inputLogin.get(), 'login')
        this.children.errPlaceLogin.setProps({label : res.message})
        validateButton.input1 = res.err
      },
      blur: () => {
        const res = inputValidator.regularCheck(this.children.inputLogin.get(), 'login')
        this.children.errPlaceLogin.setProps({label : res.message})
        validateButton.input1 = res.err
      }},
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
      events: { focus: (event:Event) => {
        const res = inputValidator.regularCheck(this.children.inputPassword.get(), 'password')
        this.children.errPlacePassword.setProps({label : res.message})
        validateButton.input2 = res.err
        },
        blur: (event:Event) => {
          const res = inputValidator.regularCheck(this.children.inputPassword.get(), 'password')
          this.children.errPlacePassword.setProps({label : res.message})
          validateButton.input2 = res.err
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
      className: 'popup__button',
      label: 'Авторизоваться',
      events: { click: () => {console.log( {'login': this.children.inputLogin.get(),
        'password': this.children.inputPassword.get()} )}},
    });
  }

  render() {
    
    return this.compile(signinTpl, this.props);
  }
}
