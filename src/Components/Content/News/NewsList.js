import { useEffect } from "react";

const NewsList = () => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => console.log(json))
            
    }, []);
    
    return (
        <div>
            
        </div>

    )
}

export default NewsList;