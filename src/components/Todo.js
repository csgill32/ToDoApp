import React, { Component } from 'react';
import TodoForm from './TodoForm';

class Todo extends Component {

    state = {
        formStyle: {
            display: 'none',
        },
        itemStyle: {
            display: 'block',
        },
    };

    toggleBodyForm = () => {
        if (this.state.formStyle.display === 'block') {
            this.setState({ formStyle: { display: 'none' } })
            this.setState({ itemStyle: { display: 'block' } })
        } else {
            this.setState({ formStyle: { display: 'block' } });
            this.setState({ itemStyle: { display: 'none' } })
        }
    };

    toggleStatusForm = () => {
        if (this.props.todo.completed) {
            this.props.updateTodoStatus(this.props.todo, false);
        } else {
            this.props.updateTodoStatus(this.props.todo, true);
        }
    };

    deleteClickedTodo = () => {
        this.props.deleteTodo(this.props.todo);
    };

    render() {
        return (
            <li data-todos-index={this.props.todo._id}>
                <div>
                    <span>
                        <input type="checkbox" checked={this.props.todo.completed} onChange={this.toggleStatusForm} />
                    </span>
                    <span className="todo-item" style={this.state.itemStyle}>
                        {this.props.todo.body}
                    </span>
                    <span
                        className='edit'
                        onClick={this.toggleBodyForm}>
                        Edit
                    </span>
                    <span
                        className='remove'
                        onClick={this.deleteClickedTodo}>
                        Delete
                    </span>
                </div>
                <TodoForm
                    todo={this.props.todo}
                    style={this.state.formStyle}
                    autoFocus={true}
                    buttonName="Update Todo!"
                    updateTodo={this.props.updateTodo}
                    toggleBodyForm={this.toggleBodyForm} />
            </li>
        );
    };
};

export default Todo;