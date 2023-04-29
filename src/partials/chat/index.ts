import {Block} from '../../utils/Block';
import template from './chat.hbs';
import './chat.pcss';

interface ChatProps {
  id: number;
  lastMessage: string;
  title: string;
  isUnread: string;
  unread_count: string;
  isSelected: boolean;
  events: {
    click: () => void;
  }
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
