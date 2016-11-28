class EssayEditController extends ActionController {
  constructor(props) {
    super(props);
    this.state = { };
    this.defaultAction = 'index'
  }

  actionIndex() {
  }

  renderIndex() {
    return (
      <div>
        <h2>{ this.props.category.label_ja }</h2>
        <div className="">
          { this.props.category.description_ja }
        </div>
        <EditEssayComponent essay={ this.props.essay } category={ this.props.category } />
      </div>
    )
  }
}
