// eslint-disable-next-line
import { Block } from '../../utils/Block';
var template = require("./input.hbs");
import './input.pcss';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  id: string;
  value: any
  events: { 
    focus: () => void,
    blur: () => void
  };
}

// eslint-disable-next-line
export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super('input', props);
  }

  get() {
    return (this.element as HTMLInputElement).value
  }

  async init() {
    (this.element as HTMLInputElement).placeholder = this.props.placeholder;
    (this.element as HTMLInputElement).id = this.props.id;
    (this.element as HTMLInputElement).value = this.props.value;
    (this.element as HTMLInputElement).type = this.props.type;
    (this.element as HTMLInputElement).name = this.props.name;
    (this.element as HTMLInputElement).required = true;
    this.element!.classList.add('popup__input');
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  render() {
    return this.compile(template, this.props);
  }
}
