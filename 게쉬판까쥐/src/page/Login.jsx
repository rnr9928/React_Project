import React,{useState} from 'react'
import Space from '../component/Space/Space'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase.config'
import {toast} from 'react-toastify'
import '../style/login.css'

const Login = () => {

const [email, setEmail] = useState('')
const [password,setPassword] = useState('')
const  [loading,setLoading] = useState(false)
const navigate =  useNavigate()

const signIn = async(e)=>{
  e.preventDefault()
  setLoading(true)

  try{
    
    const  userCreate = await signInWithEmailAndPassword(auth,email,password)
    const user = userCreate.user

    // console.log(user)
    setLoading(false)
    toast.success('로그인성공')
    navigate('/home')
  }catch(error){
    setLoading(false)
    toast.error(error.message)
  }
}

  return (
   <Space title='Login'>
<section>
  <Container>
    <Row>
     {
      loading ? <Col lg='12' className='text-center'><h6 className='fw-bold'>로딩중...</h6>
      </Col> :  <Col lg='6' className='m-auto text-center'>
        <h1 className='fw-bold mb-4 '>LOGIN</h1>

        <Form className='auth_f' onSubmit={signIn}>
          <FormGroup className='f_group'>
            <input type="email" placeholder="이메일"
            value={email} onChange={e=>  setEmail(e.target.value)}/>
          </FormGroup>
          <FormGroup className='f_group'>
            <input type="password" placeholder="비밀번호"
            value={password} onChange={e=>  setPassword(e.target.value)}/>
          </FormGroup>

          <button type='submit' className='bbbtn1 aaa'>로그인</button>
          <p> <Link to="/sign">회원가입하기</Link></p>
        </Form>
      </Col>
     }
    </Row>
  </Container>
</section>
   </Space>
  )
}

export default Login