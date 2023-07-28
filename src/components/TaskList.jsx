import { useState, useReducer } from "react";
import Task from "./Task";
import CreateTask from "./CreateTask";

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

  return (
    <>
      <CreateTask dispatch={dispatch} />
      {tasks.map((task) => {
        return <Task key={task.id} task={task} dispatch={dispatch}/>;
      })}
    </>
  );
};

export default TaskList;
