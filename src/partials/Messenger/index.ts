// eslint-disable-next-line
import { Block } from '../../utils/Block';
// eslint-disable-next-line
import { Message } from '../../partials/message/index';
// eslint-disable-next-line
import messengerTpl from './messenger.hbs';
import MessagesController, { Message as MessageInfo } from '../../controllers/MessagesController';
import { withStore } from '../../utils/Store';
import store from '../../utils/Store';



interface MessengerProps {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number;
}

// eslint-disable-next-line
export class MessengerBase extends Block<MessengerProps>{
  constructor(props: MessengerProps) {
    super('div', props);
  }

  init() {
    this.element!.classList.add('chat__right');
  }

   protected componentDidUpdate(oldProps: MessengerProps, newProps: MessengerProps): boolean {
    console.log('обнова')
    return true;
  }

  render() {
    
    return this.compile(messengerTpl, this.props);
  }
}

const withSelectedChatMessages = withStore(state => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.id
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.id
  };
});

export const Messenger = withSelectedChatMessages(MessengerBase);




// import Block from '../../utils/Block';
// import template from './messenger.hbs';
// import { Message } from '../Message';
// import { Input } from '../Input/input';
// import { Button } from '../Button';
// import styles from './styles.module.pcss';
// import MessagesController, { Message as MessageInfo } from '../../controllers/MessagesController';
// import { withStore } from '../../utils/Store';

// interface MessengerProps {
//   selectedChat: number | undefined;
//   messages: MessageInfo[];
//   userId: number;
// }

// class MessengerBase extends Block<MessengerProps> {
//   constructor(props: MessengerProps) {
//     super(props);
//   }
//   protected init() {
//     this.children.messages = this.createMessages(this.props);

//     this.children.input = new Input({
//       type: 'text',
//       placeholder: 'Сообщение',
//       name: 'message'
//     });

//     this.children.button = new Button({
//       label: 'Отправить',
//       type: 'button',
//       events: {
//         click: () => {
//           const input =this.children.input as Input;
//           const message = input.getValue();

//           input.setValue('');

//           MessagesController.sendMessage(this.props.selectedChat!, message);
//         }
//       }
//     });
//   }

//   protected componentDidUpdate(oldProps: MessengerProps, newProps: MessengerProps): boolean {
//     this.children.messages = this.createMessages(newProps);

//     return true;
//   }

//   private createMessages(props: MessengerProps) {
//     return props.messages.map(data => {
//       return new Message({...data, isMine: props.userId === data.user_id });
//     })
//   }

//   protected render(): DocumentFragment {
//     return this.compile(template, { ...this.props, styles });
//   }
// }

// const withSelectedChatMessages = withStore(state => {
//   const selectedChatId = state.selectedChat;

//   if (!selectedChatId) {
//     return {
//       messages: [],
//       selectedChat: undefined,
//       userId: state.user.id
//     };
//   }

//   return {
//     messages: (state.messages || {})[selectedChatId] || [],
//     selectedChat: state.selectedChat,
//     userId: state.user.id
//   };
// });






// this.children.message1 = new Message({
    //   contentClass: 'message_received',
    //   textMessage: `Привет! Смотри, 
    //   тут всплыл интересный кусок лунной космической 
    //   истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC 
    //   для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL —
    //   и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так
    //   как астронавты с собой забрали только кассеты с пленкой.<br><br>Хассельблад в итоге 
    //   адаптировал SWC для космоса, но что-то пошло не так и на ракету 
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
