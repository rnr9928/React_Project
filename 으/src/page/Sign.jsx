import React,{useState} from 'react'
import Space from '../component/Space/Space'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../style/login.css'
import {  createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import {ref, uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import {setDoc ,doc} from 'firebase/firestore'
import {auth} from '../firebase.config'
import { storage } from '../firebase.config'
import {toast}  from 'react-toastify'
import {db} from '../firebase.config'
import { useNavigate } from 'react-router-dom'

const Sign = () => {

const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password,setPassword] = useState('')
const [file,setFile] = useState(null)
const [loading,setLoading] = useState(false)

const navigate = useNavigate()

const signup = async(e) =>{
  e.preventDefault()
  setLoading(true)
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email , password)

    const user = userCredential.user;
    const storageRef = ref(storage,`images/${Date.now()+ username}`)
    const uploadTask=uploadBytesResumable(storageRef,file)

  uploadTask.on((error)=>{
    toast.error(error.message)
  },()=>{
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
    await  updateProfile(user,{
        displayName: username,
       photoURL: downloadURL,
      })
      await  setDoc(doc(db,'users',user.uid),{
        uid: user.uid,
        displayName: username,
        email,
       photoURL:downloadURL
      })
    })
  })
    // console.log(user)
    setLoading(false)
    toast.success('환영해요')
    navigate('/login')
   } catch (error) {
    setLoading(false)
      toast.error('뭔가가 잘못됬어..')
   }
  
}

  return (
   <Space title='SIGN UP'>
<section>
  <Container>
    <Row>
     {
      loading? <Col lg='12' className='text-center'>
        <h6 className='fw-bold'>로딩중.....</h6>
      </Col> : <Col lg='6' className='m-auto text-center'>
        <h3 className='fw-bold mb-4'>SIGN UP</h3>

        <Form className='auth_f' onSubmit={signup}>
          <FormGroup className='f_group'>
            <input type="text" placeholder="이름"
            value={username} onChange={(e)=>  setUsername(e.target.value)}/>
          </FormGroup>
          <FormGroup className='f_group'>
            <input type="email" placeholder="이메일"
            value={email} onChange={(e)=>  setEmail(e.target.value)}/>
          </FormGroup>
          <FormGroup className='f_group'>
            <input type="password" placeholder="비밀번호"
            value={password} onChange={(e)=>  setPassword(e.target.value)}/>
          </FormGroup>
          <FormGroup className='f_group2'>
            <input type="file" 
           onChange={(e)=>  setFile(e.target.files[0])}/>
          </FormGroup>

          <button type='submit' className='bbbtn1 aaa'>회원가입</button>
          <p> <Link to="/login">로그인하기</Link></p>
        </Form>
      </Col>
     }
    </Row>
  </Container>
</section>
   </Space>
  )
}

export default Sign