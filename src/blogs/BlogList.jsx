import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogCard from './BlogCard';
import AddBlogComponent from './AddBlogComponent';
import SingleBlogPage from './SingleBlogPage';

const blogs = [
  {
    id: 1,
    title: "The Rise of AI in Everyday Life",
    date: "March 1, 2025",
    image: "https://source.unsplash.com/800x400/?artificial,intelligence",
    description: "Artificial intelligence is becoming a crucial part of our daily routines...",
    content: "Artificial Intelligence (AI) is now integrated into our lives in many ways...",
    author: "Sophia Carter",
  },
  {
    id: 1,
    title: "The Rise of AI in Everyday Life",
    date: "March 1, 2025",
    image: "https://source.unsplash.com/800x400/?artificial,intelligence",
    description: "Artificial intelligence is becoming a crucial part of our daily routines...",
    content: "Artificial Intelligence (AI) is now integrated into our lives in many ways...",
    author: "Sophia Carter",
  },
  {
    id: 1,
    title: "The Rise of AI in Everyday Life",
    date: "March 1, 2025",
    image: "https://source.unsplash.com/800x400/?artificial,intelligence",
    description: "Artificial intelligence is becoming a crucial part of our daily routines...",
    content: "Artificial Intelligence (AI) is now integrated into our lives in many ways...",
    author: "Sophia Carter",
  },
  {
    id: 1,
    title: "The Rise of AI in Everyday Life",
    date: "March 1, 2025",
    image: "https://source.unsplash.com/800x400/?artificial,intelligence",
    description: "Artificial intelligence is becoming a crucial part of our daily routines...",
    content: "Artificial Intelligence (AI) is now integrated into our lives in many ways...",
    author: "Sophia Carter",
  },
  {
    id: 1,
    title: "The Rise of AI in Everyday Life",
    date: "March 1, 2025",
    image: "https://source.unsplash.com/800x400/?artificial,intelligence",
    description: "Artificial intelligence is becoming a crucial part of our daily routines...",
    content: "Artificial Intelligence (AI) is now integrated into our lives in many ways...",
    author: "Sophia Carter",
  },
  {
    id: 1,
    title: "The Rise of AI in Everyday Life",
    date: "March 1, 2025",
    image: "https://source.unsplash.com/800x400/?artificial,intelligence",
    description: "Artificial intelligence is becoming a crucial part of our daily routines...",
    content: "Artificial Intelligence (AI) is now integrated into our lives in many ways...",
    author: "Sophia Carter",
  },
];

const BlogList = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {blogs.length > 0 && <BlogCard {...blogs[0]} isFeatured />}
      <h2 className="text-xl font-bold my-4">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
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
