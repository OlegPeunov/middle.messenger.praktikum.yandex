import FormValidator from '../../main/formValidator';

(function(){

const container = document.querySelector('.root');

const signInForm = container.querySelector('#signin');

const signInValidator = new FormValidator(signInForm);

signInForm.addEventListener('submit', function(){
  event.preventDefault()
  const login = signInForm.elements.login.value
  const password = signInForm.elements.password.value
  console.log({"login": login, "password": password})
  
});

signInValidator.setEventListeners();

}());
