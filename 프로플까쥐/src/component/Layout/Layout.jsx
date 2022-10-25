import React from 'react'
import Header from '../Header/Header'

import Router from '../../router/Router'


const Layout = () => {
  return (
    <>
    <Header/>
    <div>
        <Router/>
    </div>
    </>
  )
}

export default Layout