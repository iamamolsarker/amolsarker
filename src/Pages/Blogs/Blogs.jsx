import React, { useEffect, useState } from 'react';
import Blog from '../../Components/Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json()).then(data => setBlogs(data))
    },[])

    return (
        <div className='max-w-7xl mx-auto px-4 m-auto flex gap-4 py-20 mt-20 flex-wrap'>
            {
                blogs.map(blog => <Blog blog={blog}/>)
            }
        </div>
    );
};

export default Blogs;