import React from 'react'
import './Todolist.css'

function Todolist({todoList,completed}) {

    const onChangeHandler = (list) => {
       completed(list)
    }

    return (
        <div>
            <ul>
            {todoList.length > 0 && todoList.map(list => 
               <div key={Math.random()} className="todolist">
            
               <input type="checkbox" onChange={() =>onChangeHandler(list)}/>
                <li className={list.done && 'completed'}>{list.val}</li>
            
                </div>
            )}
            </ul>
        </div>
    )
}

export default Todolist
