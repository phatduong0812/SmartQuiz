import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

import { login, logout } from '../index'

import { post } from '~/utils/ApiCaller'
import LocalStorageUtils from '~/utils/LocalStorageUtils'

const useAuthAction = () => {
    const navigate = useNavigate()
    const loginHandler = (token) =>
        post({
            endpoint: '/api/authentication/auth',
            headers: { Authorization: `Bearer ${token}` },
        }).then((response) => {
            if (response?.data?.isSuccess) {
                LocalStorageUtils.setUser(token)
                const { email, name, image, role, exp, userId } = jwt_decode(token)
                login({ email, name, image, role, exp, userId })
                if (role === 'admin') {
                    navigate('/admin')
                } else {
                    navigate('/')
                }
            } else {
                throw new Error('Something went wrong')
            }
        })

    const logoutHandler = () => {
        LocalStorageUtils.deleteUser()
        logout()
        history.push('/login')
    }

    return { loginHandler, logoutHandler }
}

export default useAuthAction
