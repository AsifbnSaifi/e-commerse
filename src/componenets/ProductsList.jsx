import React, { useEffect, useState } from "react";
import ShowData from "./ShowData";
import Pagination from "./Pagination";

const ProductsList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData.products);
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //CategoryFilter
  const uniquedata = (data) => {
    let newValue = data.map((items) => {
      return items.category;
    });

    return (newValue = [...new Set(newValue)]);
  };
  const Categorydata = uniquedata(data);
  console.log(Categorydata);

  //Search
  // console.log("Search Term:", search);
  const filteredProducts = data.filter((item) => {
    const titleMatches = item.title.toLowerCase().includes(search.toLowerCase());
    const categoryMatches = !selectedCategory || item.category === selectedCategory;
            return titleMatches && categoryMatches;
  });
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset page when changing category
  };


  //pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Categoreis Filter */}
      <div className="bg-blue-500 w-full h-[3rem] mt-24">
        <div className="flex justify-center items-center py-[0.3rem] text-2xl font-bold space-x-7">
        {Categorydata.map((category, index) => (
            <div key={index} onClick={() => handleCategoryClick(category)}>
              <h1 className={`cursor-pointer ${category === selectedCategory ? 'text-white' : ''}`}>
                {category}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Search bar */}
      <div className="justify-center items-center flex mt-2">
        <input
          className="w-[20rem] lg:w-[50rem] font-normal px-4 py-3 my-4 border border-gray-600 text-lg shadow-lg outline-none bg-gray-100 rounded-md"
          placeholder="Search Products..."
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* MapProducts */}
      <div className="lg:flex flex-wrap lg:ml-[13rem] ml-14 mt-2">
        {currentItems?.map((products) => {
          return <ShowData key={products.id} products={products} />;
        })}
      </div>
      {/* Pagination */}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredProducts.length}
        paginate={paginate}
      />
    </>
  );
};

export default ProductsList;
