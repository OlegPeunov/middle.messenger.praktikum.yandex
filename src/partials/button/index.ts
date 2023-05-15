// eslint-disable-next-line
import { Block } from '../../utils/Block';
const template = require("./button.hbs");
import './button.pcss';

import './button.pcss';

interface ButtonProps {
  active: boolean;
  id: string;
  label: string;
  className: string
  events: {click: (event:any) => any};
}

// eslint-disable-next-line
export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  setTrue() {
    this.props.active = true;
    (this.element as HTMLButtonElement).disabled = this.props.active;
  }
  setFalse() {
    this.props.active = false;
    (this.element as HTMLButtonElement).disabled = this.props.active;
  }

  init() {
    (this.element as HTMLButtonElement).classList.add(this.props.className);
    (this.element as HTMLButtonElement).id = this.props.id;
    (this.element as HTMLButtonElement).disabled = this.props.active;
  }

  render() {
    return this.compile(template, this.props);
  }
}
