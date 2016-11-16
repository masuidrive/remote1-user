// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
class UserModel {
  constructor(options) {
  }

  set username(str) {
    this.username_digest = this.digest(str);
  }

  set password(str) {
    this.password_digest = this.digest(str);
  }

  digest(str) {
    return sha256(str+this.salt());
  }

  salt() {
    return document.querySelector("meta[name='client-salt']").attributes.getNamedItem("content").value;
  }

  signup() {
    var data = new FormData();
    data.append('user[username]', this.username_digest);
    data.append('user[password]', this.password_digest);

    var csrf_token = document.querySelector("meta[name='csrf-token']").attributes.getNamedItem("content").value;

    return new Promise((resolve, reject) => {
      fetch("/users.json", {
        method: 'post',
        body: data,
        headers: new Headers({
          "X-CSRF-Token": csrf_token
        })
      })
        .then((response) => response.json())
        .then((json) => {
          // jsonにJSONオブジェクトで結果が渡される
          console.log(json);
          resolve(json);
        })
        .catch((err) => {
          reject(err);
        })
    })
  }  

}