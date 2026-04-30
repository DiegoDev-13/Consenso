import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Login, Home, ProtectedRoute, UserAuth, Configuration, CategoriesTemplate, Categories, Movements} from '../index'

export const MyRoutes = () => {

  const {user} = UserAuth()

  return (
      <Routes>
        <Route path='/login'  element={<Login/>} />

        <Route element={<ProtectedRoute user={user} redirecTo="/login" />}>
          <Route path='/'  element={<Home/>} />
          <Route path='/categorias'  element={<Categories/>} />
          <Route path='/movimientos'  element={<Movements/>} />
          <Route path='/configurar' element={<Configuration />} />
        </Route>

      </Routes>
  )
}