import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { CgCloseR } from 'react-icons/cg'
import { AiOutlineEdit } from 'react-icons/ai'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        //aqui vamos criar uma função que checa se o todo está completo ou não. 
        //Teremos isso no Todolist  

        <div
            /*Essa parte do código muda a aparência da terefa para um tom mais escuro depois 
            que ela é marcada como completa*/
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className='icons'>
                <CgCloseR
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <AiOutlineEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>



        </div>
    ))
}

export default Todo