// eslint-disable-next-line
import { Block } from '../../utils/Block';
import profileTpl from './profile.hbs';
// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index';

interface profileProps {

}
// eslint-disable-next-line
export class Profile extends Block<profileProps> {
  constructor(props: profileProps) {
    super('div', props);
  }

  init() {
    this.children.headerBlock = new HeaderPage({

    });
  }

  render() {
    return this.compile(profileTpl, this.props);
  }
}
