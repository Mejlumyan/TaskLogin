import './news.css';
import 'antd/dist/antd.css';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useState } from 'react';


const NewsList = ({ posts, title, handleDelete }) => {

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
    
    // const filteredNews = posts.filter(post => {
    //     return post.id.toString().includes(value) 
    //     //|| post.title.includes(value) || post.body.includes(value)
    // })


    return (
        <>
            <h2 className="title-name">{title}</h2>
            <table>
                <tbody>
                    <tr>
                        <th className='news-id'>Title number</th>
                        <th className='news-anun'>Title</th>
                        <th className='news-title'>Body</th>
                        <th className='news-title'></th>
                        <th className='news-title'>Delete</th>
                    </tr>
                    <tr>
                        <th>
                            <input
                                type='text'
                                placeholder='search by title id'
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </th>
                        <th>
                            <input
                                type='text'
                                placeholder='search by title'
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </th>
                        <th>
                            <input
                                type='text'
                                placeholder='search by  '
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </th>
                    </tr>


                    {posts.map((post) => (               // minchev filter avelacnele posts.map
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