import jwt_decode from 'jwt-decode'

import { login, logout } from '../index'
import { useAppDispatch } from './../../../hooks/redux-hooks'

import { useHistory } from 'react-router-dom'
import { post } from '~/utils/ApiCaller'
import LocalStorageUtils from '~/utils/LocalStorageUtils'

const useAuthAction = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const loginHandler = (token) =>
    post({
      endpoint: '/api/authentication/auth',
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      if (response?.data?.isSuccess) {
        LocalStorageUtils.setUser(token)
        const { email, name, image, role, exp, userId } = jwt_decode(token)
        dispatch(login({ email, name, image, role, exp, userId }))
        if (role === 'admin') {
          history.push('/admin')
        } else {
          history.push('/')
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
