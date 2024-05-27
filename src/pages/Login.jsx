import { useNavigate } from "react-router-dom"
import { auth, provider } from "../auth/firebase"
import { signInWithPopup } from "firebase/auth"

const Login = ({ setAuthenticated }) => {
    const navigate = useNavigate()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log('result', result)
            setAuthenticated(true)
            localStorage.setItem('auth', true)
            localStorage.setItem('username', result.user.displayName)
            localStorage.setItem('email', result.user.email)
            navigate('/admin/dashboard')
        })
    }
    
  return (
    <div>
      <button onClick={signInWithGoogle}>Continue with Google</button>
    </div>
  )
}

export default Login
