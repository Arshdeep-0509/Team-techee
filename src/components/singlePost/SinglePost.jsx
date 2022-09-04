import "./singlePost.css"

export default function 
() {
  return (
    <div className="singlePost">
     <div className="singlePostWrapper">
         <img src="https://images.pexels.com/photos/11638966/pexels-photo-11638966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet.
        <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="  singlePostIcon fa-solid fa-trash-can"></i>
        </div>
        </h1 >
        <div className="singlePostInfo">
          <span className="singlepostAuthor">Author :  <b> Arshdeep Singh</b></span>
          <span className="singlepostDate"> 1 Hour Ago</span>
        </div>
        <p className="singlepostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veniam, inventore numquam repudiandae magni illo provident repellendus placeat nam odit alias possimus culpa nisi deserunt earum, nihil quam sed, eveniet sapiente libero tempora facere? Consequuntur quisquam error sit nam dicta assumenda adipisci quae iure tenetur hic officiis consequatur eum aperiam pariatur maxime qui, numquam nobis quia enim expedita veritatis ex laboriosam repellat et. Reiciendis natus, minima assumenda illum veritatis eaque? Recusandae, corrupti aliquid rem deleniti quae voluptatibus nesciunt eveniet? Rem minima quae nostrum, eius perferendis voluptatem, voluptatum veritatis architecto optio atque reiciendis qui cum doloremque voluptate reprehenderit, cupiditate nobis ex cumque temporibus at sint eos voluptas? Iste numquam, qui fuga, itaque rerum necessitatibus ex ipsa animi, sunt nihil unde? Iste?</p>
         </div>  
    </div>
  )
}
