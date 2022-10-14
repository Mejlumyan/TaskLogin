import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import axios from "axios";
import { Link } from "react-router-dom";


const src = "https://jsonplaceholder.typicode.com/posts"

const News = () => {
    const [posts, setPosts] = useState(null);
    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');

    useEffect(() => {
        axios
        .get(src)
        .then(data => {
            setPosts(data.data);
        })
        
    }, []);

    const postDelete = (id) => {
        axios
        .delete(src+'/'+id)
        .then(data => {
            setPosts(posts.filter(post => post.id !== id));
        })
    }

    // const postData = (e,id) => {
    //     e.preventDefault();
    //     axios
    //     .post("https://jsonplaceholder.typicode.com/posts",{
    //         title,
    //         body
    //     })
    //     .then(data =>{
    //         setPosts(posts);
    //         console.log(...posts,data.data);
    //     })
    // }
    return(
        <div className="news-page-div">
            
            <div> <Link to="/addPost">Add Post</Link></div>
            
            <div>
                { posts && <NewsList   posts={posts} title="All News" handleDelete={postDelete}  />} 
            </div>
        </div>
    );
};


export  default News;