import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => setBlogs(data.posts));
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    return (
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === '' || blog.tags.includes(category)) &&
      (date === '' || new Date(blog.date).toISOString().split('T')[0] === date)
    );
  });

  return (
    <div >
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4 mb-6">
  <input
    type="text"
    placeholder="🔍 Search blogs..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
  />
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;