import { Block } from '../../utils/Block';
import { Button } from '../../partials/button/index'
import { HeaderPage } from '../../partials/header/index'
import homeTpl from './home.hbs';

interface HomeProps {

}

export class HomePage extends Block<HomeProps>{
  constructor(props: HomeProps){
    super('div', props)
  }

  init() {
    this.children.headerBlock = new HeaderPage({ 
      label: 'click me',
      events: {click: () => {}} 
    });
  }

  render() {
    return this.compile(homeTpl, this.props);
  }
}


// const root = document.querySelector('#root')!;
  
// const button = new Button({ 
//   label: 'button',
//   events: {click: () => {console.log('клик')}} 
// });

// root.append(button.getContent()!);
