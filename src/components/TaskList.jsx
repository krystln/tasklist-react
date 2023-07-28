import { useState, useReducer, useContext } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

import { theme } from "./Theme";

export const ACTIONS = {
  ADD_TASK: "add-task",
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
        if (task.id === action.payload.id)
          return { ...task, data: action.payload.data };
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

  const isDark = theme();
  const styleTheme = {
    backgroundColor: isDark ? "var(--BG_DARK)" : "var(--BG_LIGHT)",
    color: isDark ? "white" : "black",
  };

  return (
    <div style={styleTheme} className="HomePage">
      <TaskForm dispatch={dispatch} />
      <div className="TaskList">
        {tasks.map((task) => {
          return <Task key={task.id} task={task} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
};

export default TaskList;
