import gambar1 from "../assets/website.png";
import { BackgroundGradient } from "./ui/background-gradient";
import gambar2 from "../assets/chat.png";
import gambar3 from "../assets/portofolio.png";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: "Responsive Web Application",
      description:
        "Developed a fully responsive e-commerce platform using React and Tailwind CSS, with dynamic product listings and a custom shopping cart.",
      techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      image: gambar1,
      alt: "Responsive Web Application",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Built a real-time chat app with WebSocket and TypeScript for seamless, instant messaging across multiple devices.",
      techStack: ["TypeScript", "WebSocket", "Node.js", "Express"],
      image: gambar2,
      alt: "Real-time Chat Application",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed my personal portfolio to showcase projects and skills, with a clean UI built using Next.js and styled-components.",
      techStack: ["Next.js", "Styled-Components", "JavaScript"],
      image: gambar3,
      alt: "Portfolio Website",
    },
  ];

  return (
    <div
      id="Portofolio"
      className="bg-gray-800 px-4 py-20 text-center md:px-40"
    >
      <h2 className="mb-6 text-3xl font-bold text-white">
        My{" "}
        <span className="text-blue-500 hover:text-yellow-400 dark:text-blue-500">
          Portfolio
        </span>
      </h2>
      <p className="mb-11 text-gray-400">
        A collection of web development projects showcasing my technical skills
        and creativity.
      </p>

      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <BackgroundGradient className="pt-5">
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-gray-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-56 w-full object-contain pt-11"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-400">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block rounded bg-yellow-500 px-2 py-1 text-xs text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
