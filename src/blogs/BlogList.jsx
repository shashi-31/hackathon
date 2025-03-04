import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogCard from './BlogCard';
import AddBlogComponent from './AddBlogComponent';
import SingleBlogPage from './SingleBlogPage';
import axios from 'axios';


const BlogList = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [topBlog, setTopBlog] = React.useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog/all`)
    .then((response) => {
      console.log(response.data);
      setBlogs(response.data);
      setTopBlog(response.data[0]);
      console.log(topBlog);
      
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);


  return !loading && (
    <div className="max-w-6xl mx-auto px-4">
      {topBlog &&  <BlogCard {...topBlog} isFeatured />}
      <h2 className="text-xl font-bold my-4">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
      {/* <Routes>
        <Route path="/add-blog" element={<AddBlogComponent />} />
        <Route path="/blogs/:id" element={<SingleBlogPage />} />
      </Routes> */}
    </div>
  );
};

export default BlogList;
