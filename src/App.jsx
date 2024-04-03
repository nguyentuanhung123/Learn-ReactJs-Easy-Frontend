
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import AlbumFeature from './features/Album'
import TodoFeature from './features/Todo'
import './App.css'

const App = () => {

  return (
    <div className='App'>
      <div>Header</div>

      <p><NavLink to='/todos' className={({isActive}) => (isActive ? 'activeLink' : 'normalLink')}>Todos</NavLink></p>
      <p><NavLink to='/albums' className={({isActive}) => (isActive ? 'activeLink' : 'normalLink')}>Albums</NavLink></p>

      <Routes>
        <Route path='/todos' element={<TodoFeature />}/>
        <Route path='/albums' element={<AlbumFeature />}/>
      </Routes>
      <div>Footer</div>
    </div>
  )
}

export default App
