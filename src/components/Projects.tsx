// components/Projects.js
export default function Projects() {
  const projects = [
    {
      title: "Mail0 – Email OTP & Transactional Service",
      description:
        "Spring Boot application for secure OTP verification, welcome emails, and password reset flows.",
      image: "/Mail0.png",
      href: "https://github.com/SamsterZero/MailZero",
      color: "text-red-400",
      hoverBorder: "hover:border-red-500",
    },
    {
      title: "Fullstack Web Platform",
      description:
        "Next.js frontend with secure Spring Boot backend APIs, deployed on cloud.",
      image: "https://via.placeholder.com/400x200.png?text=Project+2",
      href: "",
      color: "text-blue-400",
      hoverBorder: "hover:border-blue-500",
    },
  ];

  return (
    <section id="projects" className="mb-20">
      <h2 className="text-3xl font-bold text-gray-100 mb-10 inline-block relative">
        🚀 Projects
        <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full"></span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={project.href}
            className={`bg-neutral-800 rounded-xl overflow-hidden shadow border border-neutral-700 ${project.hoverBorder} hover:shadow-xl transition`}
          >
            <img
              src={project.image}
              className="w-full h-52 object-cover border-b border-neutral-700"
              alt={project.title}
            />
            <div className="p-4">
              <h4 className={`text-lg font-semibold ${project.color} mb-2`}>
                {project.title}
              </h4>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
