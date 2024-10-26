const Skills: React.FC = () => {
  const skills = [
    {
      title: "Web Development",
      description:
        "Experienced in building modern web applications using a range of technologies.",
      tools: "HTML, CSS, JavaScript, TypeScript, React, Node.js",
    },
    {
      title: "Version Control & Collaboration",
      description:
        "Proficient in using Git and GitHub for version control and team collaboration.",
      tools: "Git, GitHub, Branching & Merging",
    },
    {
      title: "Construction & Heavy Equipment",
      description:
        "Practical experience in construction work, including handling heavy equipment.",
      tools: "Teamwork, Physical Endurance, Heavy Equipment",
    },
    {
      title: "Agriculture & Livestock",
      description:
        "Hands-on experience working on a farm, managing livestock and handling equipment.",
      tools: "Farm Equipment, Livestock Management, Japanese Language (N4)",
    },
    {
      title: "Language Skills",
      description:
        "Skilled in communication in both Japanese and basic English, along with cultural knowledge.",
      tools: "Japanese (N4), Basic English",
    },
    {
      title: "Customer Service & Time Management",
      description:
        "Experience running a small tailoring business, handling customer service and managing deadlines.",
      tools: "Sewing, Time Management, Customer Service",
    },
  ];

  return (
    <div className="">
      <div id="Skills" className="bg-gray-800 px-4 py-12 text-center md:px-40">
        <h2 className="mb-6 text-3xl font-bold text-white">
          My <span className="text-yellow-400">Skills</span>
        </h2>
        <p className="mb-16 text-gray-400">
          A collection of skills I have developed through my experiences and
          education.
        </p>

        <div className="grid grid-cols-1 gap-10 hover:scale-105 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="max-w-96 overflow-hidden rounded-lg bg-gray-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <h3 className="mb-2 text-xl font-semibold text-yellow-400">
                {skill.title}
              </h3>
              <p className="mb-4 text-gray-400">{skill.description}</p>
              <p className="text-gray-500">
                <span className="font-semibold">Tools: </span>
                {skill.tools}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
