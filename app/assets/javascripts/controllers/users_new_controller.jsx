class UsersNewController extends ActionController {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.defaultAction = 'new'
  }

  validUsername(text) {
    return !!String(text).match(/^[-._@\w]{3,64}$/)
  }

  validPassword(text) {
    return !!String(text).match(/^.{6,64}$/)
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
      password: ""
    })
  }

  actionConfirm() {
    var canMove =
      !_.isEmpty(this.state.username) && this.state.validUsername &&
      !_.isEmpty(this.state.password) && this.state.validPassword    
    
    if(canMove) {
      this.setState({
        usernameConfirmation: this.state.username,
        passwordConfirmation: this.state.password,
        username: '',
        password: ''
      });
    }
    else {
      return false;
    }
  }

  actionCreate() {
    var user = new UserModel();
    user.username = this.state.username;
    user.password = this.state.password;
    return new Promise((resolve, reject) => {
      user.signup().then(() => {
        console.log("resolve");
        resolve();
      })
      .catch(() => {
        console.log("reject");
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
        <SignupFormComponent dispatch={this.dispatch} {...this.state} />
        { canSubmit ?
          <button className="btn btn-primary" onClick={() => this.dispatch('action', 'confirm') }>Confirm</button>
          :
          <button className="btn btn-primary disabled">Plase fill above form</button>
        }
      </div>
    )
  }

  renderConfirm() {
    var canSubmit =
      this.state.username == this.state.usernameConfirmation &&
      this.state.password == this.state.passwordConfirmation;
    return (
      <div>
        <div>
          確認のため、もう一度同じユーザ名とパスワードを入力してください。
        </div>
        <SignupFormComponent dispatch={this.dispatch} {...this.state} />
        { canSubmit ?
          <button className="btn btn-primary" onClick={() => this.dispatch('action', 'create') }>Register</button>
          :
          <button className="btn btn-primary disabled">Plase fill above form</button>
        }
      </div>
    )
  }

  renderCreate() {
    return (
      <div>
        Thank you for joining Resume-1.
      </div>
    )
  }
}
