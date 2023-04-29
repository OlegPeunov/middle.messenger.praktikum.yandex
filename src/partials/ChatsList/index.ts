// eslint-disable-next-line
import { Block } from '../../utils/Block';
// eslint-disable-next-line
import { Message } from '../../partials/message/index';
// eslint-disable-next-line
import { Chat } from '../../partials/chat/index';
import listTpl from './chatsList.hbs';

interface ChatsListProps {}

// eslint-disable-next-line
export class ChatsList extends Block<ChatsListProps>{
  constructor(props: ChatsListProps) {
    super('div', props);
  }

  init() {
    this.element!.classList.add('chat__left'); 




    // this.children.chat1 = new Chat({
    //   chatClass: '',
    //   userName: 'Гутенберг',
    //   // eslint-disable-next-line
    //   lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda totam iusto quam, voluptatibus sequi sit.',
    //   dateTime: 'вт',
    //   isUnread: '',
    //   unredAmount: '0',
    // });
    // this.children.chat2 = new Chat({
    //   chatClass: '',
    //   userName: 'Гутенберг',
    //   // eslint-disable-next-line
    //   lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda totam iusto quam, voluptatibus sequi sit.',
    //   dateTime: 'вт',
    //   isUnread: '',
    //   unredAmount: '0',
    // });
    // this.children.chat3 = new Chat({
    //   chatClass: 'content-holder__choice',
    //   userName: 'Аня',
    //   lastMessage: 'Приветикик',
    //   dateTime: '15:12',
    //   isUnread: 'unread-show',
    //   unredAmount: '3',
    // });
  }

  render() {
    return this.compile(listTpl, this.props);
  }
}













// import Block from '../../utils/Block';
// import template from './chatsList.hbs';
// import { Chat } from '../Chat';
// import { withStore } from '../../utils/Store';
// import { ChatInfo } from '../../api/ChatsAPI';
// import ChatsController from '../../controllers/ChatsController';
// import MessagesController from '../../controllers/MessagesController';
// import { Link } from '../Link';

// const chats = [
//   {
//     id: 1,
//     title: 'Chat 1',
//     unread_count: 2,
//   },
//   {
//     id: 1,
//     title: 'Chat 2',
//     unread_count: 0,
//   },
//   {
//     id: 1,
//     title: 'Chat 3',
//     unread_count: 0,
//   }
// ]

// interface ChatsListProps {
//   chats: ChatInfo[];
//   isLoaded: boolean;
// }

// class ChatsListBase extends Block<ChatsListProps> {
//   constructor(props: ChatsListProps) {
//     super({...props});
//   }

//   protected init() {
//     this.children.chats = this.createChats(this.props);
//     this.children.profileLink = new Link({ to: '/profile', label: 'Профиль'});
//   }

//   protected componentDidUpdate(oldProps: ChatsListProps, newProps: ChatsListProps): boolean {
//     this.children.chats = this.createChats(newProps);

//     return true;
//   }

//   private createChats(props: ChatsListProps) {
//     return props.chats.map(data => {
//       return new Chat({
//         ...data,
//         events: {
//           click: () => {
//             ChatsController.selectChat(data.id);
//           }
//         }
//       });
//     })
//   }

//   protected render(): DocumentFragment {
//     return this.compile(template, {...this.props, styles});
//   }
// }

// const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

// export const ChatsList = withChats(ChatsListBase);
