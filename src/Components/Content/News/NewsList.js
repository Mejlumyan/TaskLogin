
const NewsList = ({posts, title, handleDelete}) => {

    return (
        <div className="news-list">
            <h2>{title}</h2>
            {posts.map((post) =>(
                <div key = {post.id}> 
                <h2 className="post-title">{post.title}</h2>
                <p className=" post-body"> {post.body}</p>
                
                <button onClick={() => handleDelete(post.id)}> Delete News</button> 
                
                
                </div>
            ))}
            
        </div>

    )
}

export default NewsList;