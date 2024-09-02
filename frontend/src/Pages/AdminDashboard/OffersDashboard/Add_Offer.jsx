import React from 'react';
import offerDash from "../../../assets/Offers/offerDash.jpeg";

function Add_Offer() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-1/3 p-8 bg-white rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Offer Title"
          className="p-3 mb-4 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Offer Description"
          className="p-3 mb-4 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Discount Percentage"
          className="p-3 mb-4 border rounded-lg"
        />
        <input
          type="date"
          placeholder="Expiration Date"
          className="p-3 mb-4 border rounded-lg"
        />
        <input
          type="date"
          placeholder="Start Date"
          className="p-3 mb-4 border rounded-lg"
        />
        <input
          type="file"
          accept="image/*"
          className="p-3 mb-4 border rounded-lg"
        />
        <button className="p-3 text-white bg-black rounded-lg">
          Publish &rarr;
        </button>
      </div>

      <div className="w-1/3 h-auto ml-8">
        <img src={offerDash} alt="Offer" className="object-cover w-full h-full rounded-lg " />
        </div>
    </div>
  );
}

export default Add_Offer;
