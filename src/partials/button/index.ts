import { Block } from "../../utils/Block";

import template from './button.hbs'

interface ButtonProps{
  label: string;
};

export class Button extends Block<ButtonProps>{
  constructor() {
    super('button', { label: 'button' })
  }

  render() {
    return this.compile(template, this.props)
  }
}
