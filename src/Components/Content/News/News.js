import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import axios from "axios";
import AddPost from "./AddPost";



const src = "https://jsonplaceholder.typicode.com/posts"

const News = () => {
    const [posts, setPosts] = useState(null);
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

    return(
        <div className="news-page-div">

            <div>
               <button> Add New Post</button>
            </div>
            <div>
                { posts && <NewsList   posts={posts} title="All News" handleDelete={postDelete} />} 
            </div>
        </div>
    );
};


export  default News;