import { useState, useReducer, useRef, useEffect } from "react";

import Promotion from "./Promotion";
import Task from "./Task";

import { theme } from "./Theme";

export const ACTIONS = {
  ADD_TASK: "add-task",
  EDIT_TASK: "edit-task",
  DELETE_TASK: "delete-task",
  TOGGLE_TASK: "toggle-task",
  REPLACE_TASKS: "replace-tasks",
};

let lastDeletedTask = null;

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
        if (task.id === action.payload.id) {
          return { ...task, data: action.payload.data };
        }
        return task;
      });

    case ACTIONS.DELETE_TASK:
      lastDeletedTask = tasks.filter((task) => task.id === action.payload.id);
      return tasks.filter((task) => task.id !== action.payload.id);

    case ACTIONS.TOGGLE_TASK:
      return tasks.map((task) => {
        if (task.id === action.payload.id)
          return { ...task, complete: !task.complete };
        return task;
      });

    case ACTIONS.REPLACE_TASKS:
      return action.payload.tasks;

    default:
      return tasks;
  }
}

{
  /* ---------------Functional Components Start------------- */
}

const TaskList = () => {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [data, setData] = useState("");
  const [editing, setEditing] = useState(false);

  const isDark = theme();
  const styleTheme = {
    backgroundColor: isDark ? "var(--BG_DARK)" : "var(--BG_LIGHT)",
    color: isDark ? "white" : "black",
    borderColor: isDark ? "white" : "black",
  };

  const prevTasks = useRef();

  function undoEdit() {
    console.log("undo request sent");
    console.log(prevTasks.current);
    dispatch({
      type: ACTIONS.REPLACE_TASKS,
      payload: { tasks: prevTasks.current },
    });
  }

  function undoDelete(){
    dispatch({
      type: ACTIONS.ADD_TASK,
      payload: { data: lastDeletedTask[0].data },
    })
  }

  const inputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    if (!data) {
      inputRef.current.focus();
      return;
    }

    if (editing.check) {
      dispatch({
        type: ACTIONS.EDIT_TASK,
        payload: { id: editing.id, data: inputRef.current.value },
      });
      setEditing(false);
      setData("");
      return;
    }

    dispatch({ type: ACTIONS.ADD_TASK, payload: { data: data } });
    setData("");
  }

  function editFunction(task) {
    prevTasks.current = tasks;
    setEditing({ check: true, id: task.id });
    setData(task.data);
    inputRef.current.focus();
  }

  return (
    <div style={styleTheme} className="HomePage">
      <div className="StuckArea">
        <form onSubmit={handleSubmit} className="TaskForm" style={styleTheme}>
          <textarea
            className="TaskFormInput"
            placeholder="What to do..."
            type="text"
            name="data"
            value={data}
            onChange={(event) => setData(event.target.value)}
            style={styleTheme}
            ref={inputRef}
          />
          <input
            type="submit"
            value={editing.check ? "Edit Task" : "Create Task"}
            className="TaskFormSubmit"
          />
        </form>
        <button onClick={undoEdit} className="UndoEdit">Undo Edit</button>
        <button onClick={undoDelete} className="UndoDelete">Undo Delete</button>
        <Promotion />
      </div>
      <div className="TaskList">
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              dispatch={dispatch}
              editFunction={editFunction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
