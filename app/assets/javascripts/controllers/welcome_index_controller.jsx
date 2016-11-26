class WelcomeIndexController extends ActionController {
  constructor(props) {
    super(props);
    this.state = { };
    this.defaultAction = 'index'
  }

  actionIndex() {
  }

  getTopicEssay(topic_uid) {
    return _.find(this.props.essays, (e) => (e.topic_uid == topic_uid))
  }

  getCategoryEssay(category_uid) {
    return _.find(this.props.essays, (e) => (e.topic.category_uid == category_uid))
  }

  getFilledCategories() {
    return this.props.essays.map(e => e.topic.category)
  }

  getUnfilledCategories() {
    return _.differenceBy(this.props.categories, this.getFilledCategories(), c => c.uid)
  }

  renderIndex() {
    var filled_categories = this.getFilledCategories()
    var unfilled_categories = this.getUnfilledCategories()
    return (
      <div>
        Welcome to Resume-1.
        <h2>Catogories</h2>
        { this.props.categories.map((category, cidx) =>
          <div key={category.uid} className="panel panel-default">
            <div className="panel-heading">
              { category.label_ja } / { category.label_en }
            </div>
            <div className="panel-body">
              { _.isNil(essay = this.getCategoryEssay(category.uid)) ?
                <button className="btn btn-default">
                  回答する
                </button>
              :
                `回答済み: ${essay.topic.body}`
              }
            </div>
          </div>          
        ) }
        <hr />
        <h2>filled categories</h2>
        { filled_categories.map((category, cidx) => 
          <div key={`filled_${category.uid}`}>
            {category.label_ja}
          </div>
        ) }
        <hr />
        <h2>unfilled categories</h2>
        { unfilled_categories.map((category, cidx) => 
          <div key={`filled_${category.uid}`}>
            {category.label_ja}
          </div>
        ) }
      </div>
    )
  }
}
