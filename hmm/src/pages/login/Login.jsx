import { useState , useContext } from "react"
import "./login.scss"
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [err,setErr] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) =>{
    e.preventDefault();

    signInWithEmailAndPassword(auth,email,password)
    .then((userCredent) => {
      const user = userCredent.user;
      dispatch({type:"LOGIN",payload:user})
      navigate('/')
    })
    .catch((err) =>{
      setErr(true);
    })

  }
  return (
    <div  className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="이메일" onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder="비번" onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">러긘</button>
        {err && <span>이메일 또는 비번  잘못입력</span>}
      </form>
    </div>
  )
}

export default Login