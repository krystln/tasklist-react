import React from 'react'

import './App.css'

import Theme from './components/Theme'

import TaskList from './components/TaskList'
import NavBar from './components/NavBar'


function App() {

  return (
    <Theme>
      <NavBar />
		  <TaskList />
    </Theme>
  )
}

export default App
