import './news.css';
import 'antd/dist/antd.css';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal} from 'antd';
import {useFilter} from 'react-table';


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
            
            },
        });
    };

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
                    
                    
                   
                    {posts.map((post) =>( 
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