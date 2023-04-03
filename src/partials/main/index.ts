import { Block } from '../../utils/Block';
import mainTpl from './main.hbs';

interface MainProps {

}

export class MainPage extends Block<MainProps>{
  constructor(props: MainProps){
    super('div', props)
  }

  render() {
    return this.compile(mainTpl, this.props);
  }
}
