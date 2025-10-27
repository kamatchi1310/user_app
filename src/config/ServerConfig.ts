export default class ServerConfig {
  static readonly AUTH_TOKEN: string = "server-auth-token";
  /**
   * Stores the token to the localstorage
   * @param token jwt token
   */
  static getServerAuthToken(): string {
    const token = localStorage.getItem(this.AUTH_TOKEN);
    return token || "";
  }

  /**
   * Stores the token to the localstorage
   * @param token jwt token
   */
  static setServerToken(accessToken: string) {
    localStorage.setItem(this.AUTH_TOKEN, accessToken);
  }

  /**
   * Remove the server access token stored in local storage
   */
  static deleteServerAuthToken() {
    localStorage.removeItem(this.AUTH_TOKEN);
    localStorage.removeItem("access_token_expires_at");
    localStorage.removeItem("refresh_token");
  }
}
