import React from 'react'
import {NavLink} from "react-router-dom"
import './header.css'
import { Container,Row } from 'reactstrap' 
import { useSelector } from 'react-redux'
import logogo from "../../assets/images/pteemo.jpg"
import u_icon from '../../assets/images/pteemo2.jpg'
import {motion} from 'framer-motion'

const link = [
  {
  path:'home',
  display:'Home'
  },
  {
  path:'shop',
  display:'Shop'
  },
  {
  path:'cart',
  display:'Cart'
  },
]

const Header = () => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  return <header className='header'>
  <Container>
    <Row>
      <div className='head'>
        <div className="logogo"> 
          <img src={logogo} alt='logogo'/>
          <div>
          <h1>teemo</h1>
          </div>
        </div>
      
     
        <div className="navi">
        <ul className="menu">
          {link.map((item,index)=> 
          <li className='item' key={index}>
            <NavLink to={item.path} className={(navClass)=>navClass.isActive?
            'n_active':''}>{item.display}</NavLink>
            </li>
          )}
       
        </ul>
   
        </div>
<div className='iccon'>
  <span className='f_icon'>
    <i class="ri-government-fill"></i>
    <span className='badge'>1</span>
    </span>
  <span className='c_icon'>
  <i class="ri-government-fill"></i>
  <span className='badge'>{totalQuantity}</span>

  </span>
  <span>
    <motion.img whileTap={{scale:1.5}} src={u_icon} alt=''/>
    </span>
</div>  

 </div>
    </Row>
  </Container>
 </header>
  
}

export default Header