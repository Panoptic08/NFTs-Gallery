import React from 'react';

function Sidebar() {
  const categories = [
    "All",
    "Art",
    "Music",
    "Sports",
    "Gaming",
    "Crypto",
  ];

  return (
    <div className="bg-gray-900 p-4 min-h-screen w-64 text-white">
      <h2 className="text-xl font-bold mb-8">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className="py-2 px-4 mb-4 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300 cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
