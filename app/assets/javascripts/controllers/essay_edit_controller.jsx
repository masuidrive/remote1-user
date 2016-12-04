class EssayEditController extends ActionController {
  constructor(props) {
    super(props)
    this.state = {
      body: props.essay.body,
      topic_uid: props.essay.topic_uid
    }
    this.defaultAction = 'index'
  }

  actionIndex() {
  }

  handleUpdateEssayBody(text) {
    this.setState({
      body: text
    });
  }

  handleUpdateTopicUid(topic_uid) {
    this.setState({
      topic_uid: topic_uid
    });
  }

  actionPost() {
    var essay = new EssayModel()
    essay.body = this.state.body
    essay.topic_uid = this.state.topic_uid
    essay.category_uid = this.props.category.uid
    return new Promise((resolve, reject) => {
      essay.post().then(() => {
        resolve()
      })
      .catch(() => {
        reject()
      })
    })

  }

  renderIndex() {
    return (
      <div>
        <h2>{ this.props.category.label_ja }</h2>
        <div className="">
          { this.props.category.description_ja }
        </div>
        <EditEssayComponent
          dispatch={ this.dispatch }
          body={ this.state.body }
          topic_uid={ this.state.topic_uid }
          category={ this.props.category }
        />
        <div className="">
          <button className="btn btn-primary" onClick={() => this.dispatch('action', 'post') }>
            回答を投稿する
          </button>
        </div>
      </div>
    )
  }

  renderPostEssay() {
    return (
      <div>
      OK
      </div>
    )
  }
}
