class MicroController extends React.Component {
  constructor(props) {
    super(props);
    this.emitter = new EventEmitter();
    this.dispatch = this.dispatch.bind(this);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  dispatch(...args) {
    return this.emitter.emit(...args);
  }

  subscribe(events) {
    Object.keys(events).forEach(name => {
      let handler = events[name];
      this.emitter.on(name, handler.bind(this));
    });
  }

  subscribeHandles() {
    let self = this;
    Object.getOwnPropertyNames(this.__proto__).forEach(name => {
      let result = name.match(/handle(\w+)/);
      console.log(result);
      if(result !== null) {
        console.log(_.snakeCase(result[1]),self[name]);
        self.emitter.on(_.snakeCase(result[1]), self[name].bind(self));
      }
    })
  }

  unsubscribe() {
    this.emitter.removeAllListeners();
  }
}