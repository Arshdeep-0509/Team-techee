import { Link } from "react-router-dom";
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="
        " className="loginForm">
            <label > Email</label>
            <input type="email"  placeholder="Enter your Email..." className="loginInput"/>
            <label > Password</label>
            <input type="password"  placeholder="Enter your password..." className="loginInput"/>
            <botton className="loginButton">Login</botton>
            <botton className="loginRegisterButton"> <Link className="link" to="/register" >
             Register
            </Link></botton>
        </form>
        
        </div>
  )
}
