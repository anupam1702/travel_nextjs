import React from 'react';
import BlogCard from './Blogcard';

const blogPosts = [
  {
    title: 'Aussie Sail Tales',
    description: "Unravel The Captivating Stories Of A Solo Sailor Navigating Australia's Enchanting Coastlines And Discovering Its Awe-Inspiring Hidden Treasures.",
    date: 'Feb. 10, 2023',
    readingTime: '4 min',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
  },
  {
    title: 'Aussie Sail Tales',
    description: "Unravel The Captivating Stories Of A Solo Sailor Navigating Australia's Enchanting Coastlines And Discovering Its Awe-Inspiring Hidden Treasures.",
    date: 'Feb. 10, 2023',
    readingTime: '4 min',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
  },
  {
    title: 'Aussie Sail Tales',
    description: "Unravel The Captivating Stories Of A Solo Sailor Navigating Australia's Enchanting Coastlines And Discovering Its Awe-Inspiring Hidden Treasures.",
    date: 'Feb. 10, 2023',
    readingTime: '4 min',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a',
  },
];

const Fourth: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Sailing Solo Down Under</h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Explore Australia&apos;s coastal wonders as a solo sailor, uncovering hidden gems and embracing the beauty of the open sea on an unforgettable voyage of self-discovery.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </section>

      <footer className="text-center py-10">
        <button className="px-6 py-3 bg-black text-orange-500 rounded-md hover:bg-black">
          View My Posts
        </button>
      </footer>
    </div>
  );
};

export default Fourth;