class SessionsNewController extends ActionController {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.defaultAction = 'new'
  }

  validUsername(text) {
    return !!String(text).match(/^[-._@\w]{3,64}$/)
  }

  validPassword(text) {
    return !!String(text).match(/^.{6,1024}$/)
  }

  handleUpdateUsername(text) {
    this.setState({
      username: text,
      validUsername: this.validUsername(text)
    });
  }

  handleUpdatePassword(text) {
    this.setState({
      password: text,
      validPassword: this.validPassword(text)
    });
  }

  actionNew() {
    this.setState({
      username: "",
      password: "",
      message: undefined
    })
  }

  actionCreate() {
    var user = new UserModel();
    user.username = this.state.username;
    user.password = this.state.password;
    return new Promise((resolve, reject) => {
      user.signin().then(() => {
        console.log("resolve");
        resolve();
      })
      .catch(() => {
        this.setState({
          message: "Unmathch username or password."
        });
        reject();
      })
    })
  }
  
  renderNew() {
    var canSubmit =
      !_.isEmpty(this.state.username) && this.state.validUsername &&
      !_.isEmpty(this.state.password) && this.state.validPassword    

    return (
      <div>
        <div>
          {this.state.message}
        </div>
        <UserFormComponent dispatch={this.dispatch} {...this.state} />
        { canSubmit ?
          <button className="btn btn-primary" onClick={() => this.dispatch('action', 'create') }>Confirm</button>
          :
          <button className="btn btn-primary disabled">Plase fill above form</button>
        }
      </div>
    )
  }

  renderCreate() {
    location.href = "/welcome"
  }
}
