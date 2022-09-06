import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {

    const [todos, setTodos] = useState([]);

    //essa parte serve para formatar os caracteres na hora de criar uma tarefa.
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        };

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    };


    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        };

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    };


    /*Essa parte checa se na array atual a tarefa criada está definido como todo, e caso 
    esteja a função remove a tarefa é removida da aplicação*/
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Quais são os planos para hoje?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
                  updateTodo={updateTodo} />
        </div>
    );
};

export default TodoList