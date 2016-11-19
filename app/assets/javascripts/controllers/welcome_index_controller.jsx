class WelcomeIndexController extends ActionController {
  constructor(props) {
    super(props);
    this.state = {  };
    this.defaultAction = 'index'
  }

  actionIndex() {
  }

  renderIndex() {
    return (
      <div>
        Welcome to Resume-1.
      </div>
    )
  }
}
