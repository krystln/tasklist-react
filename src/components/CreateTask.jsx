import React from "react"
export default function CreateTask(props) {

    const [formData, setFormData] = React.useState(
        {
            id: "",
            title: "",
            desc: ""
        }
    )


    function handleFormChange(event) {
        let {name, value} = event.target
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        alert(formData);
        setFormData( prevFormData => {
            return {
                ...prevFormData,
                id: new Date().toString()
        }});
        props.addTask(formData)
        setFormData({
            id: "",
            title: "",
            desc: ""
        });
    }

    return (
        <div className="CreateTask">
            <form onSubmit={handleSubmit}>
                <input
                    className="CreateTask_title"
                    placeholder="Title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                />
                <textarea
                    className="CreateTask_description"
                    placeholder="Description"
                    type="text"
                    name="desc"
                    rows={10}
                    columns={10}
                    value={formData.desc}
                    onChange={handleFormChange}
                />
                <input type='submit' value='Create Task' className="CreateTask_button" />
            </form>
        </div>
    )
}
