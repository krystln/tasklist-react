import React, { useState } from "react"

import { ACTIONS } from "./TaskList";
import { theme } from "./Theme";

const TaskForm = React.memo(({ dispatch }) => {

    const [data, setData] = useState("");


  function handleSubmit(event) {
	event.preventDefault();
	dispatch({ type: ACTIONS.ADD_TASK, payload: { data: data } });
	setData("");
  }

    function handleFormChange(event) {
        let { value } = event.target
        setData(value);
    }

    const isDark = theme();
    const styleTheme = {
        color : isDark ? 'white' : 'black',
        borderColor : isDark ? 'white' : 'black',
    }

    return (
            <form onSubmit={handleSubmit} className="TaskForm" style={styleTheme}>
                <textarea
                    className="TaskFormInput"
                    placeholder="What to do..."
                    type="text"
                    name="data"
                    value={data}
                    onChange={handleFormChange}
                    style={styleTheme}
                />
                <input type='submit' value='Create Task' className="TaskFormSubmit" />
            </form>
    )
});

export default TaskForm;