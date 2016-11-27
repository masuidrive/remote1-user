// export default () => (
window.CategoryComponent = (props) => (
  <div key={props.category.uid} className="panel panel-default">
    <div className="panel-heading">
      { props.category.label_ja }
    </div>
    <div className="panel-body">
      { props.category.description_ja }
    </div>
    { props.children }
  </div>
)