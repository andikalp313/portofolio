import konstruksi from "../assets/konstruksi.jpeg";

const AboutMe: React.FC = () => {
  return (
    <div
      id="AboutMe"
      className="lg:px-25 md:py-25 grid grid-cols-1 gap-20 bg-gray-800 px-4 py-40 text-white md:grid-cols-2 md:px-40"
    >
      {/* Image Section */}
      <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-lg md:h-[500px]">
        <img
          src={konstruksi}
          alt="Background Banner"
          className="absolute inset-0 h-full w-full rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex border-collapse flex-col gap-7 border-amber-400 text-center md:text-left">
        <h2 className="text-4xl font-bold text-yellow-500 transition-colors duration-300 hover:text-yellow-400">
          About<span className="text-white">Me.</span>
        </h2>

        <p className="ye text-lg leading-relaxed text-white transition-transform duration-300 ease-in-out hover:scale-105">
          Hi, I'm Andika Luhur Pambudi, a Web Developer specializing in
          full-stack development. I focus on building modern, responsive
          interfaces with React and Tailwind CSS.
        </p>
        <p className="text-lg leading-relaxed text-white hover:scale-105">
          With a background in construction and agriculture during my 4 years in
          Japan, I learned discipline and perseverance. I speak Japanese (N4)
          fluently and am improving my English while deepening my web
          development skills.
        </p>
        <p className="text-lg leading-relaxed text-white hover:scale-105">
          My goal is to contribute to impactful projects, combining my technical
          and multilingual abilities for global collaboration.
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="#contact"
            className="rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-yellow-600"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
