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
        <h2>回答済みカテゴリ</h2>
        { filled_categories.map((category) =>
          <CategoryComponent category={category} key={category.uid}>
            <div className="panel-body">
              { _.truncate(this.getCategoryEssay(category.uid).topic.body) }
            </div>
            <div className="panel-body panel-actions">
              <a className="btn btn-primary" href={`/categories/${category.uid}/edit`}>
                編集する
              </a>
            </div>
          </CategoryComponent>
        ) }
        <hr />
        <h2>未回答カテゴリ</h2>
        { unfilled_categories.map((category) =>
          <CategoryComponent category={category} key={category.uid}>
            <div className="panel-body">
              <a className="btn btn-primary" href={`/categories/${category.uid}/edit`}>
                回答する
              </a>
            </div>
          </CategoryComponent>
        ) }
      </div>
    )
  }
}
