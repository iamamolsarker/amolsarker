import React from 'react';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router';

const Blog = ({blog}) => {
    const {id, title, excerpt} = blog;
    return (
        <div className='max-w-1/2 flex-1/3 border border-gray-100 rounded-xl p-4 flex flex-col gap-3 items-start'>
            <h2 className='text-white font-semibold text-2xl'>{title}</h2>
            <p>{excerpt}</p>
            <Link to={`/single-blog/${id}`} className="relative inline-block text-[#111111] font-semibold rounded-full bg-gradient-to-r from-[#D4FE1A] to-[#39EEBE] border-2 border-transparent cursor-pointer">
              <span className="flex items-center gap-2 bg-[#111] text-white rounded-full px-6 py-2.5 tracking-wider">
                Read More
              </span>
            </Link>
        </div>
    );
};

export default Blog;