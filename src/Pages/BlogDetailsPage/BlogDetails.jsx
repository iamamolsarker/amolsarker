import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BlogDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleBlog = data.find(book => book.id === bookId)
    const {title, author, content} = singleBlog;
    return (
        <div className='max-w-7xl mx-auto px-4 m-auto flex gap-4 py-20 mt-20 flex-wrap'>
            <h2 className='font-semibold text-2xl'>{title}</h2>
            <p>{content}</p>
            <p>written by: {author}</p>
        </div>
    );
};

export default BlogDetails;