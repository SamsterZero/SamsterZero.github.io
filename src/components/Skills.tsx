// components/Skills.tsx
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      name: "Java",
      color: "text-blue-400",
      href: "https://www.oracle.com/java/",
    },
    { name: "Python", color: "text-red-400", href: "https://www.python.org/" },
    {
      name: "TypeScript",
      color: "text-blue-400",
      href: "https://www.typescriptlang.org/",
    },
    { name: "Kotlin", color: "text-red-400", href: "https://kotlinlang.org/" },
    {
      name: "JavaScript",
      color: "text-blue-400",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Spring Boot",
      color: "text-red-400",
      href: "https://spring.io/projects/spring-boot",
    },
    {
      name: "FastAPI",
      color: "text-blue-400",
      href: "https://fastapi.tiangolo.com/",
    },
    { name: "React", color: "text-red-400", href: "https://react.dev/" },
    { name: "Next.js", color: "text-blue-400", href: "https://nextjs.org/" },
    { name: "Kafka", color: "text-red-400", href: "https://kafka.apache.org/" },
    { name: "Docker", color: "text-blue-400", href: "https://www.docker.com/" },
    {
      name: "Prometheus",
      color: "text-red-400",
      href: "https://prometheus.io/",
    },
    { name: "Grafana", color: "text-blue-400", href: "https://grafana.com/" },
    { name: "JWT", color: "text-red-400", href: "https://www.jwt.io/" },
    { name: "OAuth2", color: "text-blue-400", href: "https://oauth.net/2/" },
    {
      name: "API Gateway",
      color: "text-red-400",
      href: "https://aws.amazon.com/api-gateway/",
    },
  ];

  return (
    <section id="skills" className="mb-20">
      <h2 className="text-3xl font-bold text-gray-100 mb-10 inline-block relative">
        🔧 Skills & Tech Stack
        <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 rounded-full"></span>
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.a
            key={index}
            href={skill.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px currentColor" }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 bg-neutral-800 ${skill.color} rounded-lg font-medium`}
          >
            {skill.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
