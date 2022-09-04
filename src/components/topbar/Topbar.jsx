import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
  const user = true;
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/" >
             HOME
            </Link>
          </li>
          <li className="topListItem"><Link className="link" to="/about" >
             ABOUT
            </Link></li>
          <li className="topListItem"><Link className="link" to="/contact" >
             CONTACT
            </Link></li>
          <li className="topListItem"><Link className="link" to="/write" >
             WRITE
            </Link></li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">

       {
         user? (
        <img 
        className="topImg"
        src="https://images.pexels.com/photos/11143927/pexels-photo-11143927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
         ):(<ul className="topList ">
           <li className="topListItem">

          
            <Link className="link" to="/login" >
             LOGIN
            </Link>
             </li>
             <li className="topListItem">

            <Link className="link" to="/register" >
             REGISTER
            </Link>
             </li>
            </ul>
            )
       }


        <i className=" topSerachIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
