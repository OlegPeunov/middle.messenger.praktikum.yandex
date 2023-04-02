import { HomePage } from './pages/home';
import { Button } from './partials/button/index';

window.addEventListener('DOMContentLoaded', ()=> {
  const root = document.querySelector('#root')!;

  const homePage = new HomePage({});

  root.append(homePage.getContent()!);

  homePage.dispatchComponentDidMount();
});
