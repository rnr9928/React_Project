import React from 'react'
import useAuth from '../hook/useAuth'
import {Navigate} from 'react-router-dom'

const ProtectRoute = ({children}) => {

    const {currentUser} = useAuth()

  return  currentUser ? children : <Navigate to='/login'/>
}

export default ProtectRoute