import { HomePage } from './pages/home';

window.addEventListener('DOMContentLoaded', ()=> {
  const root = document.querySelector('#root')!;
  console.log('sdfs')
  const homePage = new HomePage({});

  root.append(homePage.getContent()!);

  homePage.dispatchComponentDidMount();
});
