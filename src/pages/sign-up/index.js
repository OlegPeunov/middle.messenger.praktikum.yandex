import FormValidator from '../../main/formValidator';

(function(){

const container = document.querySelector('.root');

const signupForm = container.querySelector('#signup');

const signInValidator = new FormValidator(signupForm);

signupForm.addEventListener('submit', function(){
  event.preventDefault()
  const email = signupForm.elements.email.value
  const login = signupForm.elements.login.value
  const name1 = signupForm.elements.first_name.value
  const name2 = signupForm.elements.second_name.value
  const phone = signupForm.elements.phone.value
  const password1 = signupForm.elements.password_one.value
  const password2 = signupForm.elements.password_two.value
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

signInValidator.setEventListeners();

}());
