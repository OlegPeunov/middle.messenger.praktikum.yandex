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

    await ChatsController.fetchChats()

    this.props.chats.forEach((chat, i) =>{
      const chatName:string = 'chat'+i;
      const isSelected = store.getState().selectedChat === chat.id ? true : false;
      const chatNew = new Chat({
        id: chat.id,
        isSelected: isSelected,
        title: chat.title,
        isUnread: '',
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

  protected componentDidUpdate(oldProps: ChatsListProps, newProps: ChatsListProps): boolean {
    newProps.chats.forEach((chat, i) =>{
      const chatName:string = 'chat'+i;
      const isSelected = store.getState().selectedChat === chat.id ? true : false;
      const chatNew = new Chat({
        id: chat.id,
        isSelected: isSelected,
        title: chat.title,
        isUnread: '',
        unread_count: '0',
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
  render() {
    return this.compile(listTpl, this.props);
  }
}

const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

export const ChatsList = withChats(ChatsListBase);
