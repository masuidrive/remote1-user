//= require ./micro_controller
class ActionController extends MicroController {
  constructor(props) {
    super(props);
    this.subscribeHandles();
  }

  subscribeHandles() {
    let self = this;
    var funcs = Object.getOwnPropertyNames(this.__proto__).
      concat(Object.getOwnPropertyNames(ActionController.prototype));
    funcs.forEach(name => {
      let result = name.match(/handle(\w+)/);
      if(result !== null) {
        self.emitter.on(_.snakeCase(result[1]), self[name].bind(self));
      }
    })
  }

  actionName(nextAction) {
    return nextAction || this.state.action || this.defaultAction || 'index';
  }

  handleAction(action) {
    var actionFunc = this[_.camelCase(`action_${this.actionName(action)}`)]
    if(typeof actionFunc == 'function') {
      var result = actionFunc.call(this);
      if(result instanceof Promise) {
        result.then(() =>
          this.setState({ action: action })      
        )
      }
      else if(result !== false) {
        this.setState({ action: action });
      }
    }
    else {
      this.setState({ action: action });
    }
  }

  render() {
    var actionName = this.state.action || this.defaultAction || 'index';
    var renderFunc = this[_.camelCase(`render_${this.actionName()}`)]
    if(typeof renderFunc == 'function') {
      return renderFunc.call(this);
    }
    else {
      return (
        <div>
          Unknown action: {this.actionName()}
        </div>
      );
    }
  }
}