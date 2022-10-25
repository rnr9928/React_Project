import React from 'react'
import {Switch,Route,useMatch} from 'react-router-dom'


const Admin = () => {
  console.log(useMatch)
    const {path} = useMatch


  return (
    <div>
        <h1>어드민</h1>
    </div>
  )
}

export default Admin