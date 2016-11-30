// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
class EssayModel {
  constructor(options) {
  }

  set body(str) {
    this.body = str
  }

  set topic_uid(str) {
    this.topic_uid = str
  }

  set category_uid(str) {
    this.category_uid = str
  }

  post() {
    var data = new FormData();
    data.append('essay[topic_uid]', this.topic_uid);
    data.append('essay[body]', this.body);

    var csrf_token = document.querySelector("meta[name='csrf-token']").attributes.getNamedItem("content").value;

    return new Promise((resolve, reject) => {
      fetch(`/categories/${this.category_uid}/essays.json`, {
        method: "PATCH",
        credentials: "same-origin",
        body: data,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-Token": csrf_token
        }
      })
      .then((response) => {
        if(response.ok) {
          resolve(response.json());
        }
        else {
          reject(undefined);
        }
      })
      .catch(reject)
    });
  }
}