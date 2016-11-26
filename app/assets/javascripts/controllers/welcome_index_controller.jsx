class WelcomeIndexController extends ActionController {
  constructor(props) {
    super(props);
    this.state = {  };
    this.defaultAction = 'index'
  }

  actionIndex() {
  }

  getTopicEssay(topic_uid) {
    _.find(this.props.essays, (e) => (e.topic_uid == topic_uid))
  }

  getCategoryEssay(category_uid) {
    _.find(this.props.essays, (e) => (e.category_uid == category_uid))
  }

  renderIndex() {
    return (
      <div>
        Welcome to Resume-1.
        <h2>Topics</h2>
        { this.props.categories.map((category, cidx) =>
          <div key={category.uid}>
            <h3>{ category.label_ja } / { category.label_en }</h3>
            { category.topics.map((topic, tidx) =>
              <div key={topic.uid}>
                { topic.body }
              </div>
            )}
          </div>          
        ) }
        <hr />
        <h2>filled categories</h2>
        { this.props.categories.map((category, cidx) => 
          <div key={`a${category.uid}`}>
_.filterでgetCategoryEssay
          </div>
        ) }
      </div>
    )
  }
}
