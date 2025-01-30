import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const InventoryPage = () => {
  const [product, setProduct] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api-inventory");
      setProduct(response.data);
      console.log(response.data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = product.filter((car) => {
      let matchesPrice = true;
      let matchesType = true;

      // Check price filter
      if (priceFilter) {
        const productPrice = parseFloat(car.price);
        matchesPrice = productPrice <= parseFloat(priceFilter);
      }

      // Check type filter
      if (typeFilter) {
        matchesType = car.type === typeFilter;
      }

      return matchesPrice && matchesType;
    });

  return (
    <div className="flex flex-col min-h-screen">
      ``
      <div className="flex-grow">
        <div className="filter-container mt-22 flex flex-col md:flex-row md:justify-end items-center md:items-end mr-2 text-white space-y-2 md:space-y-0 md:space-x-4">
          <select
            onChange={(e) => setPriceFilter(e.target.value)}
            value={priceFilter}
            className="bg-gray-800 text-white p-2 rounded-lg"
          >
            <option value="">Select Price Range</option>
            <option value="50000">Up to $50,000</option>
            <option value="100000">Up to $100,000</option>
            <option value="200000">Up to $200,000</option>
            <option value="500000">Up to $500,000</option>
          </select>

          <select
            onChange={(e) => setTypeFilter(e.target.value)}
            value={typeFilter}
            className="bg-gray-800 text-white p-2 rounded-lg"
          >
            <option value="">Select Product Type</option>
            <option value="Supercar">Supercar</option>
            <option value="Sports Car">Sports Car</option>
            <option value="SUV">SUV</option>
          </select>
        </div>

        <div
          id="product-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-black"
        >
          {filteredProducts.map((product) => (
            <div
              key={product?.id}
              style={{ backgroundColor: "#322e2e" }}
              className="product noborder rounded-lg overflow-hidden shadow-lg text-white"
            >
              <a href={product?.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={product?.image}
                  alt={product?.alt}
                  className="w-full h-auto object-cover"
                />
              </a>
              <div className="p-4">
                <p className="car-info text-lg font-bold mb-2 text-center">
                  {product?.name}
                </p>
                <p className="car-price text-sm mb-4 text-center">
                  Price:{" "}
                  <span className="text-red-500 font-semibold text-center">
                    {product?.price}
                  </span>
                </p>
                <a
                  href={product?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-red-700 text-white h-10 w-full rounded-lg border-none cursor-pointer transition-all duration-500 ease-in-out z-10 m-2 hover:rounded-[60px_0px_60px_0px] hover:bg-white hover:text-red-700">
                    More Details
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
