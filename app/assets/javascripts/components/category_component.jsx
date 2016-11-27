// export default () => (
window.CategoryComponent = (props) => (
  <div key={props.category.uid} className="panel panel-default">
    <div className="panel-heading">
      { props.category.label_ja }
    </div>
    <div className="panel-body">
      <p className="description">
        { props.category.description_ja }
        { _.isNil(props.children) ? undefined : props.children }
      </p>
    </div>
  </div>
)