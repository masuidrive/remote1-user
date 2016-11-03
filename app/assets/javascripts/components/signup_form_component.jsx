// export default () => (
window.SignupFormComponent = () => (
  <div>
      <div className="form-group">
        <label for="exampleInputEmail1">Account name</label>
        <input type="email" className="form-control" placeholder="Account name (alphabets, numbers and ._-@)" />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" placeholder="Password" />
      </div>
  </div>
)