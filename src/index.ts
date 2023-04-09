/* eslint-disable */
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
  } else if (pathPage === '/page-404') {
    currentPage = new Page404({});
  } else if (pathPage === '/page-500') {
    currentPage = new Page500({});
  } else if (pathPage === '/profile') {
    currentPage = new Profile({});
  } else if (pathPage === '/sign-in') {
    currentPage = new Signin({});
  } else if (pathPage === '/sign-up') {
    currentPage = new Signup({});
  } else if (pathPage === '/edit-profile') {
    currentPage = new EditProfile({});
  }

  root.append(currentPage.getContent()!);
  currentPage.getContent();
  currentPage.dispatchComponentDidMount();

});
