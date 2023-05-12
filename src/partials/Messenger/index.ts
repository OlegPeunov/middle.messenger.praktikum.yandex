// eslint-disable-next-line
import { Block } from '../../utils/Block';
// eslint-disable-next-line
import { Message } from '../../partials/message/index';
import { Input } from '../../partials/input/index';
// eslint-disable-next-line
import messengerTpl from './messenger.hbs';
import router from '../../utils/Router';
import { Button } from '../button/index';
import MessagesController, { Message as MessageInfo } from '../../controllers/MessagesController';
import { withStore } from '../../utils/Store';
import store from '../../utils/Store';

import ChatsController from '../../controllers/ChatsController';

interface MessengerProps {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number;
  usersAmount: number
}

// eslint-disable-next-line
export class MessengerBase extends Block<MessengerProps>{
  constructor(props: MessengerProps) {
    super('div', props);
  }

  async init() {
    this.element!.classList.add('chat__right');
    
    this.children.btnAdd = new Button({
      active: false,
      id: 'user-add',
      className: 'user-manage',
      label: 'Добавить пользователя',
      events: {
        click: (event:Event) => {
          // event.preventDefault();
          this.userAdd();
        },
      },
    });

    this.children.btnDel = new Button({
      active: false,
      id: 'user-del',
      className: 'user-manage',
      label: 'Удалить пользователя',
      events: {
        click: (event:Event) => {
          this.userDelete();
          router.go('/profile');

        },
      },
    });

    this.children.btnDelChat = new Button({
      active: false,
      id: 'chat-del',
      className: 'user-manage',
      label: 'Удалить чат',
      events: {
        click: (event:Event) => {
          this.chatDelete();
        },
      },
    });


    this.children.btnMessageSend = new Button({
      active: false,
      id: 'btn-send',
      className: 'write__button',
      label: '',
      events: {
        click: (event:Event) => {
          event.preventDefault();
          if(typeof store.getState().selectedChat === 'number'){
            const input = <HTMLInputElement>document.getElementById('best-input');
            if(input.value.trim() !== ''){
              MessagesController.sendMessage(this.props.selectedChat!, input.value);
            }
          }else{
            console.log('выберите чат')
          }
        },
      },
    });

    for( let i =0; i < this.props.messages.length; i++){
      const regex = /\d\d:\d\d/i;
      return this.props.messages.map((message, i) =>{
  
        const messageName:string = 'message'+i;
  
        const messageNew = new Message({
          contentClass: message.user_id === this.props.userId ? 'message_sent' : 'message_received',
          textMessage: message.content + `<span class="message__time">${message.time.match(regex)}</span>`,
          showImg: '',
        });
        this.children[messageName] = messageNew;
      })
    }
    // this.children.messages = this.createMessages(this.props);


    if(typeof store.getState().selectedChat === 'number'){
      await ChatsController.getUsers(store.getState().selectedChat)
        .then(res => console.log(Object.keys([res]).length))
    }
  }


  async userAdd() {
    const res = Number(prompt('Id пользователя'));

    await ChatsController.addUserToChat(store.getState().selectedChat, res)

  }


  async userDelete() {
    const res = Number(prompt('Id пользователя'));

    await ChatsController.delUserFromChat(store.getState().selectedChat, res)

  }

  async chatDelete() {
    await ChatsController.delete(store.getState().selectedChat)
      .then(()=> location.reload())
  }


  async componentDidUpdate(oldProps: MessengerProps, newProps: MessengerProps): Promise<boolean> {
    // this.children.messages = this.createMessages(newProps);
    for( let i =0; i < newProps.messages.length; i++){
      const regex = /\d\d:\d\d/i;
      newProps.messages.forEach((message, i) =>{
  
        const messageName:string = 'message'+i;
  
        const messageNew = new Message({
          contentClass: message.user_id === newProps.userId ? 'message_sent' : 'message_received',
          textMessage: message.content + `<span class="message__time">${message.time.match(regex)}</span>`,
          showImg: '',
        });
        this.children[messageName] = messageNew;
      })
    }

    if(typeof store.getState().selectedChat === 'number'){
      await ChatsController.getUsers(store.getState().selectedChat)
        .then(res => console.log(Object.keys([res]).length))
    }
    
    return true;
  }

  // private createMessages(props: MessengerProps) {
  //   const regex = /\d\d:\d\d/i;
  //   return this.props.messages.map((message, i) =>{

  //     const messageName:string = 'message'+i;

  //     const messageNew = new Message({
  //       contentClass: message.user_id === this.props.userId ? 'message_sent' : 'message_received',
  //       textMessage: message.content + `<span class="message__time">${message.time.match(regex)}</span>`,
  //       showImg: ''
  //     });
  //     this.children[messageName] = messageNew;
  //   })
   
  // }

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
  };

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.id
  };
});

export const Messenger = withSelectedChatMessages(MessengerBase);
