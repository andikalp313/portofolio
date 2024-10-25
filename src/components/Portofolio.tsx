import gambar1 from "../assets/website.png";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: "Responsive Web Application",
      description:
        "Developed a fully responsive e-commerce platform using React and Tailwind CSS, with dynamic product listings and a custom shopping cart.",
      techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      image: { gambar1 }, // Replace with actual image
      alt: "Responsive Web Application",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Built a real-time chat app with WebSocket and TypeScript for seamless, instant messaging across multiple devices.",
      techStack: ["TypeScript", "WebSocket", "Node.js", "Express"],
      image: "https://via.placeholder.com/300", // Replace with actual image
      alt: "Real-time Chat Application",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed my personal portfolio to showcase projects and skills, with a clean UI built using Next.js and styled-components.",
      techStack: ["Next.js", "Styled-Components", "JavaScript"],
      image: "https://via.placeholder.com/300", // Replace with actual image
      alt: "Portfolio Website",
    },
    {
      title: "API Development for Social Media App",
      description:
        "Developed a REST API with authentication, user posts, and file uploads for a social media application.",
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      image: "https://via.placeholder.com/300", // Replace with actual image
      alt: "API Development",
    },
    {
      title: "Dashboard for Data Visualization",
      description:
        "Created a dynamic data visualization dashboard using D3.js, allowing users to interact with large datasets in real-time.",
      techStack: ["D3.js", "React", "Redux"],
      image: "https://via.placeholder.com/300", // Replace with actual image
      alt: "Data Visualization Dashboard",
    },
    {
      title: "Dashboard for Data Visualization",
      description:
        "Created a dynamic data visualization dashboard using D3.js, allowing users to interact with large datasets in real-time.",
      techStack: ["D3.js", "React", "Redux"],
      image: "https://via.placeholder.com/300", // Replace with actual image
      alt: "Data Visualization Dashboard",
    },
  ];

  return (
    <div id="Portofolio" className="bg-gray-800 px-4 py-16 text-center">
      <h2 className="mb-6 text-3xl font-bold text-white">
        My <span className="text-yellow-500">Portfolio</span>
      </h2>
      <p className="mb-12 text-gray-400">
        A collection of web development projects showcasing my technical skills
        and creativity.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <img
              src={gambar1}
              alt={item.alt}
              className="h-56 w-full object-cover"
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
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
