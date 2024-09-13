import React from 'react';

function Landing() {
  return (
    <>
    
 
    <div className='relative flex justify-between bg-cover bg-center h-screen' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/abstract-digital-background-with-holographic-cube_23-2149707641.jpg?w=1060&t=st=1726064776~exp=1726068376~hmac=98c6f4f79513f3748be739f25b002f2d7a2076c921eb9b57d313b26ab769403f')" }}>
      <nav className="flex justify-between items-center p-5 bg-transparent absolute top-0 w-full z-20">
        <div className="flex items-center space-x-4">
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-holographic-cube_23-2150979696.jpg?t=st=1726055121~exp=1726058721~hmac=180984ade3b9d395789c21118c0692ceb3f79e5f0dc25435cbdbde606ed3d47f&w=360"
            alt=""
            className='h-12 rounded-2xl hover:scale-110 transition-transform cursor-pointer duration-300'
          />
        </div>
        <div className="text-white text-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
          
        </div>
      </nav>

      <div className='absolute inset-0 bg-black opacity-50'></div>
   

     
      <div className='flex flex-col justify-center items-center h-full text-center text-white relative z-10 ml-28'>
        <h1 className='text-6xl font-bold mb-5 animate__animated animate__fadeInDown'>
          NFTs Hub
        </h1>
        <p className='text-2xl mb-10 animate__animated animate__fadeInUp animate__delay-1s'>
          Discover, Collect, and Sell Extraordinary NFTs
        </p>
        <a href="#main">
          <button className='py-3 px-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 text-white text-lg font-semibold hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl animate__animated animate__fadeInUp animate__delay-2s'>
            Explore NFTs
          </button>
        </a>
       
      </div>
      <div className='absolute bottom-48 left-1/2 transform -translate-x-1/2 ml-28'>
        <img src="https://i.pinimg.com/originals/c9/2b/62/c92b62882ad82245ac9bad6f4b8ee741.gif" alt="NFT Animation" className='h-80 w-auto ml-96 rounded-2xl' />
      </div>

      
      
    </div>
    <div className='h-64'></div>  
    
    </>
  );
}

export default Landing;
