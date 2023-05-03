import API, { ChatsAPI } from '../api/ChatsAPI';
import store from '../utils/Store';
import MessagesController from './MessagesController';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    try {
    await this.api.create(title);

    this.fetchChats();
    } catch (e: any) {
      console.error(e);
    }
  }

  async fetchChats() {
    try {
      const chats = await this.api.read();
      chats.map(async (chat) => {
        const token = await this.getToken(chat.id);
        await MessagesController.connect(chat.id, token);
      });

      store.set('chats', chats);
      return chats
    } catch (e: any) {
      console.error(e);
    }
  }

  addUserToChat(id: number, userId: number) {
    try {
      this.api.addUsers(id, [userId]);
    } catch (e: any) {
      console.error(e);
    }
  }

  delUserFromChat(id: number, userId: number) {
    try {
      this.api.delUsers(id, [userId]);
    } catch (e: any) {
      console.error(e);
    }
  }

  async getUsers(id: number) {
    try {
      return await this.api.getUsers(id)
    } catch (e: any) {
      console.error(e);
    }
  }

  async delete(id: number) {
    try {
      await this.api.delete(id);
      this.fetchChats();
    } catch (e: any) {
      console.error(e);
    }
  }

  getToken(id: number) {
    try {
      return this.api.getToken(id);
    } catch (e: any) {
      console.error(e);
    }
  }

  selectChat(id: number) {
    try {
      store.set('selectedChat', id);
    } catch (e: any) {
      console.error(e);
    }
  }
}

const controller = new ChatsController();

// @ts-ignore
window.chatsController = controller;

export default controller;
