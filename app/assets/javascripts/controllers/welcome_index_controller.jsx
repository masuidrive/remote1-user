class WelcomeIndexController extends ActionController {
  constructor(props) {
    super(props);
    this.state = {  };
    this.defaultAction = 'index'
  }

  actionIndex() {
  }

  getTopicEssay(topic_uid) {
    return _.find(this.props.essays, (e) => (e.topic_uid == topic_uid))
  }

  getCategoryEssay(category_uid) {
    console.log(`category_uid=${category_uid}`)
    console.log(_.find(this.props.essays, (e) => (e.topic.category_uid == category_uid)))
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
