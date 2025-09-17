// components/Skills.js
export default function Skills() {
  const skills = [
    { name: "Java", color: "text-blue-400" },
    { name: "Python", color: "text-red-400" },
    { name: "TypeScript", color: "text-blue-400" },
    { name: "Kotlin", color: "text-red-400" },
    { name: "JavaScript", color: "text-blue-400" },
    { name: "Spring Boot", color: "text-red-400" },
    { name: "FastAPI", color: "text-blue-400" },
    { name: "React", color: "text-red-400" },
    { name: "Next.js", color: "text-blue-400" },
    { name: "Kafka", color: "text-red-400" },
    { name: "Docker", color: "text-blue-400" },
    { name: "Prometheus", color: "text-red-400" },
    { name: "Grafana", color: "text-blue-400" },
    { name: "OAuth2 / JWT", color: "text-red-400" },
    { name: "API Gateway", color: "text-blue-400" }
  ];

  return (
    <section id="skills" className="mb-20">
      <h2 className="text-3xl font-bold text-gray-100 mb-10 inline-block relative">
        🔧 Skills & Tech Stack
        <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full"></span>
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-3 py-1 bg-neutral-800 ${skill.color} rounded-lg font-medium hover:bg-neutral-700 transition`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}