import React from "react";
import homeVideo from '../assets/homeVideo.mp4';
import Carousel from "../components/Carousel";

const HomePage = () => {
  return (
    <div className="bg-black text-white font-poppins">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-screen">
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-4xl font-bold absolute top-1/4 text-center px-4">
              Welcome to Prestige Performance
            </h1>
            <div className="flex flex-col md:flex-row justify-center gap-5 absolute top-[65%] z-10">
              <a href="/inventory">
                <button className="bg-red-700 text-white h-10 w-[200px] md:w-[310px] rounded-lg border-none cursor-pointer transition-all duration-500 ease-in-out z-10 m-2 hover:rounded-[60px_0px_60px_0px] hover:bg-white hover:text-red-700">
                  Inventory
                </button>
              </a>
              <a href="/contact">
                <button className="bg-red-700 text-white h-10 w-[200px] md:w-[310px] rounded-lg border-none cursor-pointer transition-all duration-500 ease-in-out z-10 m-2 hover:rounded-[60px_0px_60px_0px] hover:bg-white hover:text-red-700">
                  Contact
                </button>
              </a>
            </div>
          </div>
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src={homeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Inventory Section */}
        <section className="bg-gray-800 py-10">
          <h2 className="text-center text-2xl font-bold mb-5">Our Inventory</h2>
          <Carousel/>
        </section>
       

        {/* About Us Section */}
        <section className="py-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="mb-5">
              At Prestige Performance, we specialize in offering the finest
              selection of exotic and high-performance vehicles. From legendary
              brands like Ferrari, Lamborghini, Porsche, and McLaren, to rare
              limited editions and modern masterpieces, we deliver the ultimate
              in luxury, style, and performance.
            </p>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="mb-5">
              Our goal is simple: to provide an unparalleled car-buying
              experience. We're here to help you find the perfect vehicle that
              matches your passion for driving and performance.
            </p>
            <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">Curated Selection:</span> Only the
                best high-performance vehicles, handpicked for quality and
                rarity.
              </li>
              <li>
                <span className="font-bold">Expert Knowledge:</span> Our team is
                passionate about cars, offering you the insight and guidance you
                need.
              </li>
              <li>
                <span className="font-bold">Uncompromising Quality:</span> Every
                vehicle is rigorously inspected to ensure it meets our high
                standards.
              </li>
              <li>
                <span className="font-bold">Personalized Service:</span> We
                listen to your needs and provide tailored recommendations,
                making your buying journey seamless.
              </li>
            </ul>
            <h3 className="text-xl font-bold mt-5">
              Join the Prestige Performance Family
            </h3>
            <p className="mt-2">
              At Prestige Performance, you're not just buying a car—you're
              joining a community of automotive enthusiasts. Visit us today and
              let us help you find your dream car.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
