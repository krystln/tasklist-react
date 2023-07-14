import React from "react";
import Task from "./Task"
import CreateTask from "./CreateTask";

export default function TaskList(props) {
	const [list, setList] = React.useState(
	[
		{
			id: 0,
			title: "Lorem",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae aliquam nisl nunc eget nunc.",
			status: false
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
			status={listItem.status}
			handleEditFunction={editListItem}
			handleDeleteFunction={deleteListItem}
			/>
	})

	

  	return (
		<div className="TaskList">
			<CreateTask addTask = {addListItem} />
			{listComp}
		</div>
  	)
}
