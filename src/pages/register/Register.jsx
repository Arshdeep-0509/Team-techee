import { Link } from "react-router-dom";
import "./register.css"

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="
        " className="registerForm">
            <label > Username</label>
            <input type="email"  placeholder="Enter your Username..." className="registerInput"/>
            <label > Email</label>
            <input type="email"  placeholder="Enter your Email..." className="registerInput"/>
            <label > Password</label>
            <input type="password"  placeholder="Enter your password..." className="registerInput"/>
            <botton className="registerButton">Register</botton>
            <botton className="registerLoginButton"><Link className="link" to="/login" >
             Login
            </Link></botton>
        </form>
        
        </div>
  )
}
