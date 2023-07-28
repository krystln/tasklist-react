import React from "react";

import Complete from "../assets/complete.svg";
import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";
import Undo from "../assets/undo.svg";

import { ACTIONS } from "./TaskList";

const Task = ({ task, dispatch }) => {
  function handleComplete() {
    dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id: task.id } });
  }

  function handleEdit() {
	console.log("edit");
	}

	function handleDelete() {
		dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: task.id } })
	}

  return (
    <div>
      <div className="Task_header">
        <div className="Task_Options">
          <button className="Task_header_complete" onClick={handleComplete}>
            <img src={Complete} />
          </button>
          <button className="Task_header_edit" onClick={handleEdit}>
            <img src={Edit} />
          </button>
          <button className="Task_header_delete" onClick={handleDelete}>
            <img src={Delete} />
          </button>
        </div>
      </div>
      <p className="Task_description">{task.data + task.complete}</p>
    </div>
  );
};

export default Task;
