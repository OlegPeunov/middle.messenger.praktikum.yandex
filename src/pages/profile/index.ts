// eslint-disable-next-line
import { Block } from '../../utils/Block';
import store from '../../utils/Store';
import profileTpl from './profile.hbs';
import { Button } from '../../partials/button/index';
import AuthController from '../../controllers/AuthController';
import { User } from '../../api/AuthAPI';

// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index';

interface ProfileProps extends User {}

const userFields = ['id', 'first_name', 'second_name', 'display_name', 'login', 'avatar', 'email', 'phone'] as Array<keyof ProfileProps>;

// eslint-disable-next-line
export class Profile extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super('div', props);
  }


  init() {
    console.log(store.getState().user)
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
