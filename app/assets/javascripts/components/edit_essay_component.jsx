// export default () => (
window.EditEssayComponent = (props) => (
<div>
    <h3>テーマ</h3>
    <div className="list-group select-topic">
        { props.category.topics.map((topic) =>
        <label key={ topic.uid } className="list-group-item">
            <input type="radio" name="topic" value={ topic.uid } />
            { topic.body }
        </label>
        ) }
    </div>
    <h3>回答</h3>
    <textarea className="form-control">{ props.essay.body }</textarea>
</div>
)
