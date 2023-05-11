import { set } from './helpers';
import { EventBus } from './EventBus';
import {Block} from './Block';
import { User } from '../api/AuthAPI';
import { ChatInfo } from '../api/ChatsAPI';
import { Message } from '../controllers/MessagesController';

export enum StoreEvents {
  Updated = 'updated'
}

interface State {
  user: User;
  chats: ChatInfo[];
  messages: Record<number, Message[]>;
  selectedChat?: number;
  id?: number;
}

export class Store extends EventBus {
  private state: any = {};

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);
    
    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();

export const withStore = (mapStateToProps: (state: State) => any) => {
  return (Component: typeof Block) => {
    return class WithStore extends Component {
      constructor (props: any){
        const mappedState = mapStateToProps(store.getState());
        super({...props, ...mappedState}, '');
  
        store.on(StoreEvents.Updated, (newState) => {
          const newMappedState = mapStateToProps(newState)
          this.setProps(newMappedState);
        });
      }
    }
  };
};


// @ts-ignore
window.store = store;

// export function withStore<SP>(mapStateToProps: (state: State) => SP) {
//   return function wrap<P>(Component: typeof Block<SP & P>){

//     return class WithStore extends Component {

//       constructor(props: Omit<P, keyof SP>) {
//         let previousState = mapStateToProps(store.getState());

//         super({ ...(props as P), ...previousState });

//         store.on(StoreEvents.Updated, () => {
//           const stateProps = mapStateToProps(store.getState());

//           previousState = stateProps;

//           this.setProps({ ...stateProps });
//         });

//       }

//     }

//   }
// }

export default store;

