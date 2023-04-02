import { HomePage } from './pages/home';
import { Button } from './partials/button/index';

window.addEventListener('DOMContentLoaded', ()=> {
  const root = document.querySelector('#root')!;

  // const homePage = new HomePage({});

  const button = new Button({ label: 'button' });

  root.innerHTML = button.element!.outerHTML;

  // root.append(button.getContent()!);

  // homePage.dispatchComponentDidMount();
});
