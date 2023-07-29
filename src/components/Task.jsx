import React from "react";

import Complete from "../assets/complete.svg";
import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";
import Undo from "../assets/undo.svg";

import { ACTIONS } from "./TaskList";
import { theme } from "./Theme";

const Task = ({ task, dispatch, editFunction }) => {
  function handleComplete() {
    dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id: task.id } });
  }

  function handleEdit() {
    editFunction(task);
  }

  function handleDelete() {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: task.id } });
  }

  const isDark = theme();
  const styleTheme = {
	borderColor : isDark ? "white" : "black",
	textDecoration : task.complete ? "line-through" : "none",
	color : task.complete ? "grey" : "",
  }

  return (
    <div className="Task" style={styleTheme}>
      <div className="TaskOptions">
        <button className="OptionsToggle" onClick={handleComplete}>
          <img src={task.complete ? Undo : Complete} width={30} height={30} />
        </button>
        <button className="OptionsEdit" onClick={handleEdit}>
          <img src={Edit}  width={30} height={30}/>
        </button>
        <button className="OptionsDelete" onClick={handleDelete}>
          <img src={Delete } width={30} height={30}/>
        </button>
      </div>
      <p className="TaskData">{task.data}</p>
    </div>
  );
};

export default Task;
