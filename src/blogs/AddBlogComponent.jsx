import React, { use, useState } from 'react';

const AddBlogComponent = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleImageUpload = (event) => {
    const files = event.target.files;
    setImages([...images, ...Array.from(files)]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const blogData = { images, title, description, content };
    console.log('Blog Data:', blogData);
  };

  useEffect(() => {
    console.log('Images:');
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">Add a New Blog</h1>
      <form onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div className="mb-4">
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">Upload Images</label>
          <input 
            type="file" 
            id="images" 
            multiple 
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-700">
            Submit Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogComponent;
