import React from 'react'
import {NavLink,useNavigate} from "react-router-dom"
import './header.css'
import { Container,Row } from 'reactstrap' 
import { useSelector } from 'react-redux'
import logogo from "../../assets/images/pteemo.jpg"
import u_icon from '../../assets/images/pteemo2.jpg'
import {motion} from 'framer-motion'
import useAuth from '../../hook/useAuth'
import { Link } from 'react-router-dom'

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
  const navigate = useNavigate()
  const {currentUser} = useAuth()

  const navigateCart = () => {
      navigate('/cart')
  }
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
  <span className='c_icon' onClick={navigateCart}>
  <i class="ri-government-fill"></i>
  <span className='badge'>{totalQuantity}</span>

  </span>
  <div className='profile'>
    <motion.img whileTap={{scale:1.5}} 
    src={ "https://firebasestorage.googleapis.com/v0/b/lolololo-efd91.appspot.com/o/images%2F1666324026509qwe?alt=media&token=cca22644-ae87-45f3-b479-747af90a5d16"} 
    alt=''
    />
          <div className="profile_action">
            {
              currentUser ? <span>Logout</span> : <div className='asd'>
                <Link to='/sign'>회원가입하기</Link>
                <Link to='/login'>로긘하기</Link>
              </div>

            }
          </div>
    </div>
</div>  

 </div>
    </Row>
  </Container>
 </header>
  
}

export default Header