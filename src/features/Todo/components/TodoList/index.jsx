import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({todoList}) => {

    return (
        <ul>
            {todoList.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}

export default TodoList;

TodoList.propsTypes = {
    todoList: PropTypes.array
}

TodoList.defaultProps = {
    todoList: [],
}