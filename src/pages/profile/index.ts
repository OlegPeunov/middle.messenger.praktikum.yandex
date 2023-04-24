// eslint-disable-next-line
import { Block } from '../../utils/Block';
import store from '../../utils/Store';
import { withStore } from '../../utils/Store';
import profileTpl from './profile.hbs';
import { Button } from '../../partials/button/index';
import AuthController from '../../controllers/AuthController';
import { User } from '../../api/AuthAPI';

// eslint-disable-next-line
import { HeaderPage } from '../../partials/header/index';

interface ProfileProps extends User {}

// const userFields = ['id', 'first_name', 'second_name', 'display_name', 'login', 'avatar', 'email', 'phone'] as Array<keyof ProfileProps>;


// eslint-disable-next-line
class ProfileBase extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super('div', props);
  }

  init() {
    AuthController.fetchUser();
    
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

const withUser = withStore((state) => ({...state.user}));
export const Profile = withUser(ProfileBase);
   
// console.log(store.getState().user)
// const userData = store.getState().user
// let displayName = userData['display_name']
// if(userData['display_name'] === null){
//   displayName = userData['first_name']
// }

// this.children.fieldName1 = new profileField({
//   label: userData['first_name']
// });
// this.children.fieldName2 = new profileField({
//   label: userData['second_name']
// });
// this.children.fieldLogin = new profileField({
//   label: userData['login']
// });
// this.children.fieldEmail = new profileField({
//   label: userData['email']
// });
// this.children.fieldChatName = new profileField({
//   label: displayName
// });
// this.children.fieldPhone = new profileField({
//   label: userData['phone']
// });
