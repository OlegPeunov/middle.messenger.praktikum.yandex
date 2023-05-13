// eslint-disable-next-line
import { Block } from '../../utils/Block';
// eslint-disable-next-line
// eslint-disable-next-line
import { ChatsList } from '../../partials/ChatsList';
import { Messenger } from '../../partials/Messenger';

// eslint-disable-next-line
import './main.pcss'
const homeTpl = require("./home.hbs");

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
