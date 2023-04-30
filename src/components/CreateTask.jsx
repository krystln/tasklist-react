import React from "react"
export default function CreateTask(props) {

    const [createTaskFormData, setCreatTaskFormData] = React.useState(
        {
            id: -1,
            title: "",
            desc: ""
        }
    )


    function handleFormChange(event) {
        let {name, value} = event.target
        setCreatTaskFormData(prevTaskFormData => {
            return {
                ...prevTaskFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        setCreatTaskFormData(prevTaskFormData => ({
            ...prevTaskFormData,
            id: new Date().getTime().toString()
        }))

        props.addData(createTaskFormData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    value={createTaskFormData.title}
                    onChange={handleFormChange}
                />
                <input
                    type="text"
                    name="desc"
                    value={createTaskFormData.desc}
                    onChange={handleFormChange}
                />

                <button>Submit</button>
            </form>
        </div>
    )
}
