import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";


const AddPost = (props) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
    
  const postData = (e,id) => {
    e.preventDefault();
    axios
    .post("https://jsonplaceholder.typicode.com/posts",{
        title,
        body
    })
    .then(data =>{
        console.log(data);
        // <Redirect to="/news"></Redirect>
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