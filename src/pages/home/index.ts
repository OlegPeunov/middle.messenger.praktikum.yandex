// eslint-disable-next-line
import { Block } from '../../utils/Block';
// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index';
// eslint-disable-next-line
import { MainPage } from '../main/index';
import { ChatsList } from '../../partials/ChatsList';
import { Messenger } from '../../partials/Messenger';

// eslint-disable-next-line
import './main.pcss'
import homeTpl from './home.hbs';

interface HomeProps {

}
// eslint-disable-next-line
export class HomePage extends Block<HomeProps>{
  constructor(props: HomeProps) {
    super('main', props);
  }

  init() {
    
    // this.children.headerBlock = new HeaderPage({});
    this.children.chatsList = new ChatsList({});
    // this.children.chatsList = new ChatsList({ isLoaded: false });
    this.children.messenger = new Messenger({});

    this.element!.classList.add('chat');

  }

  render() {
    return this.compile(homeTpl, this.props);
  }
}
