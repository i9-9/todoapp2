import { React, useState } from "react";
import TodoForm from "./TodoForm";
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

const Todo = ({todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
        id: null,
        value: "",
    })
  }

  if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.isComplete ? "flex justify-between items-center my-1 mx-auto p-4 rounded-md w-[90%] line-through opacity-40 cursor-pointer border text-white" : "flex justify-between items-center my-1 mx-auto p-4 rounded-md w-[90%] cursor-pointer border text-white"}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className="flex space-between">
            <RiCloseCircleLine size={25} onClick={() => removeTodo(todo.id)} />
            <TiEdit size={25} onClick={() => setEdit({id: todo.id, value:todo.text})} />
        </div>
      </div>
  ));
};

export default Todo;
