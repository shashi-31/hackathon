import React from 'react';
import { useParams } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "The Rise of AI in Everyday Life",
    date: "March 1, 2025",
    image: "https://source.unsplash.com/800x400/?artificial,intelligence",
    content: "Artificial Intelligence (AI) is now integrated into our lives in many ways...",
    author: "Sophia Carter",
  },
];

const SingleBlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <div className="text-center text-red-500 text-lg">Blog not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img className="w-full h-72 object-cover rounded-t-lg" src={blog.image} alt={blog.title} />
      <h1 className="text-3xl font-bold text-gray-900 mt-4">{blog.title}</h1>
      <p className="text-gray-600 mt-2">{blog.date} by {blog.author}</p>
      <p className="text-gray-700 mt-4">{blog.content}</p>
    </div>
  );
};

export default SingleBlogPage;
