import { Block } from '../../utils/Block';
import { HeaderPage } from '../../partials/header/index'
import { MainPage } from '../main/index'
import Tpl404 from './404.hbs';

interface Props404 {

}

export class Page404 extends Block<Props404>{
  constructor(props: Props404){
    super('div', props)
  }

  init() {
    this.element!.classList.add('root-err')
  }

  render() {
    return this.compile(Tpl404, this.props);
  }
}
