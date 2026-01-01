import { useState } from 'react'
import './App.css'

function App() {

  const [todo,setTodo] = useState([]);

  function deletetodo () {

  }

  function addtodo () {
    
  }

  return <div>
    <button onClick={deletetodo}>delete todo</button>
    <button onClick={addtodo}>Add todo</button>
  </div>

}

export default App
