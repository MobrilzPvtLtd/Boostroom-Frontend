import React from 'react';
import { MessageCircle } from 'lucide-react';

const BlogCard = ({ date, year, title, excerpt }) => (
  <div className="bg-black/15 rounded-lg p-8 hover:bg-[#053544] transition-colors cursor-pointer">
    {/* Date and Comments */}
    <div className="flex justify-between items-start mb-4">
      <div className="text-gray-400">
        <div className="text-xl font-bold">{date}</div>
        <div className="text-sm">{year}</div>
      </div>
      <MessageCircle className="w-6 h-6 text-green-400" />
    </div>

    {/* Title */}
    <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
      {title}
    </h3>

    {/* Excerpt */}
    <p className="text-gray-400 leading-relaxed">
      {excerpt}
    </p>
  </div>
);

const BlogSection = () => {
  const blogPosts = [
    {
      date: "11/02",
      year: "2024",
      title: "Blog Post Title 1\nBlog Post Title 1",
      excerpt: "Blog post title 1 text text text text texttext text text text text text text text text text text text text text text text text text text text text text text text text text text text text..."
    },
    {
      date: "11/02",
      year: "2024",
      title: "Blog Post Title 1\nBlog Post Title 1",
      excerpt: "Blog post title 1 text text text text texttext text text text text text text text text text text text text text text text text text text text text text text text text text text text text..."
    },
    {
      date: "11/02",
      year: "2024",
      title: "Blog Post Title 1\nBlog Post Title 1",
      excerpt: "Blog post title 1 text text text text texttext text text text text text text text text text text text text text text text text text text text text text text text text text text text text..."
    }
  ];

  return (
    <div className="bg-[#042534] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b border-[#026062] inline-block px-12">
            boostroom Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              date={post.date}
              year={post.year}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;