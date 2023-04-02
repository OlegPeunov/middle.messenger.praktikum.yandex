import {Block} from '../../utils/Block';
import template from './button.hbs';
import './button.pcss';

interface ButtonProps {
  label: string;
  events: {click: () => void};
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  init() {
    this.element!.classList.add('button-nav')
  }

  render() {
    return this.compile(template, this.props);
  }
}
