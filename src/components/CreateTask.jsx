import React, { useState } from "react"

import { ACTIONS } from "./TaskList";

const CreateTask = React.memo(({ dispatch }) => {

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

    return (
        <div className="CreateTask">
            <form onSubmit={handleSubmit}>
                <textarea
                    className="CreateTask_description"
                    placeholder="Description"
                    type="text"
                    name="data"
                    rows={10}
                    columns={10}
                    value={data}
                    onChange={handleFormChange}
                />
                <input type='submit' value='Create Task' className="CreateTask_button" />
            </form>
        </div>
    )
});

export default CreateTask;