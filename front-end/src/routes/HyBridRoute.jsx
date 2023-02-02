import { Navigate, Outlet } from 'react-router-dom'

import { AdminLayout, CommonLayout } from '../components/layout'

import { useAppSelector } from '../hooks/redux-hooks'

const HybridRoute = () => {
    const auth = useAppSelector((state) => state.auth)

    if (auth && auth.email && auth.role === 'admin') {
        return <Navigate to="/admin" replace={true} />
    }

    return !auth.role || auth.role === 'user' ? (
        <CommonLayout>
            <Outlet />
        </CommonLayout>
    ) : (
        <AdminLayout>
            <Outlet />
        </AdminLayout>
    )
}

export default HybridRoute
