/* eslint-disable */
import { FormValidator } from './utils/FormValidator';
import { HomePage } from './pages/home';
import { Page404 } from './pages/404';
import { Page500 } from './pages/500';
import { Profile } from './pages/profile';
import { Signin } from './pages/sign-in';
import { Signup } from './pages/sign-up';
import { EditProfile } from './pages/edit-profile';
/* eslint-enable */

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root')!;
  let currentPage;
  const pathPage = window.location.pathname;

  if (pathPage === '/') {
    currentPage = new HomePage({});
  } else if (pathPage === '/Page404') {
    currentPage = new Page404({});
  } else if (pathPage === '/Page500') {
    currentPage = new Page500({});
  } else if (pathPage === '/Profile') {
    currentPage = new Profile({});
  } else if (pathPage === '/Signin') {
    currentPage = new Signin({});
  } else if (pathPage === '/Signup') {
    currentPage = new Signup({});
  } else if (pathPage === '/EditProfile') {
    currentPage = new EditProfile({});
  }

  root.append(currentPage.getContent()!);
  currentPage.getContent();
  currentPage.dispatchComponentDidMount();

  // работаем с формой, если есть такая на странице
  // const fotmToValidate: any = root!.querySelector('#validateRform');
  // const formValidator = new FormValidator(fotmToValidate);

  // if (fotmToValidate !== null) {
  //   const formValidator = new FormValidator(fotmToValidate);
  //   if (pathPage === '/Signup' || pathPage === '/EditProfile') {
  //     fotmToValidate.addEventListener('submit', (event:Event) => {
  //       event.preventDefault();
  //       const email = fotmToValidate.elements.email.value;
  //       const login = fotmToValidate.elements.login.value;
  //       const name1 = fotmToValidate.elements.first_name.value;
  //       const name2 = fotmToValidate.elements.second_name.value;
  //       const phone = fotmToValidate.elements.phone.value;
  //       const password1 = fotmToValidate.elements.password_one.value;
  //       const password2 = fotmToValidate.elements.password_two.value;
  //       type Res = {
  //         'email': string,
  //         'login': string,
  //         'name1': string,
  //         'name2': string,
  //         'phone': string,
  //         'password1': string,
  //         'password2': string,
  //       }
  //       const res: Res = {
  //         email,
  //         login,
  //         name1,
  //         name2,
  //         phone,
  //         password1,
  //         password2,
  //       };
  //       console.log(res);
  //     });
  //   } else if (pathPage === '/Signin') {
  //     fotmToValidate.addEventListener('submit', (event:Event) => {
  //       event.preventDefault();

  //       const login = fotmToValidate.elements.login.value;
  //       const password = fotmToValidate.elements.password.value;
  //       type Res = {'login': string, 'password': string};
  //       const res: Res = { login, password };
  //       console.log(res);
  //     });
  //   }

  //   // formValidator.setEventListeners();
  // }
});
