
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import AlbumFeature from './features/Album'
import TodoFeature from './features/Todo'
import './App.css'
import PostFeature from './features/Post'
import ListPage from './features/Todo/pages/ListPage'
import DetailPage from './features/Todo/pages/DetailPage'

const App = () => {

  return (
    <div className='App'>
      <div>Header</div>

      <p><NavLink to='/todos' className={({isActive}) => (isActive ? 'activeLink' : 'normalLink')}>Todos</NavLink></p>
      <p><NavLink to='/albums' className={({isActive}) => (isActive ? 'activeLink' : 'normalLink')}>Albums</NavLink></p>
      <p><NavLink to='/posts/123' className={({isActive}) => (isActive ? 'activeLink' : 'normalLink')}>Post 123</NavLink></p>
      <p><NavLink to='/posts/456' className={({isActive}) => (isActive ? 'activeLink' : 'normalLink')}>Post 456</NavLink></p>

      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/posts/:postId"  element={<PostFeature/>}/>
        <Route path='/todos/' element={<TodoFeature />}>
          <Route path='list' element={<ListPage />} />
          <Route path=':todoId' element={<DetailPage />}/>
        </Route>
        <Route path='/albums' element={<AlbumFeature />}/>
      </Routes>
      <div>Footer</div>
    </div>
  )
}

export default App
