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
        Thank you for joining Resume-1.
      </div>
    )
  }
}
