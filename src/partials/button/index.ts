import {Block} from '../../utils/Block';
import template from './button.hbs';

interface ButtonProps {
  label: string;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({ type: 'button', ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
