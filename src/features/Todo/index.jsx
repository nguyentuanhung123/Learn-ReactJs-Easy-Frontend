import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

const TodoFeature = (props) => {

    const navigate = useNavigate();
   
    useEffect(() => {
        // Automatically navigate to ListPage when /todos is matched
        navigate('/todos/list');
    }, [navigate]);


    return (
        <div className='todos'>
            <div className='todosNav'>
                <Link to='list'>List Page</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default TodoFeature;

TodoFeature.propsTypes = {

}
