import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
          <div className="settingsTitle">
              <span className="settingsUpdateTitle">
                  Update Your Account 
              </span>
              <span className="settingsDeleteTitle">
                  Delete Account 
              </span>
          </div>
          <form className="settingsForm">
            <label > Profile Picture</label>
            <div className="settingsProfilePicture">
                <img src="https://avatars.githubusercontent.com/u/71091109?v=4" alt="" />
                <label htmlFor="fileInput">
         <i className="settingsProfilePictureIcon fa-regular fa-circle-user"></i>
           </label>
           <input type="file" id="fileInput"  style={{display:"none"}}/>
            </div>
            <label > Username</label>
            <input type="text"  placeholder="Arshdeep Singh"/>
            <label > Email</label>
            <input type="email"  placeholder="arshdeepsinghkhalsa2001@gmail.com"/>
            <label > Password</label>
            <input type="password" />
            <label > Phone Number</label>
            <input type="number"  placeholder="6283531374"/>
            <button className="settingsSubmit">Update</button>
          </form>
      </div>
      <Sidebar/>
    </div>
  )
}
