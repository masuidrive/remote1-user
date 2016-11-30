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
          <button className="btn btn-primary">
            回答を投稿する
          </button>
        </div>
      </div>
    )
  }
}
