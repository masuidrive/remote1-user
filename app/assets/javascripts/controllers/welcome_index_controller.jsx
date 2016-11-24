class WelcomeIndexController extends ActionController {
  constructor(props) {
    super(props);
    this.state = {  };
    this.defaultAction = 'index'
  }

  actionIndex() {
  }

  renderIndex() {
    console.log(this.props)
    console.log(this.props.categories)
    return (
      <div>
        Welcome to Resume-1.
        { this.props.categories.map((category, cidx) =>
          <div key={category.uid}>
            { category.label_ja } / { category.label_en }<br/>
            { category.topics.map((topic, tidx) =>
              <div key={topic.uid}>
                { topic.body }
              </div>
            )}
          </div>          
        ) }
      </div>
    )
  }
}
