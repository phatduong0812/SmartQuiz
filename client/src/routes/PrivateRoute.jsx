import { Navigate, Outlet } from 'react-router-dom'

import { AdminLayout, CommonLayout } from '../components/layout'

import { useAppSelector } from '../hooks/redux-hooks'

const PrivateRoute = (props) => {
    const { role } = props
    const { role: authRole, email } = useAppSelector((state) => state.auth)
    if (!email) return <Navigate to="/login" replace={true} />

    if (role === 'admin') {
        if (authRole !== 'user') return <Navigate to="/" replace={true} />
    }

    if (role === 'user') {
        if (authRole === 'admin') return <Navigate to="/admin" replace={true} />
    }
    return !authRole || authRole === 'user' ? (
        <CommonLayout>
            <Outlet />
        </CommonLayout>
    ) : (
        <AdminLayout>
            <Outlet />
        </AdminLayout>
    )
}

export default PrivateRoute
