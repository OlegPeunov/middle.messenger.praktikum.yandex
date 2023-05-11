// eslint-disable-next-line
import {Block} from '../../utils/Block';
// eslint-disable-next-line
import template from './message.hbs';
import './message.pcss';

interface MessageProps {
  contentClass: string;
  textMessage: string;
  showImg: string;
}

// eslint-disable-next-line
export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super('div', props);
  }

  init() {
    this.element!.classList.add('message__holder');
  }

  render() {
    return this.compile(template, this.props);
  }
}
