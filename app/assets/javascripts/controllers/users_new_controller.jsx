//= require ./micro_controller
class UsersNewController extends MicroController {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  componentDidMount() {
    this.subscribeHandles();
  }

  handleUpdateUsername(text) {
    this.setState({ username: text });
  }

  handleUpdatePassword(text) {
    this.setState({ password: text });
  }
  
  render() {
    return (
      <div>
        <SignupFormComponent dispatch={this.dispatch} {...this.state} />
      </div>
    )
  }
}
