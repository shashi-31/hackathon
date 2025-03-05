import React from 'react';
import BlogCard from './BlogCard';

const blogs = [
  {
    id: 1,
    title: "The Impact of Climate Change on Our Planet",
    date: "March 3, 2025",
    image: "SampleBlog.jpeg",
    description: "Climate change is reshaping ecosystems and impacting global weather patterns...",
    content: "Rising global temperatures, extreme weather events, and sea level rise are some of the most pressing challenges...",
    author: "Dr. Emily Green",
  },
  {
    id: 2,
    title: "Reducing Plastic Waste: Steps for a Greener Future",
    date: "March 5, 2025",
    image: "https://source.unsplash.com/800x400/?plastic,waste",
    description: "Plastic pollution is one of the biggest environmental challenges of our time...",
    content: "By adopting sustainable alternatives, reducing single-use plastics, and increasing recycling efforts, we can...",
    author: "Alex Johnson",
  },
  {
    id: 3,
    title: "How Renewable Energy is Transforming the World",
    date: "March 7, 2025",
    image: "https://source.unsplash.com/800x400/?renewable,energy",
    description: "Solar, wind, and hydro power are revolutionizing how we generate energy...",
    content: "The transition to renewable energy sources is essential for reducing carbon footprints and ensuring a sustainable future...",
    author: "Sarah Williams",
  },
  {
    id: 4,
    title: "Air Pollution: Causes, Effects, and Solutions",
    date: "March 9, 2025",
    image: "https://source.unsplash.com/800x400/?air,pollution",
    description: "Air pollution is a silent killer affecting millions worldwide...",
    content: "Vehicle emissions, industrial activities, and deforestation contribute to poor air quality, leading to respiratory diseases...",
    author: "Michael Brown",
  },
  {
    id: 5,
    title: "Sustainable Agriculture: Feeding the World Responsibly",
    date: "March 11, 2025",
    image: "https://source.unsplash.com/800x400/?sustainable,agriculture",
    description: "Modern farming practices must balance food production with environmental preservation...",
    content: "By promoting crop rotation, organic farming, and reduced pesticide use, we can ensure long-term food security...",
    author: "Rachel Martinez",
  },
];

const BlogList = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {blogs.length > 0 && <BlogCard {...blogs[0]} isFeatured />}
      <h2 className="text-xl font-bold my-4">Latest Environmental Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
