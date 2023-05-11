// eslint-disable-next-line
import { Block } from '../../utils/Block';
// eslint-disable-next-line
import { Chat } from '../chat/index';
import { ChatInfo } from '../../api/ChatsAPI';
import ChatsController from '../../controllers/ChatsController';
import { withStore } from '../../utils/Store';
import store from '../../utils/Store';

import listTpl from './chatsList.hbs';

interface ChatsListProps {
  selectedChat: number | undefined;
  chats: ChatInfo[];
  isLoaded: boolean;
}

// eslint-disable-next-line
class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    super('div', props);
  }

  async init() {

    this.element!.classList.add('chat__left');

    await ChatsController.fetchChats();

    this.props.chats.forEach(async (chat, i) =>{
      
      const chatName:string = 'chat'+i;
      const isSelected = store.getState().selectedChat === chat.id ? true : false;
      const chatNew = new Chat({
        id: chat.id,
        isSelected: isSelected,
        title: chat.title,
        isUnread: '',
        avatar: ((chat.avatar !== null && chat.avatar !== undefined)) ? await this.getAva(chat.avatar) : '',
        unread_count: '0',
        events: {
          click: () => {
            ChatsController.selectChat(chat.id);
          }
        }
      });
      
      this.children[chatName] = chatNew;
    })

  }

  

  async componentDidUpdate(oldProps: ChatsListProps, newProps: ChatsListProps): boolean {

    await newProps.chats.forEach(async (chat, i) =>{
      let ava:any = ''

      if(chat.avatar !== null && chat.avatar !== undefined){
        await fetch(`https://ya-praktikum.tech/api/v2/resources${chat.avatar}`, {
          method: 'get',
          credentials: 'include',
          mode: 'cors',
        })
          .then(response => {
            ava = response.url
            return response.url
          })
          .catch ((err)=>{
            console.log(err)
          })
      }

      const chatName:string = 'chat'+i;
      const isSelected = store.getState().selectedChat === chat.id ? true : false;
      const chatNew = new Chat({
        id: chat.id,
        isSelected: isSelected,
        title: chat.title,
        isUnread: '',
        unread_count: '0',
        avatar: ava,
        events: {
          click: () => {
            ChatsController.selectChat(chat.id);
          }
        }
      });
      this.children[chatName] = chatNew;
    })
    

    
    return true;
  }

  async getAva(ava:any) {
    if(ava !== null){
      await fetch(`https://ya-praktikum.tech/api/v2/resources${ava}`, {
      method: 'get',
      credentials: 'include',
      mode: 'cors',
    })
      .then(response => {
        return response.url
      })
      .catch ((err)=>{
        console.log(err)
      })
    }
  }
  render() {
    return this.compile(listTpl, this.props);
  }
}

const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

export const ChatsList = withChats(ChatsListBase);
