import FormValidator from '../../main/formValidator';

(function () {
  const container = this.document.querySelector('.root');

  const signupForm = container.querySelector('#signup');

  const signInValidator = new FormValidator(signupForm);

  signupForm.addEventListener('submit', (event:Event) => {
    event.preventDefault();
    const email = signupForm.elements.email.value;
    const login = signupForm.elements.login.value;
    const name1 = signupForm.elements.first_name.value;
    const name2 = signupForm.elements.second_name.value;
    const phone = signupForm.elements.phone.value;
    const password1 = signupForm.elements.password_one.value;
    const password2 = signupForm.elements.password_two.value;
    type Res = {
      'email': string,
      'login': string,
      'name1': string,
      'name2': string,
      'phone': string,
      'password1': string,
      'password2': string,
    }
    const res: Res = {
      email,
      login,
      name1,
      name2,
      phone,
      password1,
      password2,
    };
    console.log(res);
  });
  signInValidator.setEventListeners();
}());
