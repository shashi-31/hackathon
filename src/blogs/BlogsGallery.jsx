import React from 'react'
import BlogCard from './BlogCard'

function BlogsGallery() {
    const blogs = [
      {
        title: "Understanding React Hooks",
        date: "March 1, 2025",
        image: "https://via.placeholder.com/400",
        description: "In this post, we dive deep into the core concepts of React Hooks and how to use them in modern React development.",
        author: "John Doe",
      },
      {
        title: "Tailwind CSS: A Utility-First CSS Framework",
        date: "March 2, 2025",
        image: "https://via.placeholder.com/400",
        description: "Learn how to build beautiful UIs with Tailwind CSS and why it has become so popular in modern web development.",
        author: "Jane Smith",
      },
      {
        title: "JavaScript ES6 Features You Should Know",
        date: "March 3, 2025",
        image: "https://via.placeholder.com/400",
        description: "A guide to some of the best new features introduced in JavaScript ES6, such as arrow functions, promises, and destructuring.",
        author: "Chris Lee",
      },
      {
        title: "Introduction to TypeScript",
        date: "March 4, 2025",
        image: "https://via.placeholder.com/400",
        description: "Explore the basics of TypeScript and how it helps catch errors during development while improving the quality of JavaScript code.",
        author: "Sarah Brown",
      },
      {
        title: "Modern CSS Grid Layout",
        date: "March 5, 2025",
        image: "https://via.placeholder.com/400",
        description: "Learn about CSS Grid Layout and how it is transforming the way we create responsive web layouts.",
        author: "Emily Davis",
      },
    ];
  
    return (
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {/* Map over blogs array and display BlogCard for each */}
        {blogs.map((blog, index) => (
          <BlogCard
            id={index}
            key={index}
            title={blog.title}
            date={blog.date}
            image={blog.image}
            description={blog.description}
            author={blog.author}
          />
        ))}
      </div>
    );
}

export default BlogsGallery
