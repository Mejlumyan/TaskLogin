import { useEffect, useState } from "react";
import NewsList from "./NewsList";

const News = () => {
    const [posts, setPosts] = useState(null);

    const handleDelete = (id) => {
        const newPosts = posts.filter(post => post.id !== id);
            console.log(newPosts);
            setPosts(newPosts);
    }

   
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);
    
    return(
        <div className="news-page-div">
           
            <div>
                { posts && <NewsList   posts={posts} title="All News" handleDelete={handleDelete} />}
                
            </div>
        </div>
        
    );
};


export  default News;