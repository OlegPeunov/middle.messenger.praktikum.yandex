import { Block } from '../../utils/Block';
import { HeaderPage } from '../../partials/header/index'

import Tpl500 from './500.hbs';

interface Props500 {

}

export class Page500 extends Block<Props500>{
  constructor(props: Props500){
    super('div', props)
  }

  init() {
    this.children.headerBlock = new HeaderPage({ 
 
    });
    this.element!.classList.add('root-err')
  }

  render() {
    return this.compile(Tpl500, this.props);
  }
}
