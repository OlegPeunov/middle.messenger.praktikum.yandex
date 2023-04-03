// eslint-disable-next-line
import { Block } from '../../utils/Block';
import signinTpl from './signin.hbs';
// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index';

interface signinProps {

}
// eslint-disable-next-line
export class Signin extends Block<signinProps>{
  constructor(props: signinProps) {
    super('div', props);
  }

  init() {
    this.children.headerBlock = new HeaderPage({

    });
  }

  render() {
    return this.compile(signinTpl, this.props);
  }
}
