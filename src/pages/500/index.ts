// eslint-disable-next-line
import { Block } from '../../utils/Block';
// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index'

const Tpl500 = require("./500.hbs");


interface Props500 {

}

// eslint-disable-next-line
export class Page500 extends Block<Props500>{
  constructor(props: Props500) {
    super('div', props);
  }

  init() {
    this.children.headerBlock = new HeaderPage({

    });
    this.element!.classList.add('root-err');
  }

  render() {
    return this.compile(Tpl500, this.props);
  }
}
