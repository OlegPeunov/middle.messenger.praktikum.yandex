// eslint-disable-next-line
import { Block } from '../../utils/Block';
import editProfileTpl from './edit-profile.hbs';
// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index';

interface editProfileProps {

}
// eslint-disable-next-line
export class EditProfile extends Block<editProfileProps>{
  constructor(props: editProfileProps) {
    super('div', props);
  }

  init() {
    this.children.headerBlock = new HeaderPage({

    });
  }

  render() {
    return this.compile(editProfileTpl, this.props);
  }
}
