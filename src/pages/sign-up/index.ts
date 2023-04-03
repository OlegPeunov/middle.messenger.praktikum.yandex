// eslint-disable-next-line
import { Block } from '../../utils/Block';
import signupTpl from './signup.hbs';
// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index';

interface signupProps {

}
// eslint-disable-next-line
export class Signup extends Block<signupProps> {
  constructor(props: signupProps) {
    super('div', props);
  }

  init() {
    this.children.headerBlock = new HeaderPage({

    });
  }

  render() {
    return this.compile(signupTpl, this.props);
  }
}
