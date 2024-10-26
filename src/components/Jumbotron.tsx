import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa6";
import kereta from "../assets/kereta.jpeg";

const Jumbotron: React.FC = () => {
  return (
    <section
      id="Home"
      className="bg-gray-800 px-4 py-10 text-white sm:px-4 md:px-4 md:py-24 lg:px-16"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-20 md:grid-cols-2">
        {/* Text Section */}
        <div>
          <p className="text-yellow-500 transition-transform duration-300 ease-in-out hover:scale-110">
            Hello, Welcome
          </p>
          <h1 className="mb-4 text-5xl font-bold transition-colors duration-300 ease-in-out hover:text-yellow-500">
            I&apos;m Andika Luhur Pambudi
          </h1>

          <p className="mb-6 transition-opacity duration-300 ease-in-out hover:opacity-75">
            I'm a dedicated web developer with a background in construction and
            agriculture from my time in Japan. Fluent in Japanese, I returned to
            Indonesia and completed a bootcamp at Purwadhika to strengthen my
            web development skills. With a disciplined, adaptable mindset, I’m
            eager to create innovative digital solutions.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full bg-yellow-500 px-6 py-2 text-black transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-yellow-600"
          >
            Hire Me
          </button>

          {/* Social Media Links */}
          <div className="mt-6 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/andika-luhur-pambudi-6737852b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com/@Sambatbahagiaa"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.instagram.com/andikalp_"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com/andikalp313"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-lg md:h-[500px]">
          <img
            src={kereta}
            alt="Background Banner"
            className="absolute inset-0 h-full w-full rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
