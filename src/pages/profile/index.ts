import { Block } from '../../utils/Block';
import profileTpl from './profile.hbs';
import { HeaderPage } from '../../partials/header/index';

interface profileProps {

}

export class Profile extends Block<profileProps>{
  constructor(props: profileProps){
    super('div', props)
  }

  init() {
    this.children.headerBlock = new HeaderPage({ 
 
    });
  }

  render() {
    return this.compile(profileTpl, this.props);
  }
}
