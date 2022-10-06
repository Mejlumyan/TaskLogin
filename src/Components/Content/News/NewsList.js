import { useEffect } from "react";

const NewsList = ({posts, title, handleDelete}) => {

    return (
        <div className="news-list">
            <h2>{title}</h2>
            {posts.map(() =>(
                <div key = {post.id}> 
                <h2>{post.title}</h2>
                <p> {post.body}</p>
                {/* <button onClick={() => handleDelete(post.id)}> delete News</button> */}  DLT button
                </div>
            ))}
        </div>

    )
}

export default NewsList;