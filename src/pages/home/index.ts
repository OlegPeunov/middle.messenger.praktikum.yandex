import { Block } from '../../utils/Block';
import homeTpl from './home.hbs';
import { Button } from '../../partials/button/index';



export class HomePage extends Block {
  constructor(){
    super('div')
  }

  render() {
    return this.compile(homeTpl, this.props);
  }

}
