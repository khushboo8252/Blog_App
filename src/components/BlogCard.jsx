import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-pink-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-700">{blog.body}</p>
      <h5 className="text-xl font-bold mb-2">
  👍 {blog.reactions.likes} | 👎 {blog.reactions.dislikes}
      </h5>
    </div>
  );
};

export default BlogCard;