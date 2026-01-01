import { useState } from 'react'
import './App.css'

function App() {

  const [todo,setTodo] = useState([]);
  const [input,setInput] = useState("");

  function addtodo () {
    if (input.trim()==="") return;

    setTodo([
        ...todo, {
            id:Date.now(),
            text:input,
            completed:false
        }
    ]);

    setInput("");

  }


  function deletetodo (id) {
    setTodo(todo.filter((item)=> item.id !== id))
  }


  return <div>
    <input 
           type="text"
           value={input}
           onChange={(e)=>setInput(e.target.value)}
           placeholder='Enter Todo'
    />

    <button onClick={addtodo}>Add todo</button>

    <ul>
        {todo.map((item)=> (
            <li key={item.id}>
                    {item.text}
                <button onClick={()=>deletetodo(item.id)}>Delete Todo</button>
            </li>
        ))}
    </ul>
  </div>

}

export default App



