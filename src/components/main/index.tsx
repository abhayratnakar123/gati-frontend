import React from "react";
export const Main = () => {
  return (
    <div className="text-white h-full  p-32 flex lg:flex-row items-center justify-center md:flex-col sm:flex-col"
    style={{
      background:
        "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(15,15,111,1) 76%, rgba(50,0,255,1) 100%)",
    }}
    >
      <div className="flex flex-col">
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fadeInUp {
            animation: fadeInUp 2s ease-out forwards;
          }
        `}
      </style>
      <div className='text-6xl font-bold mb-4 w-1/2 fadeInUp'>
        Experience the New Era of Computing
      </div>
        {/* <div className="text-6xl font-bold mb-4 w-1/2 ">
          Experience the New Era of Computing
        </div> */}

        <div className="mt-5 w-1/2">
          The effortless world of spatial computing, ready for you to explore in
          the palm of your hands!
        </div>
        <div className="flex gap-10 mt-5">
        <button className="px-6  bg-[#0f0f6f] text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300">
          Explore Products
        </button>
        <button className="px-6 py-2 border-2  text-white font-semibold rounded-full hover:bg-gray-600 transition duration-300">
          Get in Touch
        </button>
      </div>
      </div>
      <div className="w-full">
        <img
          src="/images/banner-bg.png"
          alt="Banner Background"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
