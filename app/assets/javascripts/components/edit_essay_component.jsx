// export default () => (
window.EditEssayComponent = (props) => (
<div className="edit-essay-component">
    <h3>テーマ</h3>
    <div className="list-group select-topic">
        { props.category.topics.map((topic) =>
        <label key={ topic.uid } className="list-group-item">
            <input type="radio"
                name="topic"
                value={ topic.uid }
                checked={ props.topic_uid == topic.uid }
                onChange={ (e) => props.dispatch('update_topic_uid', e.target.value) }
            />
            { topic.body }
        </label>
        ) }
    </div>
    <h3>回答</h3>
    <textarea className="form-control essay-body"
       onChange={ (e) => props.dispatch('update_essay_body', e.target.value) }
        value={ props.body }
    />
</div>
)
