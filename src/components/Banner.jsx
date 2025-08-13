import React, { useState } from 'react';
import BannerVideo from '../assets/BannerVideo.mp4';
import Bannersmall1 from '../assets/Bannersmall1.png';
import Bannersmall2 from '../assets/Bannersmall2.png';
import Bannersmall3 from '../assets/Bannersmall3.png';
import Bannerfood from '../assets/Bannerfood.png';

const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className='bg-white pt-12 md:pt-24 min-h-[500px] flex items-center justify-center font-["Poppins",sans-serif] relative overflow-hidden'>
      {showVideo && (
        <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'>
          <div className='bg-white p-4 md:p-8 rounded-lg w-full max-w-4xl relative'>
            <button
              onClick={() => setShowVideo(false)}
              className='absolute -top-8 right-0 text-white text-3xl'>
              &times;
            </button>
            <div className='aspect-video'>
              <video
                src={BannerVideo}
                controls
                autoPlay
                className='w-full h-full rounded-lg'
              />
            </div>
          </div>
        </div>
      )}

      <div className='container mx-auto px-6 md:px-12 xl:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12'>
        {/* Left Section */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <h3 className='text-lg md:text-xl lg:text-2xl font-medium text-gray-600 mb-3'>Mane Dion Fuster</h3>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4'>
            Claim <span className='text-black'>Best Offer</span> on<br />
            <span className='text-orange-500'>Fast Food</span> &<br />
            <span className='text-yellow-500'>Restaurants</span>
          </h1>
          <p className='text-base md:text-lg text-gray-600 mb-6'>
            Our job is to fill your tummy with delicious food<br className='hidden sm:block' />
            and with fast and free delivery.
          </p>

          <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
            <button className='bg-red-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-red-600 transition-all text-base font-semibold'>
              Get Started
            </button>
            <button
              className='flex items-center gap-3 group'
              onClick={() => setShowVideo(true)}
            >
              <span className='w-12 h-12 bg-red-500 rounded-full flex items-center justify-center transition group-hover:bg-red-600 group-hover:scale-110 shadow-lg relative'>
                <span className='absolute inset-0 animate-ping rounded-full bg-red-400 opacity-75'></span>
                <span className='text-white text-lg'>&#9654;</span>
              </span>
              <span className='text-base font-semibold'>Watch Video</span>
            </button>
          </div>

          <div className='flex items-center gap-4 mt-6'>
            <div className='flex -space-x-3'>
              <img src={Bannersmall1} alt="customer" className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md' />
              <img src={Bannersmall2} alt="customer" className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md' />
              <img src={Bannersmall3} alt="customer" className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md' />
            </div>
            <div>
              <p className='text-lg md:text-xl font-bold flex items-center'>
                <span className='text-yellow-500 mr-2'>&#x2605;&#x2605;</span>7.48k
              </p>
              <p className='text-gray-600 text-sm md:text-base'>Our Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className='w-full lg:w-1/2 flex justify-center relative'>
          <div className='relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
            <img
              src={Bannerfood}
              alt="Banner food"
              className='w-full h-auto object-cover rounded-full drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out transform -rotate-180 hover:rotate-0 '
            />

            {/* Top Left - Clock Icon (Fresh Pizza or Time) */}
            <img
              src="https://cdn-icons-png.flaticon.com/128/1827/1827349.png"
              alt="Clock"
              className="absolute top-[-20px] left-[-20px] w-8 h-8 animate-pulse drop-shadow-xl"
            />

            {/* Top Right - Fire Icon (Spicy / Hot Pizza) */}
            <img
              src="https://cdn-icons-png.flaticon.com/128/2490/2490499.png"
              alt="Fire"
              className="absolute top-[-20px] right-[-20px] w-8 h-8 animate-bounce drop-shadow-xl"
            />

            {/* Bottom Right - Arrow Icon (Next / Directional) */}
            <img
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt="Arrow"
              className="absolute bottom-[-20px] right-[-20px] w-8 h-8 animate-ping drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* 🍔 Animated Food Floating Icons */}
      <img src="https://cdn-icons-png.flaticon.com/128/1046/1046784.png" alt="Burger"
        className="w-10 h-10 absolute top-10 left-10 animate-float-slow hidden md:block" />
      <img src="https://cdn-icons-png.flaticon.com/128/135/135620.png" alt="Fries"
        className="w-10 h-10 absolute bottom-10 right-10 animate-float hidden md:block" />
      <img src="https://cdn-icons-png.flaticon.com/128/2784/2784445.png" alt="Drink"
        className="w-10 h-10 absolute top-20 right-20 animate-float-fast hidden md:block" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: float 5s ease-in-out infinite; }
        .animate-float-fast { animation: float 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Banner;