import './news.css';
import 'antd/dist/antd.css';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal} from 'antd';
import { useState } from 'react';


const NewsList = ({posts, title, handleDelete}) => {
    
    const { confirm } = Modal;
    const showConfirm = (id) => {
        confirm({
            title: 'Do you Want to delete these items?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
               handleDelete(id);
            },
            onCancel() {
                console.log("cancel");
            },
        });
    };
        const [value, setValue] = useState('');
// console.log(typeof value)
         const filteredNews = posts.filter(post => {
            
          return post.id.toString().includes(value)
         })

    return (
        <>
            <h2 className="title-name">{title}</h2>
            <table>
                <tbody>
                    <tr>
                        <th className='news-anun'>id</th>
                        <th className='news-anun'>Title</th>
                        <th className='news-title'>Body</th>
                        <th className='news-title'></th>
                        <th className='news-title'>Delete</th>
                    </tr>
                   <tr>
                    <th> <input type='number'
                            placeholder='search by id' 
                            onChange={(e) => setValue(e.target.value)}>
                        </input> 
                        
                    </th>
                   </tr>
                   
                    {filteredNews.map((post) =>(               // filteredNews
                        <tr className='list-id' key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body} </td>
                            <td></td>
                            <td>
                                <Button onClick={() => showConfirm(post.id)}
                                    >Delete
                                </Button>
                            </td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </>
    )
}

export default NewsList;