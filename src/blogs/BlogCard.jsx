import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, date, image, description, author }) => {

    const imageSrc = "../../public/SampleBlog.jpeg"
   
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto rounded-lg overflow-hidden shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Image */}
      <img className="w-full h-48 object-cover rounded-t-lg" src={imageSrc} alt={title} />

      <div className="px-6 py-4">
        {/* Title */}
        <div className="font-bold text-2xl mb-2 text-gray-900 line-clamp-2">{title}</div>

        {/* Description */}
        <p className="text-gray-700 text-base mb-4 line-clamp-3">{description}</p>

        {/* Author and Date */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="font-medium">By {author}</span>
          <span className="text-gray-500">{date}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4">
        <Link
          to={`/blogs/${id}`}
          className="text-green-500 hover:text-green-600 text-sm font-semibold hover:underline"
        >
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
