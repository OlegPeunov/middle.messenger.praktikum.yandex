import { Block } from '../../utils/Block';
import { HeaderPage } from '../../partials/header/index'
import Tpl404 from './404.hbs';

interface Props404 {

}

export class Page404 extends Block<Props404>{
  constructor(props: Props404){
    super('div', props)
  }

  init() {
    this.children.headerBlock = new HeaderPage({ 
 
    });
  }

  render() {
    return this.compile(Tpl404, this.props);
  }
}


// const root = document.querySelector('#root')!;
  
// const button = new Button({ 
//   label: 'button',
//   events: {click: () => {console.log('клик')}} 
// });

// root.append(button.getContent()!);
