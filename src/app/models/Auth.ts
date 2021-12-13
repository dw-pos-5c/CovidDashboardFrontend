export default class Auth {
  success: boolean;
  token: string;

  constructor(success: boolean, token: string) {
    this.success = success;
    this.token = token;
  }
}
