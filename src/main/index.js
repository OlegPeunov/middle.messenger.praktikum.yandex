// import "./pages/index.css";
// import FormValidator from './formValidator';
// import signInFFile from '../pages/sign-in/signin.hbs';


(function(){

const container = document.querySelector('.root');

const signInForm = container.querySelector('#signin');
// const signUpForm = container.querySelector('#signup');



// const ignInValidator = new FormValidator(signInForm);
// const signUValidator = new FormValidator(signUpForm);




// signInForm.addEventListener('submit', function(){
//   event.preventDefault()
//   const email = signInForm.elements.email.value
//   const password = signInForm.elements.password.value
//   eroorServerSignIn.textContent = ''

//   newApi.signIn(email, password)
//   .then((res)=>{
//     newSignIn.close()
//     localStorage.setItem('token', res.token);

//     newApi.getUserInfo(res.token)
//       .then((res)=>{
//         localStorage.setItem('user', JSON.stringify({
//           name: res.name,
//           email: res.email
//         }));
//         userInfo.setUserInfo()
//         userInfo.userButtonOpen()
//         userInfo.savedNewsButtonOpen()
//         userInfo.signinButtonClose()
//         location.reload()
//       })
//       .catch((err)=>{
//         console.log(err)
//       })
//   })
//   .catch((err)=>{
//     eroorServerSignIn.textContent = err
//   })
// });


// signUpForm.addEventListener('submit', function(){
//   event.preventDefault()
//   const email = signUpForm.elements.email.value
//   const password = signUpForm.elements.password.value
//   const name = signUpForm.elements.name.value
//   eroorServer.textContent = ''

//   newApi.newUser(email, password, name)
//   .then((res)=>{
//     newSignUP.close()
//     newUser.open()
//   })
//   .catch((err)=>{
//     eroorServer.textContent = err
//   })
// });




}());
