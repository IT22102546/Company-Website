import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      title: "Web Application Development",
      description:
        "At KodeArcs, we specialize in crafting innovative web applications tailored to your unique business needs. From intuitive front-end designs to robust back-end development, we deliver scalable, secure, and user-friendly solutions.",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKpyvG1zKfyYnHmlVtrlBFs0qU_UfwrgbNw&s",
    },
    {
      title: "Mobile Application Development",
      description:
        "KodeArcs delivers high-performance mobile apps that cater to businesses across various industries. Our expertise ensures sleek UI/UX designs coupled with scalable and efficient backend solutions for Android and iOS platforms.",
      imgSrc: "https://t4.ftcdn.net/jpg/04/78/08/31/360_F_478083183_6CQZKaiML4lyTBKOx450KCRkU0aExkVH.jpg",
    },
    {
      title: "Graphic Design",
      description:
        "Elevate your brand with KodeArcs’ top-notch graphic design services. From logos to marketing collateral, we bring creativity and innovation to every project to make your business stand out.",
      imgSrc: "https://w0.peakpx.com/wallpaper/570/885/HD-wallpaper-visual-communication-vs-graphic-design-digiwits-%E2%80%A2-digital-creative-copywriting-agency.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-16">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1
          className="text-transparent text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 font-extrabold mb-4"
          data-aos="fade-down"
        >
          Our Services
        </h1>
        <p
          className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl mx-auto"
          data-aos="fade-down"
        >
          Transforming ideas into reality through cutting-edge technology and creative solutions.
        </p>
      </header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 hover:scale-105 transform transition duration-300 cursor-pointer"
            data-aos="fade-up"
            onClick={() => setSelectedService(service)}
          >
            <img
              src={service.imgSrc}
              alt={service.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-400">{service.title}</h3>
            <p className="text-sm text-gray-300">
              {service.description.slice(0, 100)}...
            </p>
          </div>
        ))}
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-gray-900 rounded-lg p-6 max-w-lg w-full shadow-lg space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedService.imgSrc}
              alt={selectedService.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-blue-400">{selectedService.title}</h3>
            <p className="text-gray-300">{selectedService.description}</p>
            <div className="flex space-x-4">
              {/* View More About Project Button */}
              <a
                href={`/projects/${selectedService.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                className="flex-grow bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 rounded-lg text-center hover:scale-105 transform transition duration-300"
              >
                View More About Project
              </a>
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="flex-grow bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:scale-105 transform transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
