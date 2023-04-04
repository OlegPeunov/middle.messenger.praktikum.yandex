// eslint-disable-next-line
import { Block } from '../../utils/Block';
import template from './button.hbs';
import './button.pcss';

interface ButtonProps {
  label: string;
  className: string
  events: {click: () => void};
}

// eslint-disable-next-line
export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  init() {
    this.element!.classList.add(this.props.className);
  }

  render() {
    return this.compile(template, this.props);
  }
}
