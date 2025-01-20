import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex flex-col p-16">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1
          className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 font-extrabold mb-6"
          data-aos="fade-down"
        >
          Our Services
        </h1>
        <p
          className="text-2xl text-gray-300 font-light max-w-3xl mx-auto"
          data-aos="fade-down"
        >
          Transforming ideas into reality through cutting-edge technology and
          creative solutions. Explore our wide range of services.
        </p>
      </header>

      {/* Services Section */}
      <div className="space-y-16">
        {/* Web Application Development */}
        <ServiceCard
          title="Web Application Development"
          description="At KodeArcs, we specialize in crafting innovative web applications tailored to your unique business needs. From intuitive front-end designs to robust back-end development, we deliver scalable, secure, and user-friendly solutions."
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKpyvG1zKfyYnHmlVtrlBFs0qU_UfwrgbNw&s"
          imgAlt="Web Application Development"
          aosImg="fade-right"
          aosText="fade-left"
        />

        {/* Mobile Application Development */}
        <ServiceCard
          title="Mobile Application Development"
          description="KodeArcs delivers high-performance mobile apps that cater to businesses across various industries. Our expertise ensures sleek UI/UX designs coupled with scalable and efficient backend solutions for Android and iOS platforms."
          imgSrc="https://t4.ftcdn.net/jpg/04/78/08/31/360_F_478083183_6CQZKaiML4lyTBKOx450KCRkU0aExkVH.jpg"
          imgAlt="Mobile Application Development"
          aosImg="fade-left"
          aosText="fade-right"
          reverse
        />

        {/* Graphic Design */}
        <ServiceCard
          title="Graphic Design"
          description="Elevate your brand with KodeArcs’ top-notch graphic design services. From logos to marketing collateral, we bring creativity and innovation to every project to make your business stand out."
          imgSrc="https://w0.peakpx.com/wallpaper/570/885/HD-wallpaper-visual-communication-vs-graphic-design-digiwits-%E2%80%A2-digital-creative-copywriting-agency.jpg"
          imgAlt="Graphic Design"
          aosImg="fade-right"
          aosText="fade-left"
        />
      </div>

      {/* CTA Section */}
      <footer
        className="mt-20 text-center space-y-6"
        data-aos="fade-up"
      >
        <h2 className="text-5xl font-bold text-blue-400">
          Let's talk about your project!
        </h2>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
        >
          Contact Us
        </a>
      </footer>
    </div>
  );
}

function ServiceCard({ title, description, imgSrc, imgAlt, aosImg, aosText, reverse }) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } bg-gray-800 rounded-3xl shadow-xl overflow-hidden`}
      data-aos="fade-up"
    >
      <div
        className="lg:w-1/2 flex items-center justify-center p-8"
        data-aos={aosImg}
      >
        <img
          className="w-full max-w-lg rounded-lg transform hover:scale-105 transition duration-300"
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
      <div
        className="lg:w-1/2 p-10 flex flex-col justify-center space-y-4"
        data-aos={aosText}
      >
        <h3 className="text-4xl font-semibold text-blue-400">{title}</h3>
        <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
