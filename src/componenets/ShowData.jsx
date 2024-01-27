import React from "react";
import { useDispatch } from "react-redux";
import { additems } from "../slices/slicespro";
import { notification } from "antd";

const ShowData = ({ products }) => {
  const { title, price, images, description } = products;
  const dispatch = useDispatch();

  const handlecardata = (products) => {
    dispatch(additems(products));
    notification.success({
      message: "Added Successfully",
    });
  };

  return (
    <>
      <div className="w-64 mt-5 mb-10 lg:mr-10 bg-gray-100 shadow-md rounded-md overflow-hidden">
        <img src={images[0]} alt="reyey" className="w-full h-40 object-cover" />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <h3 className="text-lg text-gray-700 mb-2">{description}</h3>
          <p className="text-gray-600 font-bold mb-3">Price:- {price}</p>
          <button
            onClick={() => handlecardata(products)}
            className="px-3 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg"
          >
            Add to Card
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowData;
