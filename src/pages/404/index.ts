// eslint-disable-next-line
import { Block } from '../../utils/Block';
const Tpl404 = require("./404.hbs");
// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index';

interface Props404 {

}

// eslint-disable-next-line
export class Page404 extends Block<Props404> {
  constructor(props: Props404) {
    super('div', props);
  }

  init() {
    this.children.headerBlock = new HeaderPage({

    });
    this.element!.classList.add('root-err');
  }

  render() {
    return this.compile(Tpl404, this.props);
  }
}
