// eslint-disable-next-line
import { Block } from '../../utils/Block';
import './profile.pcss'
import store from '../../utils/Store';
import { withStore } from '../../utils/Store';
const profileTpl = require("./profile.hbs");
import { Button } from '../../partials/button/index';
import AuthController from '../../controllers/AuthController';
import router from '../../utils/Router';

// eslint-disable-next-line
interface ProfileProps{}

// const userFields = ['id', 'first_name', 'second_name', 'display_name', 'login', 'avatar', 'email', 'phone'] as Array<keyof ProfileProps>;


// eslint-disable-next-line
class ProfileBase extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super('div', props);
  }

  async init() {    
    this.children.exitButton = new Button({
      active: false,
      id: 'logOut-btn',
      className: 'exit-btn',
      label: 'Выйти',
      events: {
        click: () => {
          AuthController.logout()
            .then(()=>{
              router.go('/sign-in')
            })
        }
      },
    });

    if(store.getState().user.avatar !== null && store.getState().user.avatar !== undefined){
      await fetch(`https://ya-praktikum.tech/api/v2/resources${store.getState().user.avatar}`, {
        method: 'get',
        credentials: 'include',
        mode: 'cors',
      })
        .then(response => {
          const avatar:any = document.getElementById('profile-avatar');
          avatar.setAttribute('src', response.url);
        })
        .catch ((err)=>{
          console.log(err)
        })
    }
  }

  
  render() {
    return this.compile(profileTpl, this.props);
  }
}

const withUser = withStore((state: any) => ({...state.user}));
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
