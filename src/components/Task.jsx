export default function Task(props) {

	function handleEdit(){
		
	}

	function handleDelete(){
		props.handleDeleteFunction(props.index)
	}
  
	return (
    <div className="Task">
        <div className="Content">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <button className="Task-Button Edit" onClick={handleEdit}>Edit</button>
        <button className="Task-Button Delete" onClick={handleDelete}>Delete</button>
    </div>
  )
}
