import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const TodoList = ({todoList, onTodoClick}) => {

    const handleClick = (todo, idx) => {
        if(!onTodoClick) return;

        onTodoClick(todo, idx)
    }

    return (
        <ul className='todo-list'>
            {todoList.map((todo, idx) => (
                <li 
                    key={todo.id} 
                    className={classNames({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                    onClick={() => handleClick(todo, idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    )
}

export default TodoList;

TodoList.propsTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
}

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}