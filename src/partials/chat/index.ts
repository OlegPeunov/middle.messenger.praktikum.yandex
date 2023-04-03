import {Block} from '../../utils/Block';
import template from './chat.hbs';
import './chat.pcss';

interface ChatProps {
  chatClass: string;
  lastMessage: string;
  dateTime: string;
  isUnread: string;
  unredAmount: string;
  userName: string;
}

export class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super('div', props);
  }

  init() {
    this.element!.classList.add('chat__block')
  }

  render() {
    return this.compile(template, this.props);
  }
}
