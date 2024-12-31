import Image from 'next/image';
import React from 'react';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, date, readingTime, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <Image width={200} height={220} src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
          <span>{date}</span>
          <span>{readingTime}</span>
        </div>
        <button className="mt-4 text-yellow-600 hover:underline text-sm">Read More →</button>
      </div>
    </div>
  );
};

export default BlogCard;