// eslint-disable-next-line
import { Block } from '../../utils/Block';
// eslint-disable-next-line
import { Message } from '../../partials/message/index';
// eslint-disable-next-line
import { Chat } from '../../partials/chat/index';
import mainTpl from './main.hbs';

interface MainProps {

}
// eslint-disable-next-line
export class MainPage extends Block<MainProps>{
  constructor(props: MainProps) {
    super('main', props);
  }

  init() {
    this.element!.classList.add('chat');

    
  }

  render() {
    return this.compile(mainTpl, this.props);
  }
}    
