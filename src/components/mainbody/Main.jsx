import React, { useState } from 'react';
import SearchBar from '../searchbar/search';
import save from "../images/save.png";
import Landing from '../landing';

function Main() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [heartColors, setHeartColors] = useState({});
  const [savedcolor, setsavedcolor] = useState({});

  const nfts = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkp_IZ8cuKBOnNK4wQuGkGcI2lw27dhKnOQ&s", name: "Music", category: "Music" },
    { src: "https://i.pinimg.com/736x/a9/22/dd/a922dd83b88bc20ccf5e6e29a4343e77.jpg", name: "Art", category: "Art" },
    { src: "https://media.licdn.com/dms/image/D5612AQGOigW5eujvpQ/article-cover_image-shrink_720_1280/0/1694791276390?e=2147483647&v=beta&t=VgwdWx245Tqrdi7DkXM8nzYQ99XWV5LyBfKAv9_YMhE", name: "Sports", category: "Sports" },
    { src: "https://i.pinimg.com/564x/dc/88/bb/dc88bbb015a93709f524ab2ed1865bf6.jpg", name: "Photography", category: "Photography" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS77PfZHiPmARPxocnDMBlB1CuNdZVPs8Do8w&s", name: "Sports", category: "Sports" },
    { src: "https://i.pinimg.com/564x/a5/29/bb/a529bbb91ed6444fd59a6e7f65b9ddb9.jpg", name: "Sports", category: "Sports" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-uAmNLuM06LPXnnIXl_GClwJRDoJ_JnYvQ&s", name: "Art", category: "Art" },
    { src: "https://cdn.shopify.com/s/files/1/0613/6525/6375/files/Bootsy_Collins_Musicians_that_have_jumped_on_NFT_On_The_Jungle_Floor_1024x1024.jpg?v=1666280082", name: "Music", category: "Music" },
    { src: "https://i.pinimg.com/564x/19/b1/f0/19b1f0f36879423be35f20ac46461bc3.jpg", name: "Art", category: "Art" },
    { src: "https://cdn.shopify.com/s/files/1/0613/6525/6375/files/Bootsy_Collins_Musicians_that_have_jumped_on_NFT_On_The_Jungle_Floor_1024x1024.jpg?v=1666280082", name: "Music", category: "Music" },
    { src: "https://i.pinimg.com/736x/b6/34/71/b634710d702fa7ae3bbabdef8200ba24.jpg", name: "Photography", category: "Photography" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVCAQe8hCNq5m5NVnXNllOCqPXZUb1zRgFw&s", name: "Photography", category: "Photography" },
  ];
  

  const categories = ['All', 'Music', 'Sports', 'Art', 'Photography'];

  const filteredNFTs = nfts.filter((nft) =>
    nft.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'All' || nft.category === selectedCategory)
  );

  const changeHeartColor = (index) => {
    setHeartColors((prevColors) => ({
      ...prevColors,
      [index]: !prevColors[index]
    }));
  };

  
  const changesavedColor = (index) => {
    setsavedcolor((prevColors) => ({
      ...prevColors,
      [index]: !prevColors[index]
    }));
  };

  return (
    <>
      <Landing />
      <div id='main' className="flex">
        <div className="flex-grow bg-black p-6 text-yellow-500">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          <div className="flex justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 mx-2 rounded-full border-2 ${
                  selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
                } hover:bg-blue-300 transition duration-300`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {filteredNFTs.map((nft, index, index2) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 w-96 transform transition duration-300 ml-10">
                <img
                  src={nft.src}
                  alt={nft.name}
                  className="h-40 w-40 align-center flex justify-center object-cover rounded-md mb-4"
                />
                <p className="text-center text-lg font-semibold">{nft.name}</p>
                <div className="flex justify-evenly">
                  <button onClick={() => changeHeartColor(index)}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/256/1077/1077035.png"
                      alt="Heart"
                      className={`h-7 rounded hover:scale-125 transition duration-300  ${
                        heartColors[index] ? 'filter invert red saturate hue-rotate brightness contrast ' : 'bg-red-500'
                      }`}
                    />
                  </button>
                  <button onClick={() => changesavedColor(index)}>
                    <img src={save} alt="Save" className={`h-7 rounded-l hover:scale-125 transition duration-300 w-auto  ${
                        savedcolor[index] ? 'filter invert red saturate hue-rotate brightness contrast ' : 'bg-white'
                      }`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
