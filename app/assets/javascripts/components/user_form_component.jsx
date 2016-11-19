// export default () => (
window.UserFormComponent = (props) => (
  <div>
      <div className={(_.isEmpty(props.username) || props.validUsername) ? "form-group" : "form-group has-error"}>
        <label>User name</label>
        <input
          value={props.username}
          type="text"
          className="form-control" 
          onChange={(e) => props.dispatch('update_username', e.target.value)}
          placeholder="Account name (alphabets, numbers and ._-@)"
          autoComplete="off"
          autoFocus
        />
        <span className="help-block">3 and more alphabets, numbers and ._-@</span>
      </div>
      <div className={(_.isEmpty(props.password) || props.validPassword) ? "form-group" : "form-group has-error"}>
        <label>Password</label>
        <input
          value={props.password}
          type="password"
          className="form-control"
          onChange={(e) => props.dispatch('update_password', e.target.value)}
          placeholder="Password"
          autoComplete="off"
        />
      </div>
  </div>
)