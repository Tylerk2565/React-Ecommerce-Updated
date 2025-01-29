const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-10">
        {/* Left Section */}
        <div className="text-sm md:text-base mb-4 md:mb-0">
          <p>&copy; 2024 Prestige Performance | Privacy Policy</p>
        </div>
        {/* Right Section */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-700 transition duration-300"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition duration-300"
          >
            <i className="fab fa-youtube text-xl"></i>
          </a>
          <a
            href="https://www.x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;