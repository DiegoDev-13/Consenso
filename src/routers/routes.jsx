import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Login, Home} from '../index'

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home'  element={<Home/>} />
        <Route path='/'  element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}