import {Block} from '../../utils/Block';
import template from './chat.hbs';
import './chat.pcss';

interface ChatProps {
  id: number;
  title: string;
  isUnread: string;
  unread_count: string;
  isSelected: boolean;
  avatar: string | any;
  events: {
    click: () => void;
  }
}

export class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super('div', props);
  }

  async init() {
    this.element!.classList.add('chat__block')
  }

  render() {
    return this.compile(template, this.props);
  }
}
