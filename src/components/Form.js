import React, {useState} from "react";
const Form = (props) => {
    const [newTodo, setNewTodo] = useState("");
    const {todoList, setTodoList} = props;
    const addTodo = (e) => {
        e.preventDefault();
        setTodoList([...todoList, {
            text: newTodo,
            markedDelete: false,
            id: Math.floor(Math.random() * 10000000).toString(),
        }]);
        setNewTodo("");
    };

    return(
        <div>
            <form onSubmit={addTodo}>
                <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text"/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form;