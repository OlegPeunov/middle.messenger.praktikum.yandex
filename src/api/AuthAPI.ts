import BaseAPI from './BaseAPI';

export interface SigninData {
  login: string;
  password: string;
}

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface UpdateData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  display_name: string;
  phone: string;
}

export interface UpdateAvatar {
  FormData: any;
}

export interface UpdatePasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export class AuthAPI extends BaseAPI {
  constructor() {
    super('/');
  }

  signin(data: SigninData) {
    return this.http.post('auth/signin', data);
  }

  signup(data: SignupData) {
    return this.http.post('auth/signup', data);
  }

  read(): Promise<User> {
    return this.http.get('auth/user');
  }

  logout() {
    return this.http.post('auth/logout');
  }
  
  updateUserPassword(data: UpdatePasswordData) {
    return this.http.put('user/password', data);
  }

  udateUser(data: UpdateData) {
    return this.http.put('user/profile', data);
  }

  updateAvatar(data: UpdateAvatar) {
    return this.http.put('user/profile/avatar', data);
  }

  // createChat(data: string) {
  //   return this.http.post('chats', data);
  // }

  deleteChat(data: string) {
    return this.http.delete('chats', data);
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new AuthAPI();
