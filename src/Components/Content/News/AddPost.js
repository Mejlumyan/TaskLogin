import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";




const AddPost = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  let history = useHistory();

   const postData = (e,id) => {
     e.preventDefault();
     axios
     .post("https://jsonplaceholder.typicode.com/posts",{
         title,
         body
     })
     .then(data =>{
        console.log(data);
        history.push("/news");
       
    })
 }


    return(
        <div>
      <form>
        <label> Title</label>
        <input type = "text"  value = {title} placeholder='title' onChange={(e) => setTitle(e.target.value)}/>
        <hr />
        <label>Body</label>
        <input type = "text"  value = {body} placeholder='body'onChange={(e) => setBody(e.target.value)}/>
        <hr />
        <button onClick={postData}> Add Post </button>
      </form>
      <hr></hr>
      </div>
    )
}


export default AddPost;