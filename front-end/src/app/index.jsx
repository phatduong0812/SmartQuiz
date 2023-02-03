import React from 'react'

import RouteList from '../routes'

import useAuthAction from '~/features/authSlice/auth-actions'

function App() {
    const authAction = useAuthAction()
    authAction.autoLoginHandler()

    return <React.Fragment>{RouteList}</React.Fragment>
}

export default App
