// eslint-disable-next-line
import { Block } from '../../utils/Block';
import template from './button.hbs';
import './button.pcss';

interface ButtonProps {
  active: boolean;
  id: string;
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
    (this.element as HTMLButtonElement).id = this.props.id;
    (this.element as HTMLButtonElement).disabled = this.props.active;
  }

  render() {
    return this.compile(template, this.props);
  }
}
