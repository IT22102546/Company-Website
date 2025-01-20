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
    <div className="bg-gray-900 text-white min-h-screen flex flex-col p-16">
      <h1
        className="text-blue-100 text-8xl text-left font-extrabold mb-10"
        data-aos="fade-down"
      >
        Our Services
      </h1>
      <p className="text-3xl w-3/5 font-cinzel pb-20" data-aos="fade-down">
        We work with both product development, web solutions and mobile
        solutions, read more about our various services here...
      </p>

      {/* Web Application Development */}
      <div
        className="flex flex-col lg:flex-row bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8"
        data-aos="fade-up"
      >
        <div
          className="lg:w-1/2 flex items-center justify-center p-6"
          data-aos="fade-right"
        >
          <img
            className="w-full max-w-md rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKpyvG1zKfyYnHmlVtrlBFs0qU_UfwrgbNw&s"
            alt="Web Application Development"
          />
        </div>
        <div className="lg:w-1/2 p-8">
          <h2
            className="text-3xl font-cinzel text-blue-400 mb-4 animate-pulse hover:animate-bounce"
            data-aos="zoom-in"
          >
            Web Application Development
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            At KodeArcs, we specialize in crafting innovative web applications
            tailored to your unique business needs. From intuitive front-end
            designs to robust back-end development, our team delivers seamless
            solutions using modern technologies like the MERN stack. We provide
            end-to-end services, including database management, cloud
            integration, and ongoing support, ensuring your web application is
            scalable, secure, and user-friendly. Partner with us to bring your
            digital vision to life with efficiency and precision!
          </p>
        </div>
      </div>

      {/* Mobile Application Development */}
      <div
        className="flex flex-col lg:flex-row bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-8"
        data-aos="fade-up"
      >
        <div className="lg:w-1/2 p-8">
          <h2
            className="text-3xl font-cinzel text-blue-400 mb-4 animate-pulse hover:animate-bounce"
            data-aos="zoom-in"
          >
            Mobile Application Development
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            KodeArcs delivers high-performance mobile apps that cater to
            businesses across various industries. Our expertise ensures sleek
            UI/UX designs coupled with scalable and efficient backend solutions
            for both Android and iOS platforms.
          </p>
        </div>
        <div
          className="lg:w-1/2 flex items-center justify-center p-6"
          data-aos="fade-left"
        >
          <img
            className="w-full max-w-md rounded-lg"
            src="https://t4.ftcdn.net/jpg/04/78/08/31/360_F_478083183_6CQZKaiML4lyTBKOx450KCRkU0aExkVH.jpg"
            alt="Mobile Application Development"
          />
        </div>
      </div>

      {/* Graphic Design */}
      <div
        className="flex flex-col lg:flex-row bg-gray-800    rounded-2xl shadow-lg overflow-hidden mb-8"
        data-aos="fade-up"
      >
        <div
          className="lg:w-1/2 flex items-center justify-center p-6"
          data-aos="fade-right"
        >
          <img
            className="w-full max-w-md rounded-lg"
            src="https://w0.peakpx.com/wallpaper/570/885/HD-wallpaper-visual-communication-vs-graphic-design-digiwits-%E2%80%A2-digital-creative-copywriting-agency.jpg"
            alt="Graphic Design"
          />
        </div>
        <div className="lg:w-1/2 p-8">
          <h2
            className="text-3xl font-cinzel text-blue-400 mb-4 animate-pulse hover:animate-bounce"
            data-aos="zoom-in"
          >
            Graphic Design
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Elevate your brand with KodeArcs’ top-notch graphic design services.
            From logos to marketing collateral, we bring creativity and
            innovation to every project to make your business stand out.
          </p>
        </div>
      </div>

      <div
        className="text-6xl text-blue-200 p-10 font-semibold"
        data-aos="fade-up"
      >
        Let's talk about your project!
      </div>
      <div className="pl-10 pb-20"   data-aos="fade-up">
      <button className="hover:animate-bounce">
        {" "}
        <a href="/" className="hover:bg-slate-4 text-white text-4xl hover:text-gray-300 animate-bounce border border-blue-400 p-3 rounded-2xl">
          Contact Us
        </a>
      </button>
      </div>
     
    </div>
  );
}
