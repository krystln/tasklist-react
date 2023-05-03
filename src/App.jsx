import React from 'react'
import './App.css'
import TaskList from './components/TaskList'

function App() {

  const [isCreate, setIsCreate] = React.useState(false)
  function handleAddButton(){
    setIsCreate(prevIsState => !prevIsState)
  }

  return (
    <>
      <div className='Header'>
        <div className='Header-Title'>Task List -- React</div>
        <button className='Header-Button' onClick={handleAddButton}>+</button>
      </div>
		  <TaskList showCreate={isCreate}></TaskList>
    </>
  )
}

export default App
