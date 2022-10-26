import React from 'react'
import {NavLink,useNavigate} from "react-router-dom"
import './header.css'
import { Container,Row } from 'reactstrap' 
import { useSelector } from 'react-redux'
import logogo from "../../assets/images/mush.png"
import u_icon from '../../assets/images/pteemo2.jpg'
import {motion} from 'framer-motion'
import useAuth from '../../hook/useAuth'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'

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
  {
    path:'article',
    display:'FAQ'
  }
]

const Header = () => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const profileActionRef = useRef(null)
  const navigate = useNavigate()
  const {currentUser} = useAuth()

  const logout = ()=>{
    signOut(auth).then(()=>{
toast.success('로그아웃')
navigate('/home')
    }).catch(err=>{
      toast.error(err.message)
    })
  }
  const navigateCart = () => {
      navigate('/cart')
  }

  const toggleProfileActions = () => profileActionRef.current.classList.toggle('show_proFile')
  return <header className='header'>
  <Container>
    <Row>
      <div className='head'>
        <div className="logogo"> 
          <img src={logogo} alt='logogo'/>
          <div>
          <h1>Teemo<span>Mart</span></h1>
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
  <i class="ri-shopping-cart-fill"></i>
  <span className='badge'>{totalQuantity}</span>

  </span>
  <div className='profile'>
    <motion.img whileTap={{scale:1.5}} 
    src={ currentUser? currentUser.photoURL : u_icon} 
    alt=''
    onClick={toggleProfileActions}
    />
          <div className="profile_action" ref={profileActionRef}
          onClick={toggleProfileActions}>
            {
              currentUser ? <span onClick={logout}>Logout</span> : 
              <div className='substate d-felx align-items-center justify-content-center flex-column'>
                <Link to='/sign'>회원가입</Link>
                <br></br>
                <Link to='/login'>로그인</Link>
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