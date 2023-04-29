import React from "react";
import Task from "./Task"
import CreateTask from "./CreateTask";

export default function TaskList() {
	const [list, setList] = React.useState(
	[
		{
			id: 1,
			title: "test",
			desc: "Excepteur aute elit esse elit mollit ad amet."
		}
	]);

	
	const listComp = list.map(listItem => {
		return <Task
			key={listItem.id}
			title={listItem.title}
			desc={listItem.desc}
			handleEditFunction=""
			handleDeleteFunction=""
			/>
	})

	

  	return (
		<div>
			<CreateTask></CreateTask>
			{listComp}
		</div>
  	)
}
