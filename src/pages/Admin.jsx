import axios from "axios";
import React, { useState } from "react";

const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    desp: "",
    price: "",
    catagory: "",
    brand :"",
    rating: "",
    stock: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    const responce = await axios.post('http://localhost:4000/addData' ,formData)
     console.log(responce)
  };

  return (
    <>
    <div className="mt-24">
      <form action="" onSubmit={handleSubmit}>

        <div className="text-center">
          <div className="space-x-3 mb-1">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange}
              className="border-2 border-black"
            />
          </div>

          <div  className="space-x-3 mb-1">
            <label htmlFor="desp">Description</label> {/* corrected htmlFor */}
            <input type="text" name="desp" value={formData.desp} onChange={handleChange} 
             className="border-2 border-black"/>
          </div>

          <div  className="space-x-3 mb-1">
            <label htmlFor="price">Price</label> {/* corrected htmlFor */}
            <input type="text" name="price" value={formData.price} onChange={handleChange}
             className="border-2 border-black" />
          </div>

          <div  className="space-x-3 mb-1">
            <label htmlFor="category">Category</label> {/* corrected htmlFor */}
            <input type="text" name="catagory" value={formData.catagory} onChange={handleChange}
             className="border-2 border-black" />
          </div>

          <div  className="space-x-3 mb-1">
            <label htmlFor="category">Brand</label> {/* corrected htmlFor */}
            <input type="text" name="brand" value={formData.brand} onChange={handleChange}
             className="border-2 border-black" />
          </div>

          <div  className="space-x-3 mb-1">
            <label htmlFor="category">Rating</label> {/* corrected htmlFor */}
            <input type="text" name="rating" value={formData.rating} onChange={handleChange}
             className="border-2 border-black" />
          </div>

          <div  className="space-x-3 mb-1">
            <label htmlFor="stock">Stock</label> {/* corrected htmlFor */}
            <input type="text" name="stock" value={formData.stock} onChange={handleChange}
             className="border-2 border-black" />
          </div>

          <div className="space-x-3 mb-1">
            <label htmlFor="image">Image</label> {/* corrected htmlFor */}
            <input type="text" name="image" value={formData.image} onChange={handleChange} 
             className="border-2 border-black"/>
          </div>

          <button className="py-2 px-4 bg-blue-500" type="submit">Save</button> {/* changed type to "submit" */}
        </div>
      </form>
    </div>
  </>
  );
};

export default Admin;
