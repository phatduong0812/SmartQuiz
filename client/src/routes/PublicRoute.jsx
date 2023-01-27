import { Navigate, Outlet } from 'react-router-dom'

import { CommonLayout } from '~/components/layout'

import { useAppSelector } from '../hooks/redux-hooks'

const PublicRoute = () => {
    const { email } = useAppSelector((state) => state.auth)
    if (!email) {
        return (
            <CommonLayout>
                <Outlet />
            </CommonLayout>
        )
    }

    return <Navigate to="/" replace={true} />
}

export default PublicRoute
