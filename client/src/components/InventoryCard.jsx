const InventoryCard = ({ product }) => {
  return (
    <div
    id="product-container"
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-black"
  >
    {product.map((car) => (
      <div
        key={car?.id}
        style={{ backgroundColor: "#322e2e" }}
        className="product noborder rounded-lg overflow-hidden shadow-lg text-white"
      >
        <a href={car?.link} target="_blank" rel="noopener noreferrer">
          <img
            src={car?.image}
            alt={car?.alt}
            className="w-full h-auto object-cover"
          />
        </a>
        <div className="p-4">
          <p className="car-info text-lg font-bold mb-2 text-center">
            {car?.name}
          </p>
          <p className="car-price text-sm mb-4 text-center">
            Price:{" "}
            <span className="text-red-500 font-semibold text-center">
              {car?.price}
            </span>
          </p>
          <a
            href={car?.link}
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
  );
}

export default InventoryCard;