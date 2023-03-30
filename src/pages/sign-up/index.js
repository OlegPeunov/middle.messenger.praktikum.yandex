import FormValidator from '../../main/formValidator';

(function(){

const container = document.querySelector('.root');

const signupForm = container.querySelector('#signup');

const signInValidator = new FormValidator(signupForm);

signupForm.addEventListener('submit', function(){
  event.preventDefault()
  const email = signupForm.elements.email.value
  console.log(signupForm.elements)
  
});

signInValidator.setEventListeners();

}());
