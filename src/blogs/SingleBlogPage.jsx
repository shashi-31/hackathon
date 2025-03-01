import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBlogPage = () => {
  const { id } = useParams();

  // Sample blog data (In a real-world scenario, you might fetch this from an API)
  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      date: "March 1, 2025",
      image: "https://via.placeholder.com/400",
      content: "Detailed content about React Hooks...",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Tailwind CSS: A Utility-First CSS Framework",
      date: "March 2, 2025",
      image: "https://via.placeholder.com/400",
      content: "Detailed content about Tailwind CSS...",
      author: "Jane Smith",
    },
    // Add more blog posts as needed
  ];

  // Find the blog with the matching ID
  const blog = blogs.find((b) => b.id === parseInt(id));
// const blog = blogs[0];

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1>Single blog </h1>
      <img className="w-full h-64 object-cover rounded-t-lg" src={blog.image} alt={blog.title} />
      <h1 className="text-3xl font-bold text-gray-900 mt-4">{blog.title}</h1>
      <p className="text-gray-600 mt-2">{blog.date} by {blog.author}</p>
      <p className="text-gray-700 mt-4">{blog.content}</p>
    </div>
  );
};

export default SingleBlogPage;
