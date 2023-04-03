// eslint-disable-next-line
import { Block } from '../../utils/Block';
// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index';
// eslint-disable-next-line
import { MainPage } from '../main/index';
// eslint-disable-next-line
import homeTpl from './home.hbs';

interface HomeProps {

}
// eslint-disable-next-line
export class HomePage extends Block<HomeProps>{
  constructor(props: HomeProps) {
    super('div', props);
  }

  init() {
    this.children.headerBlock = new HeaderPage({

    });

    this.children.mainBlock = new MainPage({});
  }

  render() {
    return this.compile(homeTpl, this.props);
  }
}
