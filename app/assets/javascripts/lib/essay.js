// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
class EssayModel {
  constructor(options) {
    this.body = ''
    this.topic_uid = undefined
    this.category_uid = undefined
  }

  post() {
    var data = new FormData()
    data.append('essay[topic_uid]', this.topic_uid)
    data.append('essay[body]', this.body)

    var csrf_token = document.querySelector("meta[name='csrf-token']").attributes.getNamedItem("content").value;

    return new Promise((resolve, reject) => {
      fetch(`/categories/${this.category_uid}/essay.json`, {
        method: "POST",
        credentials: "same-origin",
        body: data,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-Token": csrf_token
        }
      })
      .then((response) => {
        if(response.ok) {
          resolve(response.json())
        }
        else {
          reject(undefined)
        }
      })
      .catch(reject)
    });
  }
}