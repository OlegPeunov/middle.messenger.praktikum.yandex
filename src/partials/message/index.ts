import {Block} from '../../utils/Block';
import template from './message.hbs';
import './message.pcss';

interface MessageProps {
  contentClass: string;
  textMessage: string;
  showImg: string;
  sentTime: string;
}

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super('div', props);
  }

  init() {
    this.element!.classList.add('message__holder')
  }

  render() {
    return this.compile(template, this.props);
  }
}
