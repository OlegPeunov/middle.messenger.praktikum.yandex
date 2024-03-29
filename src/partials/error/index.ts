// eslint-disable-next-line
import { Block } from '../../utils/Block';
const template = require("./error.hbs");
import './error.pcss';

interface ErrorProps {
  label: string;
  id: string;
}

// eslint-disable-next-line
export class Error extends Block<ErrorProps> {
  constructor(props: ErrorProps) {
    super('span', props);
  }

  init() {
    this.element!.id = this.props.id;
    this.element!.classList.add('error-message');
  }

  render() {
    return this.compile(template, this.props);
  }
}
