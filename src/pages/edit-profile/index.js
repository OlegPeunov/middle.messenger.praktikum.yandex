import FormValidator from '../../main/formValidator';

(function(){

const container = document.querySelector('.root');
const editForm = container.querySelector('#edit');

const editValidator = new FormValidator(editForm);

editForm.addEventListener('submit', function(){
  event.preventDefault()
  const email = editForm.elements.email.value
  const login = editForm.elements.login.value
  const name1 = editForm.elements.first_name.value
  const name2 = editForm.elements.second_name.value
  const phone = editForm.elements.phone.value
  const password1 = editForm.elements.password_one.value
  const password2 = editForm.elements.password_two.value
  console.log({
    "email": email, 
    "login": login,
    "name1": name1,
    "name2": name2,
    "phone": phone,
    "login": login,
    "password1": password1,
    "password2": password2,
  })
  
});

editValidator.setEventListeners();

}());
