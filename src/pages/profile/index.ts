// eslint-disable-next-line
import { Block } from '../../utils/Block';
import profileTpl from './profile.hbs';
import { Button } from '../../partials/button/index';
import AuthController from '../../controllers/AuthController';
import { User } from '../../api/AuthAPI';

// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index';

interface profileProps extends User {} {

}
// eslint-disable-next-line
export class Profile extends Block<profileProps> {
  constructor(props: profileProps) {
    super('div', props);
  }


  init() {
    this.children.headerBlock = new HeaderPage({});

    this.children.exitButton = new Button({
      active: false,
      id: 'logOut-btn',
      className: 'exit-btn',
      label: 'Выйти',
      events: {
        click: () => AuthController.logout()
      },
    });
  }

  render() {
    return this.compile(profileTpl, this.props);
  }
}
