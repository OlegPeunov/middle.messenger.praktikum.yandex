/* eslint-disable */
import { HomePage } from './pages/home';
import { Page404 } from './pages/404';
import { Page500 } from './pages/500';
import { Profile } from './pages/profile';
import { Signin } from './pages/sign-in';
import { Signup } from './pages/sign-up';
import  store  from './utils/Store';
import { EditProfile } from './pages/edit-profile';
import AuthController from './controllers/AuthController';
import Router from './utils/Router';
/* eslint-enable */

enum Routes {
  Index = '/',
  Err404 = '/page-404',
  Err500 = '/page-500',
  Profile = '/profile',
  Signin = '/sign-in',
  Signup = '/sign-up',
  EditProfile = '/edit-profile',
}

window.addEventListener('DOMContentLoaded', async () => {

  Router
    .use(Routes.Index, HomePage)
    .use(Routes.Err404, Page404)
    .use(Routes.Err500, Page500)
    .use(Routes.Profile, Profile)
    .use(Routes.Signin, Signin)
    .use(Routes.Signup, Signup)
    .use(Routes.EditProfile, EditProfile)
    .start();

    // let isProtectedRoute = true;

    // switch (window.location.pathname) {
    //   case Routes.Index:
    //   case Routes.Signup:
    //   case Routes.Signin:
    //     isProtectedRoute = false;
    //     break;
    // }
  
    // try {
    //   await AuthController.fetchUser();
  
    //   Router.start();
  
    //   if (!isProtectedRoute) {
    //     Router.go(Routes.Index)
    //   }
    // } catch (e) {
    //   Router.start();
  
    //   if (isProtectedRoute) {
    //     Router.go(Routes.Index);
    //   }
    // }
  
});
