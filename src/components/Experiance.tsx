const Experience: React.FC = () => {
  const experiences = [
    {
      period: "Oct 2024 - Present",
      title: "Web Developer Bootcamp Student",
      company: "Purwadhika Bootcamp",
      tools: "JavaScript, TypeScript, React, Next.js",
      description:
        "Currently developing skills in full-stack web development through an intensive bootcamp program focusing on JavaScript and modern web technologies.",
    },
    {
      period: "2020 - 2023",
      title: "Construction Worker",
      company: "Hayaken Construction, Japan",
      tools: "Japanese Language (N4), Teamwork, Heavy Equipment",
      description:
        "Worked as a construction worker in Japan for three years, mastering construction techniques and working in a fast-paced environment while improving communication skills in Japanese.",
    },
    {
      period: "2023 - 2024",
      title: "Farm Assistant",
      company: "Jet Farm, Japan",
      tools: "Japanese Language (N4), Farm Equipment, Livestock Management",
      description:
        "Assisted with day-to-day farming operations, including handling livestock and managing crops, while adapting to the rural agricultural environment in Japan.",
    },
    {
      period: "2019 - 2020",
      title: "Trainee",
      company: "LPK Bangkit Indonesia",
      tools: "Language & Cultural Training, Physical Endurance",
      description:
        "Completed a rigorous training program focusing on Japanese language (N4 level), culture, and physical challenges, preparing for professional life in Japan.",
    },
    {
      period: "2017",
      title: "Trainee",
      company: "elfi computer",
      tools: "Sewing, Time Management, Customer Service",
      description:
        "Operated a small tailoring business, delivering high-quality work while managing client relationships and service delivery.",
    },
  ];

  return (
    <div
      id="Experience"
      className="bg-gray-900 object-cover px-4 py-16 text-center"
    >
      <h2 className="mb-6 text-3xl font-bold text-white">
        My <span className="text-yellow-400">Experiences</span>
      </h2>
      <p className="mb-12 text-gray-400">
        A summary of my professional journey and the skills I’ve developed along
        the way.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-gray-800 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <h3 className="mb-2 text-xl font-semibold text-yellow-400">
              {experience.title}
            </h3>
            <h4 className="mb-2 text-gray-400">{experience.company}</h4>
            <p className="mb-4 italic text-gray-500">{experience.period}</p>
            <p className="mb-4 text-gray-400">{experience.description}</p>
            <p className="text-gray-500">
              <span className="font-semibold">Tools: </span>
              {experience.tools}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
