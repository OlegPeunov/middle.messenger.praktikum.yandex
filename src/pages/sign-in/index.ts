import FormValidator from '../../utils/FormValidator';
import { Block } from '../../utils/Block';
import signinTpl from './signin.hbs';
import { HeaderPage } from '../../partials/header/index';

interface signinProps {

}

export class Signin extends Block<signinProps>{
  constructor(props: signinProps){
    super('div', props)
  }

  init() {
    this.children.headerBlock = new HeaderPage({ 
 
    });
  }

  render() {
    return this.compile(signinTpl, this.props);
  }
}


// (function () {
//   const container = this.document.querySelector('.root');
//   const signInForm = container.querySelector('#signin');

//   const signInValidator = new FormValidator(signInForm);

//   signInForm.addEventListener('submit', (event:Event) => {
//     event.preventDefault();
//     const login = signInForm.elements.login.value;
//     const password = signInForm.elements.password.value;
//     type Res = {'login': string, 'password': string};
//     const res: Res = { login, password };
//     console.log(res);
//   });
//   signInValidator.setEventListeners();
// }());
