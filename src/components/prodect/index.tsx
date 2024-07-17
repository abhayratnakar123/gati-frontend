import React from 'react';

const ProductCard = ({ icon, title, description }:any) => {
  return (
    <div className="bg-[#212121] h-[50vh] lg:w-[26vw]  text-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
      <div className="flex justify-center mb-4">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
          <img src='https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-4296.jpg?t=st=1720610612~exp=1720614212~hmac=6eba37c0762460f56d1618f2fd8155c724610981131331ff6207883025a102d3&w=740' alt={`${title} icon`} className="h-40" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-200">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ProductCard;