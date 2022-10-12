import { useState } from "react";

const AddPost = ({title}) => {

    const [body, setBody] = useState('');

    return(
        <div>
      <form>
        <label> Title</label>
        <input type = "text"  value = {title} placeholder='title'/>
        <hr />
        <label>Body</label>
        <input type = "text"  value = {body} placeholder='body'/>
        <hr />
        <button > Add Post </button>
      </form>
      </div>
    )
}


export default AddPost;