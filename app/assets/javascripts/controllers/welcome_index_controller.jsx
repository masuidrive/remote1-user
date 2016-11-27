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
            回答済み: { this.getCategoryEssay(category.uid).topic.body }
            <button className="btn btn-primary">
              編集する
            </button>
          </CategoryComponent>
        ) }
        <hr />
        <h2>未回答カテゴリ</h2>
        { unfilled_categories.map((category) =>
          <CategoryComponent category={category} key={category.uid}>
            <button className="btn btn-primary">
              回答する
            </button>
          </CategoryComponent>
        ) }
      </div>
    )
  }
}
