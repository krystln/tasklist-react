import React from "react";
import Task from "./Task"
import CreateTask from "./CreateTask";

export default function TaskList(props) {
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

	function editListItem(listItem){
		setList(prevList => prevList.map(item => {
			if(item.id === listItem.id)
				return listItem
			return item
		}))
	}

	
	const listComp = list.map(listItem => {
		return <Task
			key={listItem.id}
			index={listItem.id}
			title={listItem.title}
			desc={listItem.desc}
			handleEditFunction={editListItem}
			handleDeleteFunction={deleteListItem}
			/>
	})

	

  	return (
		<div className="TaskList">
			{props.showCreate && <CreateTask addData={addListItem} nextId={list.length + 1}></CreateTask>}
			{listComp}
		</div>
  	)
}
