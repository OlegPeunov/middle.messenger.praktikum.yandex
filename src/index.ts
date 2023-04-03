import { HomePage } from './pages/home';
import { Page404 } from './pages/404';
import { Page500 } from './pages/500';
import { Profile } from './pages/profile';
import { Signin } from './pages/sign-in';
import { Signup } from './pages/sign-up';
import { EditProfile } from './pages/edit-profile';

window.addEventListener('DOMContentLoaded', ()=> {
  const root = document.querySelector('#root')!;

  const pageProfile = new EditProfile({});

  root.append(pageProfile.getContent()!);

  pageProfile.dispatchComponentDidMount();
});

// window.addEventListener('DOMContentLoaded', ()=> {
//   const root = document.querySelector('#root')!;

//   const Page404 = new Page404({});

//   root.append(Page404.getContent()!);

//   Page404.dispatchComponentDidMount();
// });


