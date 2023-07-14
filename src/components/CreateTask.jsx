import React from "react"
export default function CreateTask(props) {

    const [formData, setFormData] = React.useState(
        {
            id: new Date().getTime().toString(),
            title: "",
            desc: "",
            status: false
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
        const uid = new Date().valueOf();

        setFormData((prevFormData) => {
            const tempObj = {
                ...prevFormData,
                id: uid
            }
            return tempObj
        });

        props.addTask(formData)
        resetForm()
    }

    function resetForm(){
        setFormData({
            id: new Date().getTime().toString(),
            title: "",
            desc: "",
            status: false
        })
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
