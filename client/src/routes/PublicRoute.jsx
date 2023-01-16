import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from '../hooks/redux-hooks'

const PublicRoute = () => {
    const { email } = useAppSelector((state) => state.auth)
    if (!email) {
        return <Outlet />
    }

    return <Navigate to="/" replace={true} />
}

export default PublicRoute
