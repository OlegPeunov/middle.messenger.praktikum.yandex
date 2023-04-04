// eslint-disable-next-line
import { Block } from '../../utils/Block';
import template from './input.hbs';
import './input.pcss';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  id: string;
  events: {click: () => void};
}

// eslint-disable-next-line
export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super('input', props);
  }

  get() {
    return (this.element as HTMLInputElement).value
  }

  init() {
    (this.element as HTMLInputElement).placeholder = this.props.placeholder;
    (this.element as HTMLInputElement).id = this.props.id;
    (this.element as HTMLInputElement).type = this.props.type;
    (this.element as HTMLInputElement).name = this.props.name;
    (this.element as HTMLInputElement).required = true;
    this.element!.classList.add('popup__input');

  }

  render() {
    return this.compile(template, this.props);
  }
}
