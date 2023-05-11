// eslint-disable-next-line
import { Block } from '../../utils/Block';
import './profileField.pcss';
import template from './profileField.hbs';

interface profileFieldProps {
  label: string;
}

// eslint-disable-next-line
export class profileField extends Block<profileFieldProps> {
  constructor(props: profileFieldProps) {
    super('div', props);
  }

  init() {
    this.element!.classList.add('item-value');
  }

  render() {
    return this.compile(template, this.props);
  }
}
