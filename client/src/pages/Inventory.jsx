import axios from "axios";
import { useState, useEffect } from "react";
import InventoryCard from "../components/InventoryCard";

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
      const productPrice = parseFloat(car.price.replace(/[^0-9.-]+/g, ""));
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
        <InventoryCard product={filteredProducts} />
      </div>
    </div>
  );
};

export default InventoryPage;
