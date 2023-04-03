import { HomePage } from './pages/home';
import { Page404 } from './pages/404';
import { Page500 } from './pages/500';

window.addEventListener('DOMContentLoaded', ()=> {
  const root = document.querySelector('#root')!;

  const page500 = new Page500({});

  root.append(page500.getContent()!);

  page500.dispatchComponentDidMount();
});

// window.addEventListener('DOMContentLoaded', ()=> {
//   const root = document.querySelector('#root')!;

//   const Page404 = new Page404({});

//   root.append(Page404.getContent()!);

//   Page404.dispatchComponentDidMount();
// });


