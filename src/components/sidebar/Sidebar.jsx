import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebatTitle">ABOUT ME</span>
            <img src="https://avatars.githubusercontent.com/u/71091109?v=4" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum illo, in illum reprehenderit provident optio minus excepturi nihil quaerat cupiditate?</p>
        </div>
        <div className="sidebarItem">
         <span className="sidebatTitle">CATAGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>

        </div>
        <div className="sidebarItem">
          <span className="sidebatTitle">FOLLOW US </span>
         <div className="sidebarSocial">
         <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
         </div>
        </div>
    </div>
  )
}
