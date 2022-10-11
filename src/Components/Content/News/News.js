import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import axios from "axios";



const src = "https://jsonplaceholder.typicode.com/posts"

const News = () => {
    const [posts, setPosts] = useState(null);


    
    const postDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
       
    }

   
    useEffect(() => {
        axios
        .get(src)
        .then(data => {
            setPosts(data.data);
        })
        
    }, [])
    
    
    
    return(
        <div className="news-page-div">
           
            <div>
                
                { posts && <NewsList   posts={posts} title="All News" handleDelete={postDelete} />} 
                
            </div>
        </div>
        
    );
};


export  default News;