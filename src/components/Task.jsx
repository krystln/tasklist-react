import React from "react"


export default function Task(props) {

	const [isEdit, setIsEdit] = React.useState(false)
	const [editFormData, setEditFormData] = React.useState({
		id: props.index,
		title: props.title,
		desc: props.desc
	})

	function handleEditForm(event){
		const {name, value} = event.target

		setEditFormData(prevEditFormData => ({
			...prevEditFormData,
			[name]: value
		}))
	}

	function handleEdit(){
		setIsEdit(true)	
	}

	function handleEditSubmit(event){
		event.preventDefault()
		props.handleEditFunction(editFormData)
		setIsEdit(false)
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
        {!isEdit && <button className="Task-Button Edit" onClick={handleEdit}>Edit</button>}
        <button className="Task-Button Delete" onClick={handleDelete}>Delete</button>

		{isEdit && 
			<form className="EditForm" onSubmit={handleEditSubmit}>
				<input
					type="text" 
					name="title"
					placeholder={props.title}
					value={editFormData.title}
					onChange={handleEditForm}
				/>
				<input 
					type="text"
					name="desc"
					placeholder={props.desc}
					value={editFormData.desc}
					onChange={handleEditForm}
				/>
				<button>Edit Task</button>
			</form>
		}
    </div>
  )
}
