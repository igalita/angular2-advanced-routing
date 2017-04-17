export class  AuthService {
  loggedIn = false;

  isAuth() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  logIn() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
