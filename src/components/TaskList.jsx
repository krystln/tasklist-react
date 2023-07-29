import { useState, useReducer, useRef } from "react";
import Task from "./Task";

import { theme } from "./Theme";

export const ACTIONS = {
  ADD_TASK: "add-task",
  SIGNAL_EDIT: "signal-edit",
  EDIT_TASK: "edit-task",
  DELETE_TASK: "delete-task",
  TOGGLE_TASK: "toggle-task",
};

function reducer(tasks, action) {
	switch (action.type) {
	  case ACTIONS.ADD_TASK:
		return [
		  ...tasks,
		  {
			id: Date.now(),
			data: action.payload.data,
			complete: false,
		  },
		];
  

	  case ACTIONS.EDIT_TASK:
		return tasks.map((task) => {
		  if (task.id === action.payload.id){
				return { ...task, data: action.payload.data };
			}
			inputRef.current.removeAttribute("id");
			return task;
		});
  
	  case ACTIONS.DELETE_TASK:
		return tasks.filter((task) => task.id !== action.payload.id);
  
	  case ACTIONS.TOGGLE_TASK:
		return tasks.map((task) => {
		  if (task.id === action.payload.id)
			return { ...task, complete: !task.complete };
		  return task;
		});
  
	  default:
		return tasks;
	}
  }


const TaskList = () => {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [data, setData] = useState("");
  const [editing, setEditing] = useState({ check: false, id : -1});

  
  const isDark = theme();
  const styleTheme = {
    backgroundColor: isDark ? "var(--BG_DARK)" : "var(--BG_LIGHT)",
    color: isDark ? "white" : "black",
    borderColor: isDark ? "white" : "black",
  };

  const inputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

	if (!data) {
		inputRef.current.focus();
		return;
	};

	if(editing.check){
		dispatch({ type: ACTIONS.EDIT_TASK, payload: { id: editing.id , data: inputRef.current.value } });
		setEditing({check : false, id : -1});
		setData("");
		return;
	}

    dispatch({ type: ACTIONS.ADD_TASK, payload: { data: data } });
    setData("");
  }

  function editFunction(task) {
	  	setEditing({check : true, id : task.id});
		setData(task.data);
  }



  return (
    <div style={styleTheme} className="HomePage">
      <form onSubmit={handleSubmit} className="TaskForm" style={styleTheme}>
        <textarea
          className="TaskFormInput"
          placeholder="What to do..."
          type="text"
          name="data"
          value={data}
          onChange={event => setData(event.target.value)}
          style={styleTheme}
		  ref={inputRef}
        />
        <input type="submit" value={editing.check ? "Edit Task" : "Create Task"} className="TaskFormSubmit" />
      </form>
      <div className="TaskList">
        {tasks.map((task) => {
          return <Task key={task.id} task={task} dispatch={dispatch} editFunction={editFunction} />;
        })}
      </div>
    </div>
  );


};

export default TaskList;
