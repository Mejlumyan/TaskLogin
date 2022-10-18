import './news.css';
const NewsList = ({posts, title, handleDelete}) => {

    return (
        <>
            <h2 className="title-name">{title}</h2>
            <table>
                <tbody>
                    <tr>
                        <th className='news-anun'>Title</th>
                        <th className='news-title'>Body</th>
                        <th className='news-title'></th>
                        <th className='news-title'>Delete</th>
                    </tr>
                    {posts.map((post) =>( 
                        <tr className='list-id' key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.body} </td>
                            <td></td>
                            <td>
                                <button 
                                    onClick={() => handleDelete(post.id)} 
                                    className='trash-box'
                                >
                                    Delete News
                                </button>
                            </td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </>
    )
}

export default NewsList;