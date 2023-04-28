export default function Task(props) {
  return (
    <div className="Task">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}
