import React, {useState , useEffect} from 'react'
import axios from 'axios'

function GetSinglePost() {
    const [post , setPost ] = useState({})
    const [postIdNumber , setPostIdNumber] = useState(0)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postIdNumber}`)
        .then(response => {
            setPost(response?.data)
        })
    }, [postIdNumber])

    return (
        <div>
            <input type='number'
                value={postIdNumber} 
                onChange={(e) => setPostIdNumber(e.target.value)}
            > 
            </input>
            <h1>{postIdNumber}</h1>
            <div key={post.id}>{post.title}</div>
        </div>
    )
}

export default GetSinglePost