import {Navigate, Outlet} from 'react-router-dom'

export const ProtectedRoute =({user, redirecTo, children}) => {
    if(user === null) return <Navigate replace to={redirecTo} />

    return children ? children : <Outlet />
}
