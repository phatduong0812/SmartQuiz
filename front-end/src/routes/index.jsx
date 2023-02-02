import { Route, Switch } from 'react-router-dom'

import { CommonLayout } from '~/components/layout'

import PublicRoute from './PublicRoute'

import CreateStudySet from '~/pages/CreateStudySet'
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import SearchPage from '~/pages/SearchPage'
import StudySetDetail from '~/pages/StudySetDetail'

const publicRoutes = [
    {
        component: Login,
        path: '/login',
        name: 'login',
        layout: 'common',
    },
    {
        component: Home,
        path: '/',
        name: '/home',
        layout: 'common',
    },
    {
        component: SearchPage,
        path: '/search',
        name: 'search',
        layout: 'common',
    },
    {
        component: StudySetDetail,
        path: '/detail/:id',
        name: 'detail',
        layout: 'common',
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

const RouteList = (
    <Route>
        <CommonLayout>
            <Switch>
                {publicRoutes.map(
                    ({ layout, ...route }) =>
                        layout === 'common' && <PublicRoute key={route.name} exact={true} {...route} />
                )}
            </Switch>
            {/* <Redirect to="/" /> */}
        </CommonLayout>
    </Route>
)

export default RouteList
