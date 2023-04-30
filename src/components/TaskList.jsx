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

	function deleteListItem(listItemIndex){
		setList(prevList => prevList.filter((item) => item.id != listItemIndex))
	}


	function addListItem(listItem){
		setList(prevList => [...prevList, listItem])
	}
	
	const listComp = list.map(listItem => {
		return <Task
			key={listItem.id}
			index={listItem.id}
			title={listItem.title}
			desc={listItem.desc}
			handleEditFunction=""
			handleDeleteFunction={deleteListItem}
			/>
	})

	

  	return (
		<div className="TaskList">
			<CreateTask addData={addListItem} nextId={list.length + 1}></CreateTask>
			{listComp}
		</div>
  	)
}
