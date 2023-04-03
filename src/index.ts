import { HomePage } from './pages/home';
import { Page404 } from './pages/404';

window.addEventListener('DOMContentLoaded', ()=> {
  const root = document.querySelector('#root')!;

  const page404 = new Page404({});

  root.append(page404.getContent()!);

  page404.dispatchComponentDidMount();
});

// window.addEventListener('DOMContentLoaded', ()=> {
//   const root = document.querySelector('#root')!;

//   const Page404 = new Page404({});

//   root.append(Page404.getContent()!);

//   Page404.dispatchComponentDidMount();
// });


