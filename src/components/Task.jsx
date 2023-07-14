import React from "react"


export default function Task(props) {

	const [editing, setEditing] = React.useState(false);

	const [editFormData, setEditFormData] = React.useState({
		id: props.index,
		title: props.title,
		desc: props.desc
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
		props.handleDeleteFunction(editFormData.id)
	}

	return (
		<div className="Task">

			{!editing &&
				<>
					<div className="Task_header">
						<h3 className="Task_title">{props.title}</h3>
						<div className="Task_Options">
							<button className="Task_header_complete"></button>
							<button className="Task_header_edit" onClick={() => setEditing(true)}></button>
							<button className="Task_header_delete" onClick={handleDelete}></button>
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
						/>
						<textarea
							type="text"
							name="desc"
							value={editFormData.desc}
							onChange={handleEditing}
						/>
						<input type="submit" value="Save" />
					</form>
				</>}
		</div>
	)
}
