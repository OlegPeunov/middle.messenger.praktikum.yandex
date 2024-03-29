import API, { AuthAPI, SigninData, SignupData, UpdateAvatar, UpdateData, UpdatePasswordData } from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';
import MessagesController from './MessagesController';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SigninData) {
    try {
      await this.api.signin(data);

      await this.fetchUser();

      router.go('/profile');
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser();

      router.go('/profile');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async updateUser(data: UpdateData) {
    try {
      await this.api.udateUser(data);

      await this.fetchUser();

      router.go('/profile');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async updateAvatar(data: UpdateAvatar) {
    try {
      await this.api.updateAvatar(data);

      await this.fetchUser();

      router.go('/profile');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async updateUserPassword(data: UpdatePasswordData) {
    try {
      await this.api.updateUserPassword(data);

      await this.fetchUser();

      router.go('/profile');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.read();
      store.set('user', user);
      store.set('id', user.id);
    } catch (e: any) {
      console.error(e.message);
    }
  }
  async logout() {
    try {
      MessagesController.closeAll();

      await this.api.logout();
      
      router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
