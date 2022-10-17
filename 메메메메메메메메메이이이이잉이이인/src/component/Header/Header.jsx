import React from 'react'
import {NavLink} from "react-router-dom"
import './header.css'
import { Container,Row } from 'reactstrap' 
import logogo from "../../assets/images/pteemo.jpg"
import u_icon from '../../assets/images/pteemo2.jpg'

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
          {link.map((item)=>{
            <NavLink to={item.path}>{item.display}</NavLink>
          })}
        <li className="item">
          <NavLink to="home">Home</NavLink>
        </li>
        <li className="item">
          <NavLink to="home">Shop</NavLink>
        </li>
        <li className="item">
          <NavLink to="home">Cart</NavLink>
        </li>
        </ul>
   
        </div>
<div className='iccon'>
  <span className='f_icon'><i class="ri-government-fill"></i></span>
  <span className='c_icon'>
  <i class="ri-government-fill"></i></span>
  <span><img src={u_icon} alt=''/></span>
</div>  

 </div>
    </Row>
  </Container>
 </header>
  
}

export default Header