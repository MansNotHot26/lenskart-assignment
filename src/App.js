import React ,{useState} from 'react';
import './App.css';
import TodoList from './Components/Todolist'

function App() {

  const [inputVal,setInputVal] = useState('')
  const [todoList,setTodoList] = useState([])
  const setInput = (e)=> {
    setInputVal(e.target.value)
  }

  const onComplete = (item) => {

   let updatedTodoList = todoList.map(items => items===item ? {...items,done:!items.done} : items) 
    setTodoList(updatedTodoList)
  
}

  const addTodo = (e) => {
   
  if(e.key === 'Enter') {
    setTodoList((todoList)=>[...todoList,{val:e.target.value,done:false}])
    setInputVal('')
  }
  }

  console.log(todoList)
  return (
    <div className="App">
      <input type="text" value={inputVal} onChange={(e)=>setInput(e)} onKeyPress={(e)=>addTodo(e)}  />
      <TodoList todoList={todoList} completed={onComplete} />
    </div>
  );
}

export default App;
