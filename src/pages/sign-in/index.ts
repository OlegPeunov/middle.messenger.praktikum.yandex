import FormValidator from '../../utils/formValidator';

(function () {
  const container = this.document.querySelector('.root');
  const signInForm = container.querySelector('#signin');

  const signInValidator = new FormValidator(signInForm);

  signInForm.addEventListener('submit', (event:Event) => {
    event.preventDefault();
    const login = signInForm.elements.login.value;
    const password = signInForm.elements.password.value;
    type Res = {'login': string, 'password': string};
    const res: Res = { login, password };
    console.log(res);
  });
  signInValidator.setEventListeners();
}());
