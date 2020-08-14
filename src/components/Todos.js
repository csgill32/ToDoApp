import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    let todos = props.todos.map((todo) => {
        return (
            <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={props.deleteTodo}
                updateTodo={props.updateTodo}
                updateTodoStatus={props.updateTodoStatus}
            />
        );
    });

    return (
        <ul>
            {todos}
        </ul>
    );
};

export default Todos;