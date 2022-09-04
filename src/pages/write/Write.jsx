import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://images.pexels.com/photos/1726310/pexels-photo-1726310.jpeg" alt="" className="writeImg" /> 
    <form action="" className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className=" writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput"  style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell Your Story.." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
    </form>
    </div>
  )
}
