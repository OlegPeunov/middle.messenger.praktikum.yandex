import { HomePage } from './pages/home';
import { Page404 } from './pages/404';
import { Page500 } from './pages/500';
import { Profile } from './pages/profile';
import { Signin } from './pages/sign-in';
import { Signup } from './pages/sign-up';
import { EditProfile } from './pages/edit-profile';

// let setPage = function setPage(() => {
  
// });


window.addEventListener('DOMContentLoaded', ()=> {
  const root = document.querySelector('#root')!;
  let currentPage
  let pathPage = window.location.pathname;

  if(pathPage === '/'){
    currentPage = new HomePage({});
  } else if(pathPage === '/Page404'){
    currentPage = new Page404({});
  } else if(pathPage === '/Page500'){
    currentPage = new Page500({});
  } else if(pathPage === '/Profile'){
    currentPage = new Profile({});
  } else if(pathPage === '/Signin'){
    currentPage = new Signin({});
  } else if(pathPage === '/Signup'){
    currentPage = new Signup({});
  } else if(pathPage === '/EditProfile'){
    currentPage = new EditProfile({});
  }
  
  root.append(currentPage.getContent()!);

  currentPage.getContent();

});
