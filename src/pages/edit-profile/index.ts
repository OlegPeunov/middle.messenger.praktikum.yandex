import FormValidator from '../../utils/FormValidator';

(function () {
  const container = this.document.querySelector('.root');
  const editForm = container.querySelector('#edit');

  const editValidator = new FormValidator(editForm);

  editForm.addEventListener('submit', (event:Event) => {
    event.preventDefault();
    const email = editForm.elements.email.value;
    const login = editForm.elements.login.value;
    const name1 = editForm.elements.first_name.value;
    const name2 = editForm.elements.second_name.value;
    const phone = editForm.elements.phone.value;
    const password1 = editForm.elements.password_one.value;
    const password2 = editForm.elements.password_two.value;
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
  editValidator.setEventListeners();
}());
