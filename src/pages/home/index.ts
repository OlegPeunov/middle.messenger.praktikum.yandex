import { Block } from '../../utils/Block';
import homeTpl from './home.hbs';

export class HomePage extends Block {
  render() {
    return this.compile(homeTpl, this.props);
  }
}
