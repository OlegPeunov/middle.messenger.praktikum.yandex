import { HomePage } from './pages/home';
import { Page404 } from './pages/404';
import { Page500 } from './pages/500';
import { Profile } from './pages/profile';

window.addEventListener('DOMContentLoaded', ()=> {
  const root = document.querySelector('#root')!;

  const pageProfile = new Profile({});

  root.append(pageProfile.getContent()!);

  pageProfile.dispatchComponentDidMount();
});

// window.addEventListener('DOMContentLoaded', ()=> {
//   const root = document.querySelector('#root')!;

//   const Page404 = new Page404({});

//   root.append(Page404.getContent()!);

//   Page404.dispatchComponentDidMount();
// });


