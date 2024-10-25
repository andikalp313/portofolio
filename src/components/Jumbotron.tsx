import React from "react";
import { FaGithub } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Jumbotron: React.FC = () => {
  return (
    <section id="Home" className="bg-gray-800 py-20 text-white">
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-2">
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
          <button className="transform rounded-full bg-yellow-500 px-6 py-2 text-black transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-yellow-600">
            Contact us
          </button>
          {/* Social Media Links */}
          <div className="mt-6 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/andika-luhur-pambudi-6737852b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
            >
              <i className="fab fa-linkedin fa-lg"></i>
              <span className="ml-2">
                <FaLinkedin />
              </span>
            </a>
            <a
              href="https://www.youtube.com/@Sambatbahagiaa"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
            >
              <i className="fab fa-youtube fa-lg"></i>
              <span className="ml-2">
                <FaYoutube />
              </span>
            </a>
            <a
              href="https://www.instagram.com/andikalp_"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
            >
              <i className="fab fa-instagram fa-lg"></i>
              <span className="ml-2">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://github.com/andikalp313"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
            >
              <i className="fab fa-git fa-lg"></i>
              <span className="ml-2">
                <FaGithub />
              </span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGz1V0g-qozKA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729315685428?e=1735171200&v=beta&t=NZeWwShxaAMSx54wekltYdaN3Ktfsk51RNh5vBsa1ow"
            alt="Profile Anderson Coper"
            className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
