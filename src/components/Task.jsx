import React from "react"

import Complete from '../assets/complete.svg'
import Edit from '../assets/edit.svg'
import Delete from '../assets/delete.svg'
import Undo from '../assets/undo.svg'


export default function Task(props) {

	const [editing, setEditing] = React.useState(false);

	const [editFormData, setEditFormData] = React.useState({
		id: props.index,
		title: props.title,
		desc: props.desc,
		status: props.status
	})

	function handleEditing(event) {
		const { name, value } = event.target

		setEditFormData(prevEditFormData => ({
			...prevEditFormData,
			[name]: value
		}))
	}

	function handleEditSubmit(event) {
		event.preventDefault();
		props.handleEditFunction(editFormData);
		setEditing(false);
	}


	function handleDelete() {
		props.handleDeleteFunction(props.index)
	}

	function handleStatus(){
		setEditFormData(prevEditFormData => ({
			...prevEditFormData,
			status: !prevEditFormData.status
		}))
	}

	return (
		<div className={"Task "  + (editFormData.status && " Done")}>

			{!editing &&
				<>
					<div className="Task_header">
						<h3 className="Task_title">{props.title}</h3>
						<div className="Task_Options">
							<button className="Task_header_complete" onClick={handleStatus}><img src={editFormData.status ? Undo : Complete}/></button>
							<button className="Task_header_edit" onClick={() => setEditing(true)}><img src={Edit}/></button>
							<button className="Task_header_delete" onClick={handleDelete}><img src={Delete}/></button>
						</div>
					</div>
					<p className="Task_description">{props.desc}</p>
				</>}

			{editing && 
				<>
					<form className="Task_editForm" onSubmit={handleEditSubmit}>
						<input
							type="text"
							name="title"
							value={editFormData.title}
							onChange={handleEditing}
							className="Task_editForm_title"
						/>
						<textarea
							type="text"
							name="desc"
							value={editFormData.desc}
							onChange={handleEditing}
							className="Task_editForm_description"
						/>
						<input type="submit" value="Save" className="Task_editForm_submit" />
					</form>
				</>}
		</div>
	)
}
