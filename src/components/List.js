import React, {useState} from "react";
const List = (props) => {
    const {todoList, setTodoList} = props;
    const handleCompleted = (todo) => {
        todo.markedDelete = !todo.markedDelete;
        setTodoList([...todoList]);
    }
    
    const styleLogic = (markedDelete) => {
        if(markedDelete === true){
            return "complete";
        } 
            return "incomplete"
    };

    const handleDelete = (itemId) => {
        setTodoList(
            todoList.filter((todo, index) => {
                return todo.id !== itemId
            }
        ))
    };
    return(
        <div>
            {todoList.map((todo, index) => {
                return(
                    <div className={styleLogic(todo.markedDelete)} key={todo.id}>
                        <p>{todo.text}</p>
                        <input type="checkbox" onChange={() => handleCompleted(todo)} />
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </div>)
            }

            
            )}
        </div>
    )
}

export default List;