// eslint-disable-next-line
import { Block } from '../../utils/Block';
// eslint-disable-next-line
import { Message } from '../../partials/message/index';
// eslint-disable-next-line
import { Chat } from '../../partials/chat/index';
import mainTpl from './main.hbs';

interface MainProps {

}
// eslint-disable-next-line
export class MainPage extends Block<MainProps>{
  constructor(props: MainProps) {
    super('main', props);
  }

  init() {
    this.element!.classList.add('chat');

    
  }

  render() {
    return this.compile(mainTpl, this.props);
  }
}

// this.children.message1 = new Message({
    //   contentClass: 'message_received',
    //   textMessage: `Привет! Смотри, 
    //   тут всплыл интересный кусок лунной космической 
    //   истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC 
    //   для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL —
    //    и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так
    //    как астронавты с собой забрали только кассеты с пленкой.<br><br>Хассельблад в итоге 
    //    адаптировал SWC для космоса, но что-то пошло не так и на ракету 
    //   они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно 
    //   продали на аукционе за 45000 евро. <span class="message__time">11:56</span>`,
    //   showImg: '',
    //   sentTime: '',
    // });

    // this.children.message2 = new Message({
    //   contentClass: 'message_no',
    //   textMessage: '',
    //   showImg: 'message__img-show',
    //   sentTime: '11:56',
    // });

    // this.children.message3 = new Message({
    //   contentClass: 'message_sent',
    //   textMessage: 'Круто!',
    //   showImg: '',
    //   sentTime: '12:00',
    // });

    
