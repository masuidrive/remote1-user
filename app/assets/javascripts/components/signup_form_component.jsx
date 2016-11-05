// export default () => (
window.SignupFormComponent = (props) => (
  <div>
      <div className="form-group">
        <label>Account name</label>
        <input value={props.username} onChange={(e) => props.dispatch('update_username', e.target.value)} type="email" className="form-control" placeholder="Account name (alphabets, numbers and ._-@)" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input value={props.password} onChange={(e) => props.dispatch('update_password', e.target.value)}type="password" className="form-control" placeholder="Password" />
      </div>
  </div>
)