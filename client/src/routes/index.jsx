import { Route, Routes } from 'react-router-dom'

import HybridRoute from './HyBridRoute'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import CreateStudySet from '~/pages/CreateStudySet'
import Home from '~/pages/Home'
import Login from '~/pages/Login'

const publicRoutes = [
    {
        element: <Login />,
        path: 'login',
        name: 'login',
    },
]

const privateRoutes = [
    {
        element: <CreateStudySet />,
        path: 'create',
        name: 'create-study-set',
        layout: 'common',
        role: 'user',
    },
]

const hybridRoutes = [
    {
        element: <Home />,
        index: true,
        name: 'home',
        layout: 'common',
    },
]

const RouteList = (
    <Routes>
        <Route path="/" element={<PublicRoute />}>
            {publicRoutes.map(({ ...route }) => (
                <Route key={route.name} {...route} />
            ))}
        </Route>
        <Route path="/" element={<PrivateRoute />}>
            {privateRoutes.map(({ layout, ...route }) => layout === 'common' && <Route key={route.name} {...route} />)}
        </Route>
        <Route path="/" element={<HybridRoute />}>
            {hybridRoutes.map(({ layout, ...route }) => layout === 'common' && <Route key={route.name} {...route} />)}
        </Route>
    </Routes>
)

export default RouteList
