import {Route , Routes,Navigate } from "react-router-dom"


import Home from '../page/Home'
import Cart from '../page/Cart'
import Check from '../page/Check'
import Detail from '../page/Detail'
import Login from '../page/Login'
import Shop from '../page/Shop'
import Sign from '../page/Sign'
import ProtectRoute from "./ProtectRoute"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='home' />}/>
      <Route path="home" element={<Home/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="check" element={<ProtectRoute>
        <Check/>
        </ProtectRoute>}/>
      <Route path="shop/:id" element={<Detail/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="sign" element={<Sign/>}/>
    </Routes>
  )
}

export default Router