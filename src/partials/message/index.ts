// eslint-disable-next-line
import {Block} from '../../utils/Block';
// eslint-disable-next-line
const template = require("./message.hbs");
import './message.pcss';

interface MessageProps {
  contentClass: any;
  textMessage: any;
  showImg: any;
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
