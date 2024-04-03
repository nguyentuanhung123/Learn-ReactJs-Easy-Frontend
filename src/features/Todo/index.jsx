import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Link, Outlet, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

const TodoFeature = (props) => {
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
